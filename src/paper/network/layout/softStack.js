const hierarchyDecorator = (hierarchy, hashEntries, nodeIDAccessor, nodes) => {
  if (hierarchy.children) {
    hierarchy.children.forEach(child => {
      const theseEntries = hashEntries.filter(entry => entry[1] === child.id);
      theseEntries.forEach(entry => {
        const idNode =
          nodes.find(node => nodeIDAccessor(node) === entry[0]) || {};

        child.childHash[entry[0]] = {
          id: entry[0],
          children: [],
          childHash: {},
          ...idNode
        };
        child.children.push(child.childHash[entry[0]]);
      });
      if (child.children.length > 0) {
        hierarchyDecorator(child, hashEntries, nodeIDAccessor, nodes);
      }
    });
  }
};

const softStack = (
  edges,
  nodes,
  sourceAccessor,
  targetAccessor,
  nodeIDAccessor
) => {
  let hierarchy = { id: 'root-generated', children: [], childHash: {} };
  const discoveredHierarchyHash = {};
  const targetToSourceHash = {};
  let hasLogicalRoot = true;
  let isHierarchical = true;

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];

    const source = sourceAccessor(edge);
    const target = targetAccessor(edge);
    const sourceID =
      typeof source === 'object' ? nodeIDAccessor(source) : source;
    const targetID =
      typeof target === 'object' ? nodeIDAccessor(target) : target;

    targetToSourceHash[targetID] = sourceID;

    if (!discoveredHierarchyHash[sourceID]) {
      discoveredHierarchyHash[sourceID] = targetID;
    } else {
      isHierarchical = false;
      break;
    }
  }
  if (isHierarchical) {
    const hashEntries = Object.values(discoveredHierarchyHash);
    hashEntries.forEach(entry => {
      const target = entry;
      if (!discoveredHierarchyHash[target]) {
        discoveredHierarchyHash[target] = 'root-generated';
        const idNode =
          nodes.find(node => nodeIDAccessor(node) === target) || {};
        hierarchy.childHash[target] = {
          id: target,
          children: [],
          childHash: {},
          ...idNode
        };
        hierarchy.children.push(hierarchy.childHash[target]);
      }
    });

    hierarchyDecorator(hierarchy, hashEntries, nodeIDAccessor, nodes);

    nodes.forEach(node => {
      const nodeID = nodeIDAccessor(node);
      if (!discoveredHierarchyHash[nodeID] && !targetToSourceHash[nodeID]) {
        hierarchy.children.push({
          id: nodeID,
          children: [],
          childHash: {},
          ...node
        });
      }
    });

    if (hierarchy.children.length === 1) {
      hierarchy = hierarchy.children[0];
      hasLogicalRoot = false;
    }

    return { hierarchy, isHierarchical: true, hasLogicalRoot };
  }

  return { hierarchy: {}, isHierarchical: false, hasLogicalRoot: false };
};

export default softStack;
