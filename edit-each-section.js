let fs = require("fs");
let alma = require("./sections/alma-v2.json");
let enos = require("./sections/enos-v2.json");
let brief = require("./sections/brief-v2.json");
let firstNephi = require("./sections/firstNephi-v2.json");
let secondNephi = require("./sections/secondNephi-v2.json");
let jacob = require("./sections/jacob-v2.json");
let jarom = require("./sections/jarom-v2.json");
let mosiah = require("./sections/mosiah-v2.json");
let omni = require("./sections/omni-v2.json");
let origin = require("./sections/origin-v2.json");
let other = require("./sections/other-v2.json");
let title = require("./sections/title-v2.json");
let wordsOfMormon = require("./sections/wordsOfMormon-v2.json");

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
  let answer = [];
  if (!Array.isArray(q.answer)) {
  }

  let obj = {
    ...q,
  };

  // if (q.ref.includes("Title Page")) {
  //   title1.push(q);
  // } else if (q.ref.startsWith("Brief")) {
  //   brief1.push(q);
  // } else if (q.ref.startsWith("Origin")) {
  //   origin1.push(q);
  // } else if (q.ref.startsWith("1Nep")) {
  //   firstNephi1.push(q);
  // } else if (q.ref.startsWith("2Nep")) {
  //   secondNephi1.push(q);
  // } else if (q.ref.startsWith("Jac")) {
  //   jacob1.push(q);
  // } else if (q.ref.startsWith("Omn")) {
  //   omni1.push(q);
  // } else if (q.ref.startsWith("Eno")) {
  //   enos1.push(q);
  // } else if (q.ref.startsWith("Jar")) {
  //   jarom1.push(q);
  // } else if (q.ref.startsWith("Words")) {
  //   wordsOfMormon1.push(q);
  // } else if (q.ref.startsWith("Mos")) {
  //   mosiah1.push(q);
  // } else if (q.ref.startsWith("Alm")) {
  //   alma1.push(q);
  // } else {
  //   other1.push(q);
  // }
});

// console.log(
//   "title",
//   title1.length,
//   "brief",
//   brief1.length,
//   "origin",
//   origin1.length,
//   "firstNephi",
//   firstNephi1.length,
//   "secondNephi",
//   secondNephi1.length,
//   "jacob",
//   jacob1.length,
//   "omni",
//   omni1.length,
//   "enos",
//   enos1.length,
//   "jarom",
//   jarom1.length,
//   "wordsOfMormon",
//   wordsOfMormon1.length,
//   "mosiah",
//   mosiah1.length,
//   "alma",
//   alma1.length,
//   "other",
//   other1.length
// );

// title1 = JSON.stringify(title1);
// brief1 = JSON.stringify(brief1);
// origin1 = JSON.stringify(origin1);
// firstNephi1 = JSON.stringify(firstNephi1);
// secondNephi1 = JSON.stringify(secondNephi1);
// jacob1 = JSON.stringify(jacob1);
// omni1 = JSON.stringify(omni1);
// enos1 = JSON.stringify(enos1);
// jarom1 = JSON.stringify(jarom1);
// wordsOfMormon1 = JSON.stringify(wordsOfMormon1);
// mosiah1 = JSON.stringify(mosiah1);
// alma1 = JSON.stringify(alma1);
// other1 = JSON.stringify(other1);

// fs.writeFile("sections-v3/title-v3.json", title1, () => {});
// fs.writeFile("sections-v3/brief-v3.json", brief1, () => {});
// fs.writeFile("sections-v3/origin-v3.json", origin1, () => {});
// fs.writeFile("sections-v3/firstNephi-v3.json", firstNephi1, () => {});
// fs.writeFile("sections-v3/secondNephi-v3.json", secondNephi1, () => {});
// fs.writeFile("sections-v3/jacob-v3.json", jacob1, () => {});
// fs.writeFile("sections-v3/omni-v3.json", omni1, () => {});
// fs.writeFile("sections-v3/enos-v3.json", enos1, () => {});
// fs.writeFile("sections-v3/jarom-v3.json", jarom1, () => {});
// fs.writeFile("sections-v3/wordsOfMormon-v3.json", wordsOfMormon1, () => {});
// fs.writeFile("sections-v3/mosiah-v3.json", mosiah1, () => {});
// fs.writeFile("sections-v3/alma-v3.json", alma1, () => {});
// fs.writeFile("sections-v3/other-v3.json", other1, () => {});
