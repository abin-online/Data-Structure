class stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0
    }

    push(item){
        this.items.push(item)
    }

    pop(){
        if(this.isEmpty()){
            return "STACK UNDERFLOW"
        }

        return this.items.pop()
    }

    printStack(){
        if(this.isEmpty()){
            return "STACK IS EMPTY"
        }
        let str = ''
        for(let i = 0 ; i < this.items.length ; i++){
            str += `${this.items[i]} `
        }
        return str
    }

    peek(){
        if(this.isEmpty()) return "STACK IS EMPTY"
        return this.items[this.items.length - 1]
    }

    clear(){
        return this.items = []
    }

    clone(){
        let cloned = new stack()
        cloned.items = [...this.items]
        return cloned
    }

    search(element){
        let index = this.items.indexOf(element)
        return index === -1 ? "Element not found" : `Index is ${this.items.length - index}`
    }

    toArray(){
        return this.items.slice()
    }
}

let Stack = new stack()


Stack.push(90)
Stack.push(110)
Stack.push(100)
Stack.pop()
Stack.push(11)
Stack.pop()
Stack.push(130)
Stack.push(150)
Stack.push(160)
Stack.push(190)
console.log(Stack.printStack());
console.log(Stack.search(90));

console.log(Stack.peek());
console.log(Stack.toArray());