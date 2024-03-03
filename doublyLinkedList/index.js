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

}


const myDoublyLinkedList = new DoublyLinkedList(12)
myDoublyLinkedList.push(15)
myDoublyLinkedList.push(22)
// myDoublyLinkedList.pop()
// myDoublyLinkedList.unshift(4)
// myDoublyLinkedList.shift()
console.log(myDoublyLinkedList)