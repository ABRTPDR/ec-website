require('dotenv').config();
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const Candidate = require('./models/Candidate');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET
});

// Helper function
function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

async function syncSOPs() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected!");

    // Fetch up to 100 PDFs from the 'SOPs' folder in Cloudinary
    console.log("Fetching SOPs from Cloudinary...");
    const result = await cloudinary.search
      .expression('folder:"By-Elections 2026-27/SOPs"')
      .max_results(100)
      .execute();

    let updateCount = 0;

    // Parse each file
    for (const file of result.resources) {
      // public_id looks like: "By-Elections 2026-27/SOPs/MR_SOP_A_B"
      const filename = file.public_id.split('/').pop(); 
      const parts = filename.split('_'); 

      if (parts.length >= 3) {
        // Extract the raw uppercase name, then pass it through our custom function
        const rawName = parts.slice(2).join(' '); 
        const formattedName = toTitleCase(rawName);
        
        // Find the candidate by their Title Case name and update only the 'sop' field
        const updatedCandidate = await Candidate.findOneAndUpdate(
          { name: formattedName }, // Find criteria
          { sop: file.secure_url }, // The specific field to update
          { new: true } // Return the updated document
        );

        if (updatedCandidate) {
          console.log(`✅ Updated SOP for: ${formattedName}`);
          updateCount++;
        } else {
          console.log(`⚠️ Candidate not found in DB: ${formattedName}`);
        }
      }
    }

    console.log(`\n🎉 Successfully patched ${updateCount} candidates with their SOP URLs!`);
    process.exit(0);

  } catch (error) {
    console.error("❌ Error syncing data:", error);
    process.exit(1);
  }
}

syncSOPs();