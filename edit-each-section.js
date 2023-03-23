let fs = require("fs");
let alma = require("./sections/alma.json");
let enos = require("./sections/enos.json");
let brief = require("./sections/brief.json");
let firstNephi = require("./sections/firstNephi.json");
let secondNephi = require("./sections/secondNephi-v1.json");
let jacob = require("./sections/jacob.json");
let jarom = require("./sections/jarom.json");
let mosiah = require("./sections/mosiah.json");
let omni = require("./sections/omni.json");
let origin = require("./sections/origin.json");
let other = require("./sections/other.json");
let title = require("./sections/title.json");
let wordsOfMormon = require("./sections/wordsOfMormon.json");

let questions = [
  ...alma,
  ...enos,
  ...brief,
  ...firstNephi,
  ...secondNephi,
  ...jacob,
  ...jarom,
  ...mosiah,
  ...omni,
  ...origin,
  ...other,
  ...title,
  ...wordsOfMormon,
];

let alma1 = [];
let enos1 = [];
let brief1 = [];
let firstNephi1 = [];
let secondNephi1 = [];
let jacob1 = [];
let jarom1 = [];
let mosiah1 = [];
let omni1 = [];
let origin1 = [];
let other1 = [];
let title1 = [];
let wordsOfMormon1 = [];

questions.forEach((q) => {
  if (q.ref.includes("Title Page")) {
    title1.push(q);
  } else if (q.ref.startsWith("Brief")) {
    brief1.push(q);
  } else if (q.ref.startsWith("Origin")) {
    origin1.push(q);
  } else if (q.ref.startsWith("1Nep")) {
    firstNephi1.push(q);
  } else if (q.ref.startsWith("2Nep")) {
    secondNephi1.push(q);
  } else if (q.ref.startsWith("Jac")) {
    jacob1.push(q);
  } else if (q.ref.startsWith("Omn")) {
    omni1.push(q);
  } else if (q.ref.startsWith("Eno")) {
    enos1.push(q);
  } else if (q.ref.startsWith("Jar")) {
    jarom1.push(q);
  } else if (q.ref.startsWith("Words")) {
    wordsOfMormon1.push(q);
  } else if (q.ref.startsWith("Mos")) {
    mosiah1.push(q);
  } else if (q.ref.startsWith("Alm")) {
    alma1.push(q);
  } else {
    other1.push(q);
  }
});

console.log(
  "title",
  title1.length,
  "brief",
  brief1.length,
  "origin",
  origin1.length,
  "firstNephi",
  firstNephi1.length,
  "secondNephi",
  secondNephi1.length,
  "jacob",
  jacob1.length,
  "omni",
  omni1.length,
  "enos",
  enos1.length,
  "jarom",
  jarom1.length,
  "wordsOfMormon",
  wordsOfMormon1.length,
  "mosiah",
  mosiah1.length,
  "alma",
  alma1.length,
  "other",
  other1.length
);

title1 = JSON.stringify(title1);
brief1 = JSON.stringify(brief1);
origin1 = JSON.stringify(origin1);
firstNephi1 = JSON.stringify(firstNephi1);
secondNephi1 = JSON.stringify(secondNephi1);
jacob1 = JSON.stringify(jacob1);
omni1 = JSON.stringify(omni1);
enos1 = JSON.stringify(enos1);
jarom1 = JSON.stringify(jarom1);
wordsOfMormon1 = JSON.stringify(wordsOfMormon1);
mosiah1 = JSON.stringify(mosiah1);
alma1 = JSON.stringify(alma1);
other1 = JSON.stringify(other1);

fs.writeFile("sections/title-v2.json", title1, () => {});
fs.writeFile("sections/brief-v2.json", brief1, () => {});
fs.writeFile("sections/origin-v2.json", origin1, () => {});
fs.writeFile("sections/firstNephi-v2.json", firstNephi1, () => {});
fs.writeFile("sections/secondNephi-v2.json", secondNephi1, () => {});
fs.writeFile("sections/jacob-v2.json", jacob1, () => {});
fs.writeFile("sections/omni-v2.json", omni1, () => {});
fs.writeFile("sections/enos-v2.json", enos1, () => {});
fs.writeFile("sections/jarom-v2.json", jarom1, () => {});
fs.writeFile("sections/wordsOfMormon-v2.json", wordsOfMormon1, () => {});
fs.writeFile("sections/mosiah-v2.json", mosiah1, () => {});
fs.writeFile("sections/alma-v2.json", alma1, () => {});
fs.writeFile("sections/other-v2.json", other1, () => {});
