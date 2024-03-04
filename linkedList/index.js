//change script section folder name in package.json to run this ;)//
//npm install ( to install nodemon and go live )
//npm run watch

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
            this.length++
            return this
        }
    }
    pop(){
        console.log('head',this.head)
        if(!this.head)return undefined
         
        
    
        let temp = this.head
        let pre = this.head
        while(temp.next){
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length===0){
            this.head = null
            this.tail = null
        
        }
        return temp
    }
    unshift(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    shift(){
        if(!this.head)return undefined
        const temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if(this.length===0){
            this.tail=null
        }
        return temp
    }
    get(index){
        if(index< 0 || index> this.length)return undefined
        let temp = this.head
        for(let i = 0 ; i < index ; i++){
            temp = temp.next
        }
        return temp
    }
    set(index,value){
        let temp = this.get(index)
        if(temp){
            temp.value = value
            return true
        }
        return false
        
    }
    insert(index , value){
        if( index <0 || index > this.length) return false
        if( index === 0) return this.unshift(value)
        if( index === this.length) return this.push(value)
        let newNode = new Node(value)
        let temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true

    }
    remove(index){
        if( index<0 || index> this.lenght) return undefined
        if(index===0) return this.shift(index)
        if(index === this.length) return this.pop(index)

        let pre = this.get(index - 1)
        let temp = pre.next
        pre.next = temp.next
        temp.next = null
        this.length--
        return temp
    }
    reverse(){
        if(this.length === 0) return undefined
        let temp =this.head
        this.head = this.tail
        this.tail =temp

        let next = temp.next
        let prev = null
        for(let i = 0 ; i<this.length ; i++){
            next = temp.next
            temp.next = prev
            prev = temp 
            temp = next
        }
        return this
    }
}

let myLinkedList = new LinkedList(47)
myLinkedList.push(12)
myLinkedList.push(15)
myLinkedList.push(18)
myLinkedList.push(20)
myLinkedList.push(40)
myLinkedList.set(1,4)
myLinkedList.set(2,16)
myLinkedList.remove(1)
myLinkedList.insert(1,88)
myLinkedList.reverse()
console.log(myLinkedList)