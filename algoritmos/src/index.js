let met1 = (int, char) => {
  let arr = []
  for(let i = 0; i < int; i++) {
    arr.push(char)
  }
  return arr
}

let met2 = (arr) => {
  let newArr = []
  for(let i = arr.length - 1; i >= 0 ; i--) {
    newArr.push(arr[i])
  }
  return newArr
}

let met3 = (arr) => {
  let newArr = []
  for(let element of arr) {
    if(element) {
      newArr.push(element)
    }
  }
  return newArr
}

let met4 = (arr) => {
  let obj = {}
  for(let element of arr) {
    obj[element[0]] = element[1] 
  }
  return obj
}

let met5 = (arr, ...int) => {
  let newArr = []
  loop1:
  for(let element of arr) {
      for(let i of int) {
        if (i === element) {
          continue loop1;
        }
      }
    newArr.push(element)
  }
  return newArr
}

let met6 = (arr) => {
  const newArr = []
  loop1:
  for(let element of arr) {
    for(let unico of newArr) {
      if(element === unico) {
        continue loop1
      }
    }
    newArr.push(element)
  }
  return newArr
}

let met7 = (arr1, arr2) => {
  if(arr1.length === arr2.length) {
    for(let i = 0; i < arr1.length; i++) {
      if(arr1[i] === arr2[i]) {
        continue
      }
      return false
    }
    return true
  }
  return false
}

let met8 = (arr) => {
  let newArr = []
  let recur = (array) => {
    for(let element of array) {
      if(typeof element === "object") {
        recur(element)
        continue
      }
    newArr.push(element)
    }
  }
  recur(arr)
  return newArr
}

let met9 = (arr, int) => {
  let newArr = []
  if(int <= 0) {
    return arr
  }
  loop1:
  for (let i = 0; i < arr.length; i++) {
    for (let z = newArr.length - 1; z <= newArr.length; z++) {
      if (typeof newArr[z] === "object" && newArr[z].length < int) {
        newArr[z].push(arr[i])
        continue loop1
      }
    }
    newArr.push([arr[i]])
  }
  return newArr;
}

let met10 = (arr1, arr2) => {
  let newArr = []
  for (let n of arr1) {
    loop2:
    for (let m of arr2) {
      if (m === n) {
        // o proximo for checka se o numero já tem no newArr, se true ele continua com o proximo numero do for anterior
        for(let o of newArr) {
          if(o === m) {
            continue loop2
          }
        }
        newArr.push(n)
      }
    }
  }
  return newArr
}

module.exports = {
  met1,
  met2,
  met3,
  met4,
  met5,
  met6,
  met7,
  met8,
  met9,
  met10,
}
