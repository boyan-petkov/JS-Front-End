

function sumFirstLast(inputArr){
    first = inputArr[0]
    // last = inputArr[inputArr.length-1]
    last = inputArr.pop()
    final = first + last
    console.log(final)
}

sumFirstLast([20, 30, 40])
sumFirstLast([10, 17, 22, 33])
sumFirstLast([11, 58, 69])
