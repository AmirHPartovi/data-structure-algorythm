//Big O 
//Omega = Best Case
//Theta = middle Case
//Omicron = Worst cCase


// n + n = 2n => Drop constants => O(2n)=>O(n)
function logItem (n){
    for(let i = 0 ; i< n ; i++){
        console.log(i)
    }
    for(let j = 0 ; j< n ; j++){
        console.log(j)
    }
}

// n * n = n^2  => O(n^2)
function logItemNested (n){
    for(let i = 0 ; i< n ; i++){
        for(let j = 0 ; j< n ; j++){
            console.log(i,j)
        }
        
    }
}

// n * n * n = n^3  => O(n^3)
function logItemNested2 (n){
    for(let i = 0 ; i< n ; i++){
        for(let j = 0 ; j< n ; j++){
            for(let k = 0 ; k< n ; k++){
                console.log(i , j ,k)
            }
        }
        
    }
}

// n * n + n = n^2 + n  => O(n^2 + n) =>Drop non-Dominates  =>O(n^2)
function logItemNested3 (n){
    for(let i = 0 ; i< n ; i++){
        for(let j = 0 ; j< n ; j++){
            console.log(i , j)
        }
        
    }
    for(let k = 0 ; k< n ; k++){
        console.log(k)
    }
}
//O(3) => O(1) the most efficient
function addItem(n){
    return n + n + n
}


// O(log n) => 2 ^ ? = 8 => log8 = 3 
const arr1 = [1,2,3,4,5,6,7,8]; 
function divideAndConquer (arr1){
    //find 1
}

//important
//Different Terms for Input
//for example a=6 , b=6000000
// a + b = a+b => O(a+b)
function DiffTerm (a,b){
    for(let i = 0 ; i< a ; i++){
        console.log(i)
    }
    for(let j = 0 ; j< b ; j++){
        console.log(j)
    }
}

//for example a=6 , b=6000000
// a * b = ab => O(a*b)
function DiffTerm2 (a,b){
    for(let i = 0 ; i< a ; i++){
        for(let j = 0 ; j< b ; j++){
            console.log(i,j)
        }
        
    }
}

const arr2=[11 , 3 , 23 , 7]
function ArrayO (arr1){
    arr1.push(9)   //O(1) => Because of entire index do not change
    arr1.pop(9)  //O(1) => Because of entire index do not  change
    arr1.unshift(13)   //O(n) => Because of entire index must change
    arr1.shift(13)  //O(n) => Because of entire index must change
    arr1.splice(1,0,'hi')  //O(n) => Because of entire index must change
    

}
ArrayO(arr2)
//logItem(10)
// logItemNested(10)
// logItemNested2(10) 
// logItemNested3(10)
//addItem(10)