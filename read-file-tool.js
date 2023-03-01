//import library

const fs = require("fs");

//function readfile
fs.readFile("./joao.sql", "utf8", (err, jsonString) => {
if (err) {
    console.log("File read failed:", err);
    return;
}
console.log("File data:", jsonString);
});