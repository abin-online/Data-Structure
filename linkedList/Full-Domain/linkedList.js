class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size=0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize(){
        
        return this.size
    }

    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else {
            node.next = this.head;
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
            while(prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    print(){
        let output = ''
        let curr = this.head;
        while(curr){
            output += ` ${curr.value}`
            curr = curr.next
        }
        console.log(output)
    }

    reverse(){
        let curr = this.head;
        let prev = null
        let next
        while(curr) {
            next = curr.next
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev
    }

    insert(value , index) {
        if(index < 0 || index >= this.size){
            console.log('Cannot insert')
            return
        }
        let node = new Node(value)

        if(index == 0) {
            this.prepend(value)
        }else{
            let prev = this.head;
            for(let i = 0 ; i < index - 1 ; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node
            this.size++
        }
    }

    removeValue(value) {
        if(this.isEmpty()){
            return null
        }
        if(this.head.value == value){
            this.head = this.head.next
            this.size--
        }else{
            let prev = this.head ;
            while(prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if(prev.next){
                let removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--
            }
        }
    }

    removeIndex(index) {
        if(index < 0 && index >= this.size){
            console.log('Can t remove');
            return
        }
        if(index === 0){
            this.head = this.head.next
            this.size--
        }else{
            let removeNode
            let prev = this.head
            for(let i = 0 ; i < index - 1 ; i++){
                prev = prev.next
            }
            
                removeNode = prev.next
                prev.next = removeNode.next
            
        }
        this.size--
    }

    removeAllDuplicates(){
        if(this.isEmpty()){
            return null
        }else {
            let seen = new Set()
            let curr = this.head
            let prev = null
            while(curr) {
                if(seen.has(curr.value)){
                    prev.next = curr.next
                    this.size--
                }else{
                    seen.add(curr.value)
                    prev = curr
                }
                curr = curr.next
            }
        }
    }
}

const list = new LinkedList()
list.append(40);
list.prepend(45);
//list.reverse()
list.getSize()
list.insert(41, 1)
list.append(41)
// list.removeValue(41)
// list.removeIndex(2)
list.removeAllDuplicates()
list.print()

