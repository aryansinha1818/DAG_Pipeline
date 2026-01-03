import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { useStore } from "../store";

export const InputNode = ({ id }) => {
  const [name, setName] = useState("");
  const update = useStore((s) => s.updateNodeField);

  return (
    <BaseNode title="Input" outputs={["out"]}>
      <input
        placeholder="Input name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          update(id, "name", e.target.value);
        }}
      />
    </BaseNode>
  );
};
