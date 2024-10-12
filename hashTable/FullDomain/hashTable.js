class hashTable{
    constructor(size){
        this.table = []
        this.size = size
    }

    hash(key){
        let hashed = 0
        for(let i = 0 ; i < key.length ; i++) {
            hashed += key.charCodeAt(i)
        }
        return hashed
    }  

    set(key , value) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket) {
            this.table[index] = [[key , value]]
        }else {
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem) {
                return sameKeyItem[1]
            }
        }else{
            return undefined
        }
    }

    remove(key) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem) , 1)
            }
        }
    }

    display() {
       
        for(let i = 0 ; i < this.table.length ; i++){
            if(this.table[i]){
                console.log(this.table[i]); 
            }
        }
    }
}

const hashTabled = new hashTable()
hashTabled.set("abin" , 45)
hashTabled.set("niba" , 46)
hashTabled.set("aibn" , 47)
hashTabled.display()