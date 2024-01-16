// adjacency list to represent a graph
const graph = {
  A: ["B", "D"],
  B: ["A", "C", "E"],
  C: ["B"],
  D: ["A", "E"],
  E: ["B", "D", "F"],
  F: ["E"],
};

// breadth-first search returning [target, [path]]
function bfs(graph, head, target) {
  const queue = [head]; // Not a real queue, shift is O(n), but good enough for simulation.
  const visited = new Set();
  const result = [];

  while (queue.length) {
    const vertex = queue.shift();

    if (vertex === target) {
      return [vertex, result];
    }

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbour of graph[vertex]) {
        queue.push(neighbour);
      }
    }
  }

  return [null, []];
}

const [target, path] = bfs(graph, "A", "F");
console.log(target);
console.log(path);
