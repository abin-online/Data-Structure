class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let hashed = 0
        for(let i = 0 ; i < key.length ; i++){
            hashed += key.charCodeAt(i)
        }
        return hashed
    }

    set(key , value){
        let index = this.hash(key)
        let bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key , value]]
        }else{
            let sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key, value])
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
    }

    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem) , 1)
            }
        }
    }
}

let hashtable = new HashTable(3)
hashtable.set('name' , 'abin');
hashtable.set('person' , 'logesh')
console.log(hashtable.get('person'));
