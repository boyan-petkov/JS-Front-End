
function evenOddSubtraction(array){
    let evens =[];
    let odds = [];
    let evenSum =0;
    let oddSum=0;
    for (let i=0; i<array.length; i++){
        if (array[i] % 2 === 0){
            evens.push(array[i])
        }
        else{
            odds.push(array[i])
        }
    }
    for (let i=0; i<evens.length; i++){
        evenSum += evens[i]
    }
    for (let i=0; i<odds.length; i++){
        oddSum += odds[i]
    }
    
    console.log(evenSum - oddSum)
}

evenOddSubtraction([1,2,3,4,5,6])
evenOddSubtraction([3,5,7,9])
evenOddSubtraction([2,4,6,8,10])
