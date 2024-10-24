import { TreeForm } from "./tree-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Tabss() {
  return (
    <Tabs
      defaultValue="build"
      className="max-w-xl w-full mx-auto h-full flex-1 flex flex-col"
    >
      <TabsList className="w-full gap-2 mb-6">
        <TabsTrigger value="build" className="w-full">
          Build
        </TabsTrigger>
        <TabsTrigger value="analyzer" className="w-full">
          Analyzer
        </TabsTrigger>
      </TabsList>
      <TabsContent value="build" className="h-full flex-1 flex flex-col">
        <TreeForm />
      </TabsContent>
      <TabsContent value="analyzer">Change your password here.</TabsContent>
    </Tabs>
  );
}
