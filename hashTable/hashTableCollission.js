class hashTable {
    constructor(size) {
        this.size = size
        this.table = []
    }

    hash(key) {
        let result = 0
        for (let i = 0; i < key.length; i++) {
            result += key.charCodeAt(i)
        }
        return result % this.size
    }

    set(key , value){
        const index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }

    }

    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

let table = new hashTable(5)

table.set("name" , "abin")
table.set("mane" ,23)
table.set('naem' , 34)
// console.log(table.get('name'))
table.display()

table.set('naem' , 35)
// table.remove("name")

//console.log("getting name key =>" ,table.get("name"));
table.display()
