function circleArea(number){
    let argumentType = typeof number
    let area;
    if (argumentType === 'number'){
        area = (Math.PI * number * number).toFixed(2)
        console.log(area)
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${argumentType}.`)
    }
}

circleArea(5)
circleArea('15')
circleArea(true)
