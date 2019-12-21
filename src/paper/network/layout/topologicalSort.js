const topologicalSort = (nodesArray, edgesArray) => {
  // adapted from https://simplapi.wordpress.com/2015/08/19/detect-graph-cycle-in-javascript/
  const nodes = [];
  const nodeHash = {};
  edgesArray.forEach(edge => {
    if (!edge.source.id || !edge.target.id) {
      return false;
    }
    if (!nodeHash[edge.source.id]) {
      nodeHash[edge.source.id] = { _id: edge.source.id, links: [] };
      nodes.push(nodeHash[edge.source.id]);
    }
    if (!nodeHash[edge.target.id]) {
      nodeHash[edge.target.id] = { _id: edge.target.id, links: [] };
      nodes.push(nodeHash[edge.target.id]);
    }
    nodeHash[edge.source.id].links.push(edge.target.id);
  });

  // Test if a node got any icoming edge
  function hasIncomingEdge(list, node) {
    for (let i = 0, l = list.length; i < l; ++i) {
      if (list[i].links.indexOf(node._id) !== -1) {
        return true;
      }
    }
    return false;
  }

  // Kahn Algorithm
  const L = [],
    S = nodes.filter(node => !hasIncomingEdge(nodes, node));

  let n = null;

  while (S.length) {
    // Remove a node n from S
    n = S.pop();
    // Add n to tail of L
    L.push(n);

    let i = n.links.length;
    while (i--) {
      // Getting the node associated to the current stored id in links
      const m = nodes[nodes.map(d => d._id).indexOf(n.links[i])];

      // Remove edge e from the graph
      n.links.pop();

      if (!hasIncomingEdge(nodes, m)) {
        S.push(m);
      }
    }
  }

  // If any of them still got links, there is cycle somewhere
  const nodeWithEdge = nodes.find(node => node.links.length !== 0);

  return nodeWithEdge ? null : L;
};

export default topologicalSort;
