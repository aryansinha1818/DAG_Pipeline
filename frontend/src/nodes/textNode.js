import { useState, useMemo, useEffect } from "react";
import { useUpdateNodeInternals } from "reactflow";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id }) => {
  const [text, setText] = useState("");
  const updateNodeInternals = useUpdateNodeInternals();

  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;
    const found = new Set();
    let match;

    while ((match = regex.exec(text))) {
      found.add(match[1]);
    }

    return Array.from(found);
  }, [text]);

  // 🔑 CRITICAL FIX
  useEffect(() => {
    updateNodeInternals(id);
  }, [variables, id, updateNodeInternals]);

  return (
    <BaseNode title="Text" inputs={variables} outputs={["out"]}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: Math.max(200, text.length * 6),
          height: Math.max(80, text.split("\n").length * 24),
        }}
      />
    </BaseNode>
  );
};
