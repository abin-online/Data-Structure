class hashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let result = 0
        for (let i = 0; i < key.length; i++) {
            result += key.charCodeAt(i)
        }
        return result % this.size
    }

    set(key, value) {
        let index = this.hash(key)
        let bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            let sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                item[1] = key
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        let index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key) {
        let index = this.hash(key)
        const bucket = this.table[index]
        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
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
table.set("mane" , "Chennai")
table.set("age", 25)
table.display()