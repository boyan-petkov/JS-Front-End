function reverseArray(num, inputArr ){
    let final= [];
    let printArr = []
    for (let i=0; i<num; i++){
        final.push(inputArr[i])
    }
    for (let i=final.length -1; i>=0; i--)
    printArr.push(final[i])

    console.log(printArr.join(" "))
}


reverseArray(3, [10, 20, 30, 40, 50])
