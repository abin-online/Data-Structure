class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let result = ''
        for(let i = 0 ; i < key.length ; i++){
            result += key.charCodeAt(i)
        }
        console.log(result % this.size)
        return result % this.size
    }

    set(key , value) {
        let index = this.hash(key);
        const bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key, value]];
        }else{
            let sameKeyItem = bucket.find(item => item[0]===key);
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key, value])
            }
        }
    }


    get(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            let sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }else{
            return undefined
        }
    }

    remove(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            let sameKeyItem = bucket.find(item=> item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem) , 1)
            }
        }
    }

    display(){
        for(let i = 0 ; i < this.table.length ; i++){
            if(this.table[i]){
                console.log(this.table[i])
            }
        }
    }
}

const hashTabled = new hashTable(3)
hashTabled.set("abin" , 45)
hashTabled.set("niba" , 46)
hashTabled.set("aibn" , 47)
hashTabled.remove('aibn')
hashTabled.display()

