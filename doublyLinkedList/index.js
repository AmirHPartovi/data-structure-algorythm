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
        if(!this.head) return undefined
        else{
            let temp = this.tail
            this.tail = temp.prev
            temp.prev = null
            this.tail.next = null
            this.length--
            return temp

        }
    }
}


const myDoublyLinkedList = new DoublyLinkedList(12)
myDoublyLinkedList.push(15)
myDoublyLinkedList.push(22)
myDoublyLinkedList.pop()
myDoublyLinkedList.pop()
console.log(myDoublyLinkedList)