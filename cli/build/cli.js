import * as fs from "fs";
import { performance } from "perf_hooks";
import path from "path";

function loadTree() {
  const data = fs.readFileSync(
    path.join(__dirname, "../dicts/tree.json"),
    "utf8"
  );
  return JSON.parse(data);
}

function parseBoolean(value) {
  return value?.toLowerCase() === "true";
}

function analyze(phrase, level, dict) {
  const words = phrase.toLowerCase().split(" ");
  const levelMatches = {};
  const wordCount = {};
  for (const word of words) {
    let search = function (obj, keys = []) {
      for (const key in obj) {
        const element = obj[key];
        if (Array.isArray(element)) {
          const newKeys = [...keys, key];
          const founded = element.find((el) => el.toLowerCase() === word);
          if (founded) {
            levelMatches[word] = [...newKeys, founded];
          }
        } else {
          search(element, [...keys, key]);
        }
      }
    };
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
    search(dict);
  }
  const categories = {};
  for (const word in wordCount) {
    if (levelMatches[word]) {
      const categoryKey = levelMatches[word][level - 1];
      categories[categoryKey] =
        wordCount[word] + (categories[categoryKey] || 0);
    }
  }
  if (
    categories.hasOwnProperty("undefined") ||
    Object.keys(categories).length === 0 ||
    phrase === ""
  ) {
    return 0;
  }
  const result = Object.entries(categories)
    .map(([key, value]) => `${key} = ${value}`)
    .join("; ");
  return result;
}
var startLoading = performance.now();
var depth = parseInt(process.argv[4]);
var verbose = parseBoolean(process.argv[6]);
var phrase = process.argv.slice(7).join(" ");
var endLoading = performance.now();
var tree = loadTree();
var startAnalysis = performance.now();
var result = analyze(phrase ?? "", depth, tree);
var endAnalysis = performance.now();
console.log(result);
if (verbose) {
  const table = [
    [
      "Tempo de carregamento dos par\xE2metros",
      `${(endLoading - startLoading).toFixed(2)}ms`,
    ],
    [
      "Tempo de verifica\xE7\xE3o da frase",
      `${(endAnalysis - startAnalysis).toFixed(2)}ms`,
    ],
  ];
  console.table(table);
}
