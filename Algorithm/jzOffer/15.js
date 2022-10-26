var hammingWeight = function(n) {
  return n.toString(2).split('').filter((item)=>{
       if(item==='1'){
           return item
       }
   }).length
};

console.log(hammingWeight(00000000000000000000000000001011))
