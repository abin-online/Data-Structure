class stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        this.items.pop()
    }

    peek(){
        return this.items[this.items.length - 1]
    }

    print(){
        return this.items.join(" ")
    }

    search(element){
        for(let i = 0 ; i < this.items.length ; i++){
            if(this.items[i] == element){
                return i
            }
        }
    }

    clone(){
        let stkr = new stack()
        stkr.items = [...this.items]
        return stkr
    }
}

let stk = new stack()

stk.push(35)
stk.push(45)
stk.push(55)
stk.push(65)
console.log(stk.peek());
console.log(stk.print());
stk.pop()
console.log(stk.print());
console.log("index :" ,stk.search(45));
console.log(stk.clone());