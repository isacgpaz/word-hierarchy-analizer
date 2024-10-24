import * as fs from "fs";
import { performance } from "perf_hooks";

type Tree = {
  [key: string]: any;
};

function loadTree(): Tree {
  const data = fs.readFileSync("dicts/tree.json", "utf8");
  return JSON.parse(data);
}

function analyze(phrase: string, level: number, dict: Tree) {
  const words = phrase.toLowerCase().split(" ");

  const levelMatches: Record<string, string[]> = {};
  const wordCount: Record<string, number> = {};

  for (const word of words) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }

    function search(obj: any, keys: string[] = []) {
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
    }

    search(dict);
  }

  const categories: Record<string, number> = {};

  for (const word in wordCount) {
    if (levelMatches[word]) {
      const categoryKey = levelMatches[word][level - 1];

      categories[categoryKey] =
        wordCount[word] + (categories[categoryKey] || 0);
    }
  }

  if (categories.hasOwnProperty("undefined") || phrase === "") {
    return 0;
  }

  const result = Object.entries(categories)
    .map(([key, value]) => `${key} = ${value}`)
    .join("; ");

  return result;
}

const phrase = "Vi papagaios";
const level = 3;
const verbose = true;

const startLoading = performance.now();
const tree = loadTree();
const endLoading = performance.now();

const startAnalysis = performance.now();
const result = analyze(phrase, level, tree);
const endAnalysis = performance.now();

console.log(result);

if (verbose) {
  const table = [
    [
      "Tempo de carregamento dos parâmetros",
      `${(endLoading - startLoading).toFixed(2)}ms`,
    ],
    [
      "Tempo de verificação da frase",
      `${(endAnalysis - startAnalysis).toFixed(2)}ms`,
    ],
  ];

  console.table(table);
}
