import { BaseNode } from "./BaseNode";

export const LLMNode = () => (
  <BaseNode title="LLM" inputs={["system", "prompt"]} outputs={["response"]}>
    <span>LLM Processing</span>
  </BaseNode>
);
