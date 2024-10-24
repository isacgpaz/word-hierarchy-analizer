import { Category, Tree } from "@/components/tabs";

export function parseToJson(tree: Tree) {
  function transform(subcategories: Category[], key: string) {
    const result: Record<string, object> = {};

    subcategories.forEach((subcategory) => {
      if (
        subcategory.name ||
        (subcategory?.values && subcategory.values.length > 0)
      ) {
        const subResult = transform(
          subcategory.subcategories ?? [],
          subcategory.name
        );

        if (subcategory?.values && subcategory.values.length > 0) {
          result[subcategory.name || key] = subcategory.values;
        } else {
          result[subcategory.name] = subResult;
        }
      }
    });

    return result;
  }

  return {
    [tree.name]: transform(tree.subcategories, tree.name),
  };
}
