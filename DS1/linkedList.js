//creating a node

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
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

    prepend(value){  //prepend
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty')
        }else{
            let curr = this.head;
            let listed = ''
            while(curr){
                listed += `${curr.value} `;
                curr = curr.next
            }
            console.log(listed)
        }
    }

    insert(value , index){
        if(index<0 || index>this.size){
            console.log("NO")
        }
        else if(index === 0){
            this.prepend(value)
        }else{
            let node = new Node(value)
            let prev = this.head;
            for(let i = 0; i < index - 1 ; i++){
                prev = prev.next
            }
            node.next = prev.next;
            prev.next = node
        }
        this.size++
    }

    removeFrom(index){
        let removeNode
        if(index < 0 || index >= this.size){
            return null
        }else if(index === 0){
            removeNode = this.head;
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i = 0 ; i < index-1  ; i++){
                prev = prev.next
            }
            removeNode = prev.next;  //value
            prev.next = removeNode.next  //memory location
        }
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }else if(this.head.value == value){
            this.head = this.head.next
            this.size--;
        }else{
            let prev = this.head;
            while(prev.next && prev.next.value!=value){
                prev = prev.next
            }
            if(prev.next){
                let removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--
            }
            return null
        }
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }else{
            let i = 0;
            let curr = this.head

            while(curr){
                
                if(curr.value == value){
                    return i 
                }
                i++;
                curr = curr.next;
            }
            return -1
        }
    }

    reverse(){
        let prev = null;
        let curr = this.head;
        let next;
        while(curr){
            next = curr.next
            curr.next = prev;
            prev = curr;
            curr = next;
            
        }
        this.head = prev
    }
}


let list = new linkedList();

// console.log("isEmpty : " , list.isEmpty())

// console.log("size : " , list.getSize())  

// list.prepend(10)
// list.prepend(20)
// list.prepend(30)


// list.append(10)
// list.append(20)
// list.append(30)

list.insert(10,0)
list.insert(20,0)
list.insert(30,0)
list.print()
list.reverse()
list.print()

// list.removeFrom(1)


// list.print()

// list.removeValue(20)

// console.log(list.search(30))
// list.print()
// console.log(list)