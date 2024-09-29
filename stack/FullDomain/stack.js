class Stack{
    constructor(){
        this.items = []
    }
    isEmpty() {
        return this.items.length === 0
    }

    getSize() {
        return this.items.length
    }

    push(value){
        this.items.push(value)
    }

    pop() {
        return this.items.pop()
    }

    print() {
        let output = ''
        for(let i = 0 ; i < this.items.length ; i++ ) {
            output += `${this.items[i]} `
        }
        console.log(output)
        return
    }
}

const st = new Stack()

st.push(34)
st.push(53)

st.push(33)

st.push(94)
st.pop()

st.print()
