import { BaseNode } from "./BaseNode";

export const MathNode = () => {
  return (
    <BaseNode title="Math" inputs={["a", "b"]} outputs={["sum"]}>
      <span>Add Numbers</span>
    </BaseNode>
  );
};
