function linearSearch(searchTerm, arr) {
  let res = undefined
  arr.map((value,index)=>{
    if (value === searchTerm){
      res = index
    }
  })

  return res;
}

function globalLinearSearch(searchTerm, arr) {
  let res = []
  arr.map((value,index)=>{
    if (value === searchTerm){
      res.push(index)
    }
  })

  return res;
}
module.exports = { linearSearch, globalLinearSearch };
