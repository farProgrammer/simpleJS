function removeDuplicates(array) {
    return array.filter((a, b) => 
    array.indexOf(a) === b)
  };
  // 2. forEach()
  function removeDuplicates(array) {
    let x = {};
    array.forEach(function(i) {
      if(!x[i]) {
        x[i] = true
      }
    })
    return Object.keys(x)
  };
  // 3. Set
  function removeDuplicates(array) {
    array.splice(0, array.length, ...(new Set(array)))
  };
  // 4. map()
  function removeDuplicates(array) {
    let a = []
    array.map(x =>
      if(!a.includes(x) {
        a.push(x)
      })
    return a
  };