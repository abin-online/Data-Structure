class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOfTheWord = false
    }
}

class Trie{
    constructor() {
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root //start from root node
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode() //create a new TrieNode if the char is not present
            }
            node = node.children[char] //move to the next node(or char)
        }
        node.isEndOfTheWord = false //mark the end of word
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEndOfTheWord
    }

    //methods to print all word in a trie
    printWords(){
        let words = []
        const traverse = (node , prefix)=>{
            if(node.isEndOfTheWord){
                words.push(prefix)
            }
            for(let char of node.children){
                traverse(node.children[char] , prefix + char)
            }
        }
        traverse(this.root , "")
        console.log(words);
    }

    startsWith(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true
    }

    autoComplete(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return `${word} : no suggestions found`
            }
            node = node.children[char]
        }
        return this.printWordWithPrefix(node, word)
    }

    printWordWithPrefix(node , prefix){
        let words = []
        const traverse = (node , currentPrefix)=>{
            if(node.isEndOfTheWord){
                words.push(currentPrefix)
            }
            for(let char in node.children){
                traverse(node.children[char] , currentPrefix + char)
            }
        }
        traverse(node , prefix)
        return words.length > 0 ? words : `${prefix} : no suggestions found`
        }

    suggest(word , max=3){
        let suggestions = this.autoComplete(word)
        if(Array.isArray(suggestions)){
            let maxSuggest = suggestions.slice(0,max)
            return maxSuggest.join(", ")
        }else{
            return suggestions
        }
    }
}