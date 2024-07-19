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

    set(key,value){
        const index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }

    print(){
        for(let i = 0 ; i < this.table.length ; i++){
            if(this.table[i]){
                console.log(i ," " , this.table[i]);
            }
        }
    }
}

let hashed = new hashTable(5)

hashed.set("name" , "abin")
hashed.set("mane" , "virat")
// hashed.set("age" , 25)
// hashed.remove("name")
console.log(hashed.get("mane"));

//hashed.print()
//console.log(hashed);