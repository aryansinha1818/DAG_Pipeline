import { Handle, Position } from "reactflow";

export const BaseNode = ({ title, children, inputs = [], outputs = [] }) => {
  return (
    <div
      style={{
        minWidth: 200,
        padding: 10,
        borderRadius: 10,
        border: "1px solid #333",
        background: "#1C2536",
        color: "#fff",
      }}
    >
      <strong>{title}</strong>

      {inputs.map((id, idx) => (
        <Handle
          key={id}
          type="target"
          position={Position.Left}
          id={id}
          style={{ top: 40 + idx * 20 }}
        />
      ))}

      <div style={{ marginTop: 10 }}>{children}</div>

      {outputs.map((id, idx) => (
        <Handle
          key={id}
          type="source"
          position={Position.Right}
          id={id}
          style={{ top: 40 + idx * 20 }}
        />
      ))}
    </div>
  );
};
