const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID ||"mFxHxC7S#S7s7q4U6AtQ5_zIn2_auGfdGnDZYJNdOimQmpXF143I",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/6BrBx8B/Screenshot-20240313-205627-Gallery.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello IAM ALIVE WELL🟢❤️‍🔥👋 ● ♤Created by Nipuna promod♤",
};
