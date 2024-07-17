class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i = 0; i < key.length ; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    get(key){
        const index = this.hash(key)
        return this.table[index]
    }

    set(key , value){
        const index = this.hash(key)
        this.table[index] = value
    }

    display(){
        for(let i = 0 ; i < this.table.length ; i++){
            if(this.table[i]){
                console.log( i , this.table[i]);
            }
        }   
    }

    remove(key){
        const index = this.hash(key)
        this.items[index] = undefined
    }

}

let table = new hashTable(5)

table.set("name" , "abin")
console.log(table.get("name"));
table.display()