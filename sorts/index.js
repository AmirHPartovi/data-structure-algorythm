//change script section folder name in package.json to run this ;)//
//npm install ( to install nodemon and go live )
//npm run watch

function bubbleSort(array){
    for( let i = array.length - 1 ; i > 0 ; i--){
        for(let j = 0 ; j < i ; j++){
            if(array[j]>array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}

function selectionSort(array){
    let min
    for( let i = 0 ; i < array.length-1 ; i++){
        min = array[i]
        for( let j = i+1 ;j < array.length ; j++){
            if(array[j] < min) min = array[j]
        }
        if( array[i] !== min){
            let temp = array[i]
            array[i] = min
            min = temp
        }
    }
    return array
}


let arr1=[1 , 6, 9, 3, 8 ,55 ,23 ,90 , 4 ,12 , 18 , 1 , 7 , 15]

console.log(`bubble sort result : ` ,bubbleSort(arr1))
console.log(`selection  sort result : ` ,selectionSort(arr1))