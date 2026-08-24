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

// Mapping dictionary based on manifesto filename prefixes
const prefixMap = {
  'AK': { position: 'hrep', hostel: 'AK' },
  'BD': { position: 'hrep', hostel: 'BD' },
  'BG': { position: 'hrep', hostel: 'BG' },
  'CVR': { position: 'hrep', hostel: 'CVR' },
  'GN': { position: 'hrep', hostel: 'GN' },
  'KR': { position: 'hrep', hostel: 'KR' },
  'ML': { position: 'hrep', hostel: 'ML' },
  'MR': { position: 'hrep', hostel: 'MR' },
  'RM': { position: 'hrep', hostel: 'RM' },
  'RP': { position: 'hrep', hostel: 'RP' },
  'SK': { position: 'hrep', hostel: 'SK' },
  'SR': { position: 'hrep', hostel: 'SR' },
  'VK': { position: 'hrep', hostel: 'VK' },
  'VY': { position: 'hrep', hostel: 'VY' },
  'Prez': { position: 'prez', hostel: null },
  'GenSec': { position: 'gensec', hostel: null },
  'DS': { position: 'drep', hostel: null }
};

async function syncManifestos() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected!");

    // Fetch up to 100 PDFs from the 'Manifestos' folder in Cloudinary
    console.log("Fetching assets from Cloudinary...");
    const result = await cloudinary.search
      .expression('folder:"Elections 2026-27/Manifestos"')
      .max_results(100)
      .execute();

    const candidates = [];

    // Parse each file
    for (const file of result.resources) {
      // public_id looks like: "Manifestos/BG_Manifesto_ANURAG"
      // Split by slash to get the filename, then split by underscore
      const filename = file.public_id.split('/').pop(); 
      const parts = filename.split('_'); 

      if (parts.length >= 3) {
        const prefix = parts[0]; // 'BG'
        const name = parts.slice(2).join(' '); // Re-join rest of string in case name has underscores
        const formattedName = toTitleCase(name);

        const mappedData = prefixMap[prefix];

        if (mappedData) {
          candidates.push({
            name: formattedName,
            position: mappedData.position,
            hostel: mappedData.hostel,
            manifesto: file.secure_url,
            // Fallbacks for the fields you will add later
            image: "PENDING",
            sop: "PENDING",
            offclist: "PENDING"
          });
        }
      }
    }

    console.log(`Found and parsed ${candidates.length} candidates. Inserting to MongoDB...`);
    
    // Insert all documents into MongoDB
    await Candidate.insertMany(candidates);
    
    console.log("✅ Successfully populated database!");
    process.exit(0);

  } catch (error) {
    console.error("❌ Error syncing data:", error);
    process.exit(1);
  }
}

syncManifestos();