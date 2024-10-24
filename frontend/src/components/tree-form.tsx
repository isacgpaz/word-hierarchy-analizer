import { useFieldArray, useFormContext, UseFormReturn } from "react-hook-form";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Trash } from "lucide-react";
import { parseToJson } from "@/helpers/parse-to-json";
import { isCategoriesValids } from "@/helpers/is-categories-valids";
import { Tree } from "./tabs";

type TreeForm = {
  form: UseFormReturn<Tree>;
};

export function TreeForm({ form }: TreeForm) {
  const onSubmit = (data: Tree) => {
    console.log(JSON.stringify(data, null, 2));
    console.log(parseToJson(data));
  };

  const isTreeValid = isCategoriesValids(form.getValues());

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tree root name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex.: Animals"
                  {...field}
                  className="font-medium"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex-1">
          <CategoryList name="subcategories" />
        </div>

        <Button type="submit" disabled={!isTreeValid}>
          Submit
        </Button>
      </form>
    </Form>
  );
}

type CategoryListProps = {
  name: string;
  isValuesEmpty?: boolean;
};

function CategoryList({ name, isValuesEmpty = true }: CategoryListProps) {
  const { control, watch } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const addCategory = () => {
    append({ name: "", subcategories: [], values: [] });
  };

  return (
    <div>
      {fields.map((field, index) => {
        const categoryName = watch(`${name}[${index}].name`);
        const hasCategory =
          watch(`${name}[${index}].subcategories`).length === 0;
        const isValuesEmpty = watch(`${name}[${index}].values`).length < 1;

        return (
          <div
            key={field.id}
            className={cn(
              "flex flex-col gap-4 mb-4 border-2 p-4 rounded-lg bg-white"
            )}
          >
            <FormField
              control={control}
              name={`${name}[${index}].name`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category {hasCategory && "(optional)"}</FormLabel>
                  <FormControl>
                    <Input placeholder="Category" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {hasCategory && (
              <FormField
                control={control}
                name={`${name}[${index}].values`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Values {isValuesEmpty && "(opcional)"}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Values"
                        {...field}
                        value={field.value.join(", ")}
                        onChange={(event) => {
                          if (event.target.value) {
                            field.onChange(event.target.value.split(", "));
                          } else {
                            field.onChange([]);
                          }
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            )}

            {isValuesEmpty && (
              <CategoryList
                name={`${name}[${index}].subcategories`}
                isValuesEmpty={isValuesEmpty}
              />
            )}

            <Button
              type="button"
              onClick={() => remove(index)}
              className="flex-shrink-0 mt-0 ml-auto text-destructive px-0 h-fit hover:text-destructive"
              variant="ghost"
            >
              <Trash />
              Remove{" "}
              {categoryName
                ? `"${categoryName}"`
                : !isValuesEmpty
                ? "values"
                : "node"}
            </Button>
          </div>
        );
      })}

      {isValuesEmpty && (
        <Button
          type="button"
          onClick={addCategory}
          variant="outline"
          className="w-full border-dashed border-2 border-primary text-primary hover:text-primary"
        >
          Add new category node
        </Button>
      )}
    </div>
  );
}
