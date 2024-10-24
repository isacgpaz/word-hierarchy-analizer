import { parseToJson } from "@/helpers/parse-to-json";
import { Tree } from "./tabs";
import { isCategoriesValids } from "@/helpers/is-categories-valids";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { TriangleAlert } from "lucide-react";

type TreeResult = {
  tree: Tree;
};

export function TreeResult({ tree }: TreeResult) {
  const isTreeValid = isCategoriesValids(tree);

  return (
    <div>
      <pre className="bg-slate-200 p-4 rounded-md">
        {JSON.stringify(parseToJson(tree), null, 2)}
      </pre>

      {!isTreeValid && (
        <Alert className="mt-6 bg-red-200">
          <TriangleAlert className="h-4 w-4" />
          <AlertTitle>Oops!</AlertTitle>
          <AlertDescription>
            Tree validation failed or incomplete. Go to <strong>build</strong>{" "}
            tab to fix it.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
