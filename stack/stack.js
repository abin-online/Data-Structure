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

    peek(){
        if(this.isEmpty()){
            return "EMPTY STACK"
        }
        return this.items[this.items.length - 1]
    }

}

let Stack = new stack()

Stack.push(20)

Stack.push(30)
Stack.push(40)
Stack.push(50)
Stack.pop()

// function Add () {
//     Stack.prototype.display = ()=> {
//         return 1000
//     }
// }

const st = new Add()

console.log(Stack.peek());
//console.log(Stack.printStack());


