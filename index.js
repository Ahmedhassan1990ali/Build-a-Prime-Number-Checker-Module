const { __esModule } = require("@babel/generator");

function isPrime(num){
    if (num <2){
        return false
    }
    if (num *10 != num + "0"){
        return false
    }
    if (num === 2 || num === 3){
        return true
    }
    if (num%2 === 0 || num%3 === 0){
        return false
    }
    for (let i = 4;i <num;i++){
        if (num%i===0){
            return false
        }
    }
    return true
}

module.exports = {
    isPrime: isPrime
}