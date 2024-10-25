
function collectPuzzle(...puzzles) {
    const allPuzzles = [...redPuzzles,...bluePuzzles,...greenPuzzles]
    const resultPuzzles = clearDuplicate(allPuzzles)
    return resultPuzzles.flat()
  }

//去除数组中重复元素的函数
function clearDuplicate(...arrays) {
  return arrays.map(array => {
    for(let i = 0;i < array.length;i++) {
      for(let j = i+1;j < array.length;j++) {
        if(array[i] === array[j]) {
          array.splice(j,1)
          j--
        }
      }
    }
    
    return array.filter((item,index)=>array.indexOf(item) === index)
  })
}
