import { Button } from "@halil07/core";
import { useIsomorphicLayoutEffect } from "@halil07/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("docs page");
  }, []);
  return (
    <div>
      <h1>halil07 Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
