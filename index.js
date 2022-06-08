function saturdayFun(haveFun= "roller-skate"){
return `This Saturday, I want to ${haveFun}!`
}
function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.`
}
function wrapAdjective (word = '*'){
    return function (adjective = 'amazing'){
        return `You are ${word}${adjective}${word}!`
    }
}