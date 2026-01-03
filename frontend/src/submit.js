import { useStore } from "./store";

export function SubmitButton() {
  const { nodes, edges } = useStore();

  const submitPipeline = async () => {
    const res = await fetch("http://localhost:8000/pipelines/parse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nodes: nodes.map((n) => ({ id: n.id })),
        edges: edges.map((e) => ({ source: e.source, target: e.target })),
      }),
    });

    const data = await res.json();

    alert(
      `Pipeline Summary\n\nNodes: ${data.num_nodes}\nEdges: ${
        data.num_edges
      }\nDAG: ${data.is_dag ? "Yes" : "No"}`
    );
  };

  return <button onClick={submitPipeline}>Submit</button>;
}
