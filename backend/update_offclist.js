require('dotenv').config();
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const Candidate = require('./models/Candidate');

// 1. Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET
});

// --- CUSTOM HELPER FUNCTION ---
function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

async function syncCampaigners() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected!");

    // Fetch up to 100 assets from the 'Campaigners Lists' folder in Cloudinary
    console.log("Fetching Campaigners lists files from Cloudinary...");
    const result = await cloudinary.search
      .expression('folder:"Elections 2026-27/Campaigners Lists"')
      .max_results(100)
      .execute();

    let updateCount = 0;

    // Parse each file
    for (const file of result.resources) {
      // Extracts filename (e.g., "BG_Campaigners_ANURODH_SAHU")
      const filename = file.public_id.split('/').pop(); 
      const parts = filename.split('_'); 

      if (parts.length >= 3) {
        // Extract raw name after prefix and type tag, then format to Title Case
        const rawName = parts.slice(2).join(' '); 
        const formattedName = toTitleCase(rawName);
        
        // Find candidate by name and update the 'offclist' field
        const updatedCandidate = await Candidate.findOneAndUpdate(
          { name: formattedName },
          { offclist: file.secure_url },
          { new: true }
        );

        if (updatedCandidate) {
          console.log(`✅ Updated Campaigners list for: ${formattedName}`);
          updateCount++;
        } else {
          console.log(`⚠️ Candidate not found in DB: ${formattedName}`);
        }
      }
    }

    console.log(`\n🎉 Successfully patched ${updateCount} candidates with their Official Campaigners list URLs!`);
    process.exit(0);

  } catch (error) {
    console.error("❌ Error syncing data:", error);
    process.exit(1);
  }
}

syncCampaigners();