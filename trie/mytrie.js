class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOFWord = false
    }
}

class Trie{
     constructor(){
        this.root = new TrieNode()
     }

    insert(word){
        let node = this.root
        for (const char in word) {
           if(!node.children[char]){
            node.children[char] = new TrieNode()
           }
           node = node.children[char]
        }
        node.isEndOFWord = true
    }

    search(word){
        let node = this.root
        for(const char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEndOFWord
    }

    printWords(){
        let words = []
        const traverse = (node ,prefix )=>{
            if(node.isEndOFWord){
                words.push(prefix)
            }
            for(let char of node.children){
                traverse(node.children[char] , prefix+char)
            }
        }
        traverse(this.root , "")
        return words
    }

    startWith(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
    }

    autoComplete(prefix){
 
        let node = this.root
        for(const char of prefix){
            if(!node.children[char]){
                return "no suggestions"
            }
            node = node.children[char]
        }
        return this.printWordsWithPrefix(node, prefix)

    }

    printWordsWithPrefix( node , prefix){
        let words = []
        const traverse = (node , currentPrefix)=>{
            if(node.isEndOFWord){
                words.push(prefix)
            }
            for(let char of node.children){
                traverse(node.children[char], currentPrefix + char)
            }
        }
        traverse(node, prefix)
        return words
    }
}