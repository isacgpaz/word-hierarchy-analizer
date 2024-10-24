import { TreeForm } from "./tree-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useForm } from "react-hook-form";
import { TreeResult } from "./tree-result";
import { useState } from "react";

export type Category = {
  name: string;
  subcategories?: Category[];
  values?: string[];
};

export type Tree = {
  name: string;
  subcategories: Category[];
};

export function MainTabs() {
  const [tab, setTab] = useState("build");

  // The form is here to preserve state between tabs
  const form = useForm<Tree>({
    defaultValues: {
      name: "",
      subcategories: [],
    },
  });

  return (
    <Tabs
      value={tab}
      onValueChange={setTab}
      className="max-w-xl w-full mx-auto"
    >
      <TabsList className="w-full gap-2 mb-6">
        <TabsTrigger value="build" className="w-full">
          Build
        </TabsTrigger>
        <TabsTrigger value="visualize" className="w-full">
          Visualize
        </TabsTrigger>
      </TabsList>

      <TabsContent value="build">
        <TreeForm form={form} setTab={setTab} />
      </TabsContent>

      <TabsContent value="visualize">
        <TreeResult tree={form.watch()} />
      </TabsContent>
    </Tabs>
  );
}
