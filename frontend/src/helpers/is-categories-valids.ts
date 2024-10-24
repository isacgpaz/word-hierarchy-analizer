import { Category } from "@/components/tree-form";

export function isCategoriesValids(category: Category) {
  if (typeof category.name !== "string" || category.name.trim() === "") {
    return false;
  }

  if (Array.isArray(category.subcategories)) {
    for (const subcategory of category.subcategories) {
      if (!isCategoriesValids(subcategory)) {
        return false;
      }
    }
  }

  if (category.subcategories && category.subcategories.length > 0) {
    for (const subcategory of category.subcategories) {
      if (
        subcategory.values &&
        subcategory.values.length === 0 &&
        subcategory.subcategories?.length === 0
      ) {
        return false;
      }
    }
  }

  return true;
}
