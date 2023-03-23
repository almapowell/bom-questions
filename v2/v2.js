let fs = require("fs");
let questions = require("../questions.json");

let results = "";

questions.forEach((q, index) => {
  if (q.hasOwnProperty("options")) {
    if (q.options.length === 0) {
      let questionsStr = q.question.substring(0, q.question.indexOf("(") - 1);
      let optionsStr = q.question.substring(
        q.question.indexOf("("),
        q.question.lastIndexOf("(") - 1
      );
      let answerStr = q.question.substring(
        q.question.lastIndexOf("("),
        q.question.length - 1
      );
      let bareOptions = optionsStr
        .replace("-", "")
        .replace("(a)", "")
        .replace("(b)", "~")
        .replace("(c)", "~")
        .replace("(A)", "")
        .replace("(B)", "~")
        .replace("(C)", "~")
        .split("~")
        .map((o) =>
          o
            .trim()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        );
      // Setting the answer
      if (!answerStr) {
        q.answer = "&&&";
      } else if (answerStr.toLowerCase().includes("a")) {
        q.answer = bareOptions[0];
      } else if (answerStr.toLowerCase().includes("b")) {
        q.answer = bareOptions[1];
      } else if (answerStr.toLowerCase().includes("c")) {
        q.answer = bareOptions[2];
      } else {
        q.answer = "&&&";
      }
      q.question = questionsStr.trim();
      q.options = bareOptions;
    }
  }
  q.id = index + 1;
  results = results.concat(JSON.stringify(q)).concat(",");
});

fs.writeFile("final-v1.json", results, () => {});
