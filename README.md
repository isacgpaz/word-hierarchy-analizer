# Word Hierarchy Analyzer - Apresentação Geral

Este projeto, **Word Hierarchy Analyzer**, é uma aplicação completa que inclui uma interface gráfica (frontend) e uma ferramenta de linha de comando (CLI) para análise de hierarquia de palavras com base em categorias definidas em um arquivo JSON. O objetivo da aplicação é facilitar a criação, visualização e análise de uma hierarquia de palavras, categorizando e contando palavras em frases fornecidas.

## Tecnologias Utilizadas

- **Frontend:**

  - React
  - TypeScript
  - Shadcn UI
  - Tailwind CSS
  - React Hook Form
  - Zod
  - Vite

- **CLI:**
  - NodeJS
  - TypeScript
  - Jest (para testes)

## Funcionalidades Principais

### Frontend:

1. **Criação de JSON**: Interface visual que permite criar uma estrutura de hierarquia de palavras em formato JSON.
2. **Exibição e Download de JSON**: Permite visualizar o JSON gerado e baixá-lo para utilização na CLI.
3. **Tabs**: O frontend possui duas abas principais:
   - **Montar JSON**: Adicione categorias, subcategorias e palavras de forma hierárquica.
   - **Visualizar e Baixar JSON**: Veja o JSON gerado e faça o download.

### CLI:

1. **Análise de Frases**: A CLI carrega o JSON com a hierarquia de palavras e analisa frases para encontrar e contar palavras dentro das categorias.
2. **Profundidade de Análise**: Defina o nível de profundidade para categorização das palavras.
3. **Métricas de Desempenho**: Exibe o tempo de carregamento e análise quando o modo detalhado (`verbose`) está ativado.

## Como Executar

### Frontend:

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Rode o frontend com `npm run dev` e acesse a aplicação em `http://localhost:5173`.

### CLI:

1. Salve o arquivo JSON gerado pelo frontend em `/cli/dicts/tree.json`.
2. No diretório `/cli`, execute o comando para análise de frases:
   ```bash
   bun run analyze --depth 3 --verbose true "Eu vi gorilas e papagaios"
   ```
3. Atualize os parâmetros da CLI conforme necessário.

## Exemplo de JSON

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

## Testes

- Execute os testes unitários da CLI com `npm test`.
- Um dos testes inclui a análise de uma frase com mais de 5000 caracteres.

Essa aplicação fornece uma solução integrada para criar, visualizar e analisar hierarquias de palavras tanto no frontend quanto na CLI.
