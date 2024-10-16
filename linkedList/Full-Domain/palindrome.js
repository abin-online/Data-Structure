class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    
    isEmpty(){
        return this.size === 0
    }
    
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    
    print(){
        let result = ''
        let curr = this.head
        while(curr){
            result +=  curr.value
            curr = curr.next
        }
        return result
    }
    
    reverse(){
        let curr = this.head
        let prev = null
        let next
        while(curr){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    
    insert(index, value){
        const node = new Node
    }
}


let str = 'MALAYALAM'

function palindrome(str){
    const list = new LinkedList()
    for(let i = 0 ; i < str.length ; i++){
        list.append(str[i])
    }
    let result = list.print()
    list.reverse()
    let reverse = list.print()
    return result == reverse ? true : false
}

console.log(palindrome(str))