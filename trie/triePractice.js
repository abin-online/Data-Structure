class TrieNode{
    constructor(){
        this.children = {}
        this.endOfTheWord = false
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
        node.isEndOFWord = true
    }

    search(prefix){
        let node = this.root
        for(const char of prefix){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.endOfTheWord
    }

    printWords(){
        let node = this.root
        let words = []
        const traverse = (node , prefix)=>{
            if(node.endOfTheWord){
                words.push(prefix)
            }
            for(const char in node.children){
                traverse(node.children[char] , prefix + char)
            }
        }
        traverse(this.root, "")
        return words
    }

    startWords(prefix){
        let node = this.root
        for(const char of prefix){
            if(!node.children[char]){
                return "no words"
            }
        }
    }

}