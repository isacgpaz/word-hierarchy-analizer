# Word Hierarchy Analyzer - Frontend

Este projeto é a interface gráfica (frontend) da aplicação **Word Hierarchy Analyzer**, que permite a criação e visualização de uma hierarquia de palavras em formato JSON. A interface possui duas abas principais: uma para montar a estrutura da hierarquia e outra para exibir o JSON gerado e baixá-lo, permitindo seu uso no backend da aplicação.

## Tecnologias utilizadas

1. React
2. TypeScript
3. Shadcn UI
4. Tailwind CSS
5. React Hook Form
6. Zod
7. Vite

## Funcionalidades

1. **Tab de Criação**: Interface para criar um JSON seguindo o formato esperado pelo analisador de hierarquia.
2. **Tab de Visualização e Download**: Exibe o JSON criado e permite baixá-lo no formato necessário para ser utilizado na CLI.

## Estrutura do Projeto

A interface é composta por duas abas principais:

1. **Montar JSON**: Permite ao usuário criar uma árvore de categorias e palavras, semelhante ao exemplo encontrado em `cli/dicts/tree.json`. Nesta aba, o usuário pode adicionar categorias, subcategorias e palavras, organizando a hierarquia de forma visual.
2. **Visualizar e Baixar JSON**: Mostra o JSON gerado a partir da aba de montagem e permite ao usuário baixar o arquivo para ser usado no backend da aplicação.

## Exemplo de JSON

Aqui está um exemplo do formato de JSON que pode ser gerado e baixado:

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

## Como Executar o Frontend

### Pré-requisitos

- Node.js instalado na sua máquina.

### Instalação

1. Clone este repositório.
2. Instale as dependências do frontend com:

   ```bash
   npm install
   ```

### Executando a Aplicação

Para rodar a aplicação localmente, utilize o comando:

```bash
npm run dev
```

A aplicação será executada e estará disponível em `http://localhost:5173`.

### Funcionalidades das Abas

- **Montar JSON**:

  - Adicionar categorias e subcategorias.
  - Adicionar palavras a cada categoria/subcategoria.
  - Visualizar a estrutura de hierarquia em tempo real.

- **Visualizar e Baixar JSON**:
  - Exibir o JSON gerado.
  - Botão para fazer o download do arquivo JSON e utilizar na CLI backend.

## Como Usar com a CLI

1. Baixe o arquivo JSON

2. Salve o arquivo JSON em /cli/dicts/tree.json

3. Vá para o diretório /cli e execute no terminal:

```
bun run analyze --depth 3 --verbose true "Eu vi gorilas e papagaios"
```

4. Atualize os parâmetros da CLI e divirta-se!
