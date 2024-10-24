import { parseToJson } from "@/helpers/parse-to-json";
import { Tree } from "./tabs";
import { isCategoriesValids } from "@/helpers/is-categories-valids";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Download, TriangleAlert } from "lucide-react";
import { Button } from "./ui/button";

type TreeResult = {
  tree: Tree;
};

export function TreeResult({ tree }: TreeResult) {
  const isTreeValid = isCategoriesValids(tree);

  function downloadTree() {
    const blob = new Blob([JSON.stringify(tree, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${tree.name}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-col gap-6 items-center">
      {!isTreeValid && (
        <Alert className="bg-red-200">
          <TriangleAlert className="h-4 w-4" />
          <AlertTitle>Oops!</AlertTitle>
          <AlertDescription>
            Tree validation failed or incomplete. Go to <strong>build</strong>{" "}
            tab to fix it.
          </AlertDescription>
        </Alert>
      )}

      <pre className="bg-slate-200 p-4 rounded-md w-full">
        {JSON.stringify(parseToJson(tree), null, 2)}
      </pre>

      <Button onClick={downloadTree}>
        <Download className="w-4 h-4" />
        Download {tree.name && `${tree.name}.json`}
      </Button>
    </div>
  );
}
