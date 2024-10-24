import { analyze } from "./cli";
describe("Tree Analysis Functions", () => {
  describe("analyze", () => {
    const dict = {
      fruits: {
        citrus: ["orange", "lemon"],
        tropical: ["banana", "mango"],
      },
    };

    it("deve retornar a contagem de palavras corretamente", () => {
      const result = analyze("banana orange banana", 2, dict);
      expect(result).toBe("tropical = 2; citrus = 1");
    });

    it("deve retornar 0 se a frase estiver vazia", () => {
      const result = analyze("", 1, dict);
      expect(result).toBe(0);
    });

    it("deve retornar 0 se não houver correspondência", () => {
      const result = analyze("kiwi", 1, dict);
      expect(result).toBe(0);
    });

    it("deve considerar o nível na análise", () => {
      const result = analyze("orange", 2, dict);
      expect(result).toBe("citrus = 1");
    });

    it("deve lidar com texto longo corretamente", () => {
      const longPhrase = "banana ".repeat(2500) + "orange ".repeat(2500); // totalizando mais de 5000 caracteres
      const result = analyze(longPhrase.trim(), 2, dict);
      expect(result).toBe("tropical = 2500; citrus = 2500");
    });
  });
});
