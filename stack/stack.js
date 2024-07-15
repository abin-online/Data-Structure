class stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return "STACK UNDERFLOW"
        }
        return this.items.pop()
    }

    isEmpty(){
        return this.items.length === 0
    }

    printStack(){
        if(this.isEmpty()) return "STACK IS EMPTY"
        let str = ''
        for(let i = 0 ; i < this.items.length ; i++){
            str += `${this.items[i]} `
        }
        return str
    }

}

let Stack = new stack()

Stack.push(20)
Stack.push(20)
Stack.push(20)
Stack.push(20)
Stack.pop()
console.log(Stack.printStack());


