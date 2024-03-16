//change script section folder name in package.json to run this ;)//
//npm install ( to install nodemon and go live )
//npm run watch
 
class HashTable{
    constructor( size = 7 ){
        this.dataMap = new Array(size)
    }
    _hash(key){
        let hash = 0
        for(let i=0 ; i<key.length ; i++){
            hash = (hash + key.charCodeAt(i) * 23) %this.dataMap.length
        }
        return hash
    }
    set( key , value ){
        let index = this._hash(key)
        if(! this.dataMap[index]){
            this.dataMap[index] = []
        }
        this.dataMap[index].push([key , value ])
        return this
    }
    get(key){
        let index = this._hash(key)
        for(let i = 0 ; i < this.dataMap[index].length ; i++){
            if( this.dataMap[index][i][0] === key ) return this.dataMap[index][i][1];
        }
        return undefined
    }
}

const myHashTable = new HashTable()
myHashTable.set('key' , 1500)
myHashTable.set('passport' , 1200)
myHashTable.set('creditCard' , 70)
myHashTable.set('phone' , 89)
myHashTable.set('IDCard' , 150)
myHashTable.set('laptop' , 1500)

console.log(`myHashTable` , myHashTable)
console.log(`getMethod for passport` , myHashTable.get('passport')) 
console.log(`getMethod for creditCard` , myHashTable.get('creditCard')) 
console.log(`getMethod for invalid` , myHashTable.get('invalid')) 