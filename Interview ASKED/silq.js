console.log("working")


const leaf1 = { val: "Leaf 1", parent: null };
const leaf2 = { val: "Leaf 2", parent: null };
const leaf3 = { val: "Leaf 3", parent: null };
const leaf4 = { val: "Leaf 4", parent: null };

const internal1 = { val: "Internal 1", parent: null };
const internal2 = { val: "Internal 2", parent: null };

const root = { val: "Root", parent: null };

leaf1.parent = internal1;
leaf2.parent = internal1;
leaf3.parent = internal2;
leaf4.parent = internal2;
internal1.parent = root;
internal2.parent = root;

const tree = [leaf1,root, internal1, internal2, , leaf2, leaf3, leaf4];
const node = root

//expected to return a list of objects
const getSiblings = (node,tree)=>{
  
//   console.log(node.parent.val)
  const parentVal = node.parent.val
  // check node parent and should be same for sibling node
  const sibilingNodes = tree.filter((x)=> x?.parent?.val===parentVal && x.val!=node.val)
                                 
  console.log(sibilingNodes)
  
  
  
  
}
// getSiblings(node,tree)
                                    
                                    
// const getDescendants = (node,tree)=>{

//    let descendants = []
//    function iterate(node){
//      for(let n of tree){
//           if(n?.parent?.val===node?.val){
//                descendants.push(n)   
//                iterate(n)
//           }                
//      }
//     } 
//    iterate(node)
//    console.log(descendants)
  
  
// }
                                    
const getDescendants = (node,tree)=>{
                                    
   let map = new Map();
   for(let n of tree){
      if(n?.parent){
        if(!map.has(n.parent)){
           map.set(n.parent.val,[])                    
        }
        map.get(n.parent.val).push(n)
      }
   }
   console.log(map.get("Internal 1"))
  
//    let descendants = []
//    function iterate(node){
//      for(let n of tree){
//           if(n?.parent?.val===node?.val){
//                descendants.push(n)   
//                iterate(n)
//           }                
//      }
//     } 
//    iterate(node)
//    console.log(descendants)
  
  
}
                                    
                                    
getDescendants(node,tree)