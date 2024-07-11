class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){
        return this.size
    }


    print(){
        if(this.isEmpty()){
            console.log('This is empty')
        }else{
            let curr = this.head;
            let listed = ''
            while(curr){
                listed+= `${curr.value} `
                curr = curr.next
            }
            console.log(listed)
        }
    }

    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head;
            this.head = node
        }
        this.size++
    }

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }else if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = this.head.next;
        }
        this.size--
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }else{
            let prev = this.head;
            while(prev.next.next != null ){
                
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev
        }
        this.size--
    }

    arrayToList(arr){  //array to linked list
        for(let i = 0 ; i < arr.length ; i++){
            this.append(arr[i])
        }
    }

}

let list = new linkedList()

// list.prepend(30)
// list.append(57)
// list.prepend(20)
// // list.removeFromFront()
// list.removeFromEnd()

list.arrayToList([1,4,5,2,3,3])
list.print()

