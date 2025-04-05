// Negative index problem
// allow array access through negative index

let arr = [ 1,2,3,4,5,6,7,8,9,10]
const handler ={
    get(target , property){
        const index = Number(property)
            if(index <0){
                return target[target.length + index]
            }
            return target[index]
    },

    set(target , property , value){
        const index = Number(property)
        if(index <0){
            target[target.length + index] = value
        }else{
            target [index] =value
        }
        return true
    }
}

const arrProxy = new Proxy( arr , handler)


console.log(arrProxy[-3]);// checking getter function 

arrProxy[-3] =35            // checking setter function
console.log(arrProxy[-3]);

console.log(arr);