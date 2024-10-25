# Word Hierarchy Analyzer

Este projeto é uma ferramenta de análise de palavras que utiliza uma árvore hierárquica de categorias para identificar e contar palavras em frases fornecidas. A aplicação pode ser executada via CLI e fornece métricas de desempenho sobre o tempo de execução.

## Tecnologias utilizadas

1. NodeJS
2. TypeScript
3. Jest

## Funcionalidades

- Carregamento de uma árvore hierárquica de palavras de um arquivo JSON.
- Análise de frases para encontrar palavras na árvore, categorizando-as e contando suas aparições.
- Suporte para diferentes níveis de profundidade na análise de categorias.
- Fornece métricas de desempenho como tempo de carregamento e tempo de análise.
- Opção para exibir resultados detalhados ou simples.

## Arquitetura

A aplicação é dividida em três funções principais:

1. **`loadTree()`**: Carrega o arquivo JSON contendo a hierarquia de palavras para análise.
2. **`parseBoolean(value: string)`**: Converte uma string para um valor booleano, aceitando variações maiúsculas e minúsculas de "true" e "false".
3. **`analyze(phrase: string, level: number, dict: Tree)`**: Analisa uma frase com base na hierarquia de palavras, conta as aparições e organiza os resultados de acordo com o nível de profundidade especificado.

## Estrutura da Árvore (`tree.json`)

A árvore de categorias deve ser definida em um arquivo JSON no seguinte formato:

```json
{
  "category1": ["word1", "word2"],
  "category2": {
    "subcategory": ["word3", "word4"]
  }
}
```

Por exemplo:

```json
{
  "fruits": {
    "citrus": ["orange", "lemon"],
    "tropical": ["banana", "mango"]
  },
  "vegetables": {
    "root": ["carrot", "beet"],
    "leafy": ["lettuce", "spinach"]
  }
}
```

## Como Usar

### Pré-requisitos

- Node.js ou Bun.js instalado na sua máquina.

### Instalação

1. Clone este repositório.
2. Instale as dependências com:

   ```bash
   npm install
   ```

### Executando a Aplicação

Execute o seguinte comando na linha de comando:

```bash
bun run start analyze -–depth --verbose --phrase
```

#### Parâmetros

- **`<nivel>`**: O nível de profundidade que a análise deve considerar dentro da árvore de categorias.
- **`<verbose>`**: Se deve exibir informações detalhadas sobre o tempo de execução (`true` ou `false`).
- **`<frase>`**: A frase que será analisada para contagem das palavras.

#### Exemplo

```bash
bun run cli.ts analyze --depth 1 --verbose true "Eu vi uma onça e um pato"
```

Neste exemplo, a aplicação:

- Carregará a árvore do arquivo `tree.json`.
- Analisará a frase "banana orange lemon".
- Retornará a contagem de palavras para a profundidade 1 (nível das categorias primárias).
- Exibirá as métricas de tempo de execução devido ao parâmetro `verbose=true`.

### Saída

A saída será uma string que mostra a categoria e a quantidade de palavras associadas a ela. Por exemplo:

```
tropical = 1; citrus = 2
```

Caso o parâmetro `verbose` seja `true`, também será exibida uma tabela com os tempos de execução:

```
┌─────────────────────────────────────┬─────────┐
│ (index)                             │ Values  │
├─────────────────────────────────────┼─────────┤
│ Tempo de carregamento dos parâmetros│ '2.50ms'│
│ Tempo de verificação da frase       │ '3.20ms'│
└─────────────────────────────────────┴─────────┘
```

## Testes

Para rodar os testes unitários, execute:

```bash
npm test
```

Os testes verificam a correta operação de funções como `loadTree`, `parseBoolean`, e `analyze`. Um dos testes verifica a análise de uma frase com mais de 5000 caracteres.
