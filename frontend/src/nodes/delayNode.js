import { BaseNode } from "./BaseNode";

export const DelayNode = () => {
  return (
    <BaseNode title="Delay" inputs={["in"]} outputs={["out"]}>
      <span>Wait</span>
    </BaseNode>
  );
};
