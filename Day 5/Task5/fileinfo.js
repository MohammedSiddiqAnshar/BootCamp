const fs = require("fs");

const filePath = process.argv[2];

if (!filePath) {
    console.log("Usage: node fileInfo.js <file_path>");
    process.exit(1);
}

fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error("Error: File does not exist or cannot be accessed.");
        process.exit(1);
    }

    console.log(`File: ${filePath}`);
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Created: ${stats.birthtime}`);
    console.log(`Last Modified: ${stats.mtime}`);
});
