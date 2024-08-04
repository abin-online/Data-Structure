class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }    
}

class Tree{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }

    print(){
        
        let result = []
        const traverse = (node , prefix)=>{
            if(node.isEndOfWord){
                result.push(prefix)
            }
            for(let char of node.children){
                traverse(node.children[char], prefix + char)
            }
        }
        traverse(this.root , "")
        return result
    }

    autoComplete(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]){
                return []
            }
            node = node.children[char]
        }
        return printWordsWithPrefix(node , prefix)
    }

    printWordsWithPrefix(node, prefix){
        let words = []
        const traverse = (node, currPrefix)=>{
            if(node.isEndOfWord){
                words.push(currPrefix)
            }
            for(let char of node.children){
                traverse(node.children[char] , prefix)
            }
        }
        traverse(node, prefix)
        return words
    }
}