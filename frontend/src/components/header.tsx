export function Header() {
  return (
    <header className="flex flex-col items-center justify-center max-w-2xl mx-auto">
      <h1 className="font-bold text-3xl">Word Hierarchy Builder</h1>

      <span className="text-muted-foreground mt-2 text-center">
        Use the form below to create a word hierarchy in JSON format. Start by
        adding main categories, then subcategories, and finally words under each
        subcategory. When adding words to the final nodes (values),{" "}
        <span className="font-medium">
          separate multiple values with commas
        </span>
        .
      </span>
    </header>
  );
}
