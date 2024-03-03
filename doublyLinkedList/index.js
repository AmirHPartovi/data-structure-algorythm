
//change script section in package.json to run this ;)//

class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(value){
        let newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    push(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail =newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++ 
        return this
    }
    pop(){
        if(!this.length===0) return undefined
        let temp = this.tail
        if(this.length === 1){
            let temp = this.tail
            this.head=null
            this.tail=null
        }
        else{
            this.tail = this.tail.prev
            temp.prev = null
            this.tail.next = null
        }
        this.length-- 
        return temp 
    }
    unshift(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }
    shift(){
        if(this.length===0) return undefined
        let temp = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        }
        else{
            this.head = temp.next
            temp.next = null
            this.head.prev =null
        }
        this.length--
        return temp
    }
    get(index){
        if(index<0 || index > this.length) return undefined
        let temp = null
        if((index / 2 ) < this.length){
            temp = this.head
            for(let i = 0 ; i<index ; i++){
                temp =temp.next
            }
        }else{
            temp = this.tail
            for(let i =this.length - 1 ; i > index ; i--){
                temp = temp.prev
            }
        }
        return temp
    }
    set( index , value ){
        let temp = this.get(index)
        if(temp){
            temp.value = value
            return true
        }
        return false
    }

}


const myDoublyLinkedList = new DoublyLinkedList(12)
myDoublyLinkedList.push(15)
myDoublyLinkedList.push(22)

// myDoublyLinkedList.pop()
// console.log(myDoublyLinkedList.pop())

// myDoublyLinkedList.unshift(4)

// myDoublyLinkedList.shift()
// console.log(myDoublyLinkedList.shift())

// console.log(myDoublyLinkedList.get(1))

// myDoublyLinkedList.set(1,100)

 console.log(myDoublyLinkedList)