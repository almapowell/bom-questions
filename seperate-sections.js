let fs = require("fs");
let questions = require("./v4/version-4.json");

let title = [];
let brief = [];
let origin = [];
let firstNephi = [];
let secondNephi = [];
let jacob = [];
let omni = [];
let enos = [];
let jarom = [];
let wordsOfMormon = [];
let mosiah = [];
let alma = [];
let other = [];

questions.forEach((q, index) => {
  if (q.ref.includes("Title Page")) {
    title.push(q);
  } else if (q.ref.startsWith("Brief")) {
    brief.push(q);
  } else if (q.ref.startsWith("Origin")) {
    origin.push(q);
  } else if (q.ref.startsWith("1Nep")) {
    firstNephi.push(q);
  } else if (q.ref.startsWith("2Nep")) {
    secondNephi.push(q);
  } else if (q.ref.startsWith("Jac")) {
    jacob.push(q);
  } else if (q.ref.startsWith("Omn")) {
    omni.push(q);
  } else if (q.ref.startsWith("Eno")) {
    enos.push(q);
  } else if (q.ref.startsWith("Jar")) {
    jarom.push(q);
  } else if (q.ref.startsWith("Words")) {
    wordsOfMormon.push(q);
  } else if (q.ref.startsWith("Mos")) {
    mosiah.push(q);
  } else if (q.ref.startsWith("Alm")) {
    alma.push(q);
  } else {
    other.push(q);
  }
});

console.log(
  "title",
  title.length,
  "brief",
  brief.length,
  "origin",
  origin.length,
  "firstNephi",
  firstNephi.length,
  "secondNephi",
  secondNephi.length,
  "jacob",
  jacob.length,
  "omni",
  omni.length,
  "enos",
  enos.length,
  "jarom",
  jarom.length,
  "wordsOfMormon",
  wordsOfMormon.length,
  "mosiah",
  mosiah.length,
  "alma",
  alma.length,
  "other",
  other.length
);

title = JSON.stringify(title);
brief = JSON.stringify(brief);
origin = JSON.stringify(origin);
firstNephi = JSON.stringify(firstNephi);
secondNephi = JSON.stringify(secondNephi);
jacob = JSON.stringify(jacob);
omni = JSON.stringify(omni);
enos = JSON.stringify(enos);
jarom = JSON.stringify(jarom);
wordsOfMormon = JSON.stringify(wordsOfMormon);
mosiah = JSON.stringify(mosiah);
alma = JSON.stringify(alma);
other = JSON.stringify(other);

fs.writeFile("title.json", title, () => {});
fs.writeFile("brief.json", brief, () => {});
fs.writeFile("origin.json", origin, () => {});
fs.writeFile("firstNephi.json", firstNephi, () => {});
fs.writeFile("secondNephi.json", secondNephi, () => {});
fs.writeFile("jacob.json", jacob, () => {});
fs.writeFile("omni.json", omni, () => {});
fs.writeFile("enos.json", enos, () => {});
fs.writeFile("jarom.json", jarom, () => {});
fs.writeFile("wordsOfMormon.json", wordsOfMormon, () => {});
fs.writeFile("mosiah.json", mosiah, () => {});
fs.writeFile("alma.json", alma, () => {});
fs.writeFile("other.json", other, () => {});
