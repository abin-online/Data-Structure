class stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(!this.isEmpty()){
            this.items.pop()
        }
    }

    peek(){
        return this.items[this.items.length - 1]
    }

    search(element){
        for(let i = 0 ; i < this.items.length ; i++){
            if(this.items[i] === element){
                return i
            }
        }
        return -1
    }

    clone(){
        let cloned = new stack()
        cloned = [...this.items]
        return cloned
    }

    printStack(){
        let str = ''
        for(let i = 0 ; i < this.items.length ; i++){
            str += this.items[i] + " "
        }
        return str
    }

    toArray(){
        return [...this.items]
    }
}

let stackk = new stack()

stackk.push(30)
stackk.push(40)
stackk.push(50)
//stackk.pop()
console.log(stackk.toArray());

console.log(stackk.search(50));
console.log(stackk.printStack());
