
const traverseDOM = (node, depth=0) => {
  // visit each child node in the given node,
  // and call yourself recursively on each

  const indent = Array(depth+1).join('   ');

  console.log(`${indent}${node.nodeName}: ${node.className}`);
  for( let i = 0; i < node.children.length; i++ ){
    traverseDOM( node.children[i], depth+1 );
  }
};

traverseDOM( document.body );
