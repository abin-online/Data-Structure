class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        let node = new Node(value)
        
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
        let listed = ''
        let curr = this.head
        while(curr){
            listed+= `${curr.value} `
            curr = curr.next
        }
        console.log(listed)
    }

    insert(value , index){
        if(index < 0 || index > this.size){
            return null
        }else if(index === 0){
            this.prepend(value)
        }else{
            let prev = this.head
            for(let i = 0 ; i < index - 1 ; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    reverse(){
        let prev = null
        let curr = this.head
        let next
        while(curr){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
         
        }
        this.head = prev
    }

    search(value){

        if(this.isEmpty()){
            return -1
        }else{
            let curr = this.head
            let i = 0
            while(curr){
                if(curr.value == value){
                    return i
                }
                i++;
                curr = curr.next
            }
            return -1
        }
  
    }


}

let list = new linkedList()

list.prepend(5)
list.append(7)
list.prepend(2)
list.reverse()
list.print()
console.log(list.search(5))