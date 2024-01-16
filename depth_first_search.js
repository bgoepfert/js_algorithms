// adjacency list to represent a graph
const graph = {
  A: ["B", "D"],
  B: ["A", "C", "E"],
  C: ["B"],
  D: ["A", "E"],
  E: ["B", "D", "F"],
  F: ["E"],
};

// depth-first search returning [target, [path]]
function dfs(graph, head, target) {
  const stack = [head];
  const visited = new Set();
  const result = [];

  while (stack.length) {
    const vertex = stack.pop();

    if (vertex === target) {
      return [vertex, result];
    }

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);
    }

    for (const neighbour of graph[vertex]) {
      stack.push(neighbour);
    }
  }

  return [null, []];
}

const [target, path] = dfs(graph, "A", "F");
console.log(target);
console.log(path);
