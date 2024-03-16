//O(n^2)
function itemInCommonWorst (arr1 , arr2){
    for( let i = 0 ; i < arr1.length ; i++){
        for( let j = 0 ; j < arr2.length ; j++){
            if(arr1[i] === arr2[j])return true
        }
    }
    return false
}
//O(n)
function itemInCommonBest (arr1 , arr2){

    let obj = {}
    for( let i = 0 ; i < arr1.length ; i++){
        obj[arr1[i]] = true
    }
    for( let j = 0 ; j < arr2.length ; j++){
        if(obj[arr2[j]]) return true
    }
    return false
}


let arr1 = [1 ,2 ,3]
let arr2 = [3 ,6 ,3]
let arr3 = [7 , 8 , 9]

console.log(`Worst function` ,itemInCommonWorst(arr1,arr2) )
console.log(`Best function` ,itemInCommonBest(arr1,arr2) )

console.log(`Worst function` ,itemInCommonWorst(arr3,arr2) )
console.log(`Best function` ,itemInCommonBest(arr3,arr2) )