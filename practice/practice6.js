class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let result = 0
        for(let i = 0; i < key.length ; i++){
            result += key.charCodeAt(i)
        }
        return result % this.size
    }

    set(key , value){
        let index = this.hash(key)
        this.table[index] = value
    }

    get(key){
        let index = this.hash(key)
        return this.table[index]
    }

    remove(){
        let index = this.hash(key)
        this.table[index] = null
    }

    print(){
        
        for(let i = 0; i < this.table.length ; i++){
            if(this.table[i]){
                console.log(i , "->" , this.table[i] );
            }
        }
    }
}

let hashed = new hashTable(5)

hashed.set('name' , "abin")

hashed.print()