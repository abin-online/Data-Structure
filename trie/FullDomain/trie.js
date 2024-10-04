class TrieNode {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }

    search(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return node.isEndOfWord
    }

    printWords() {
        let words = []
        const traverse = (node, prefix) => {
            if (node.isEndOfWord) {
                words.push(prefix)
            }
            for (let char in node.children) {
                traverse(node.children[char], prefix + char)
            }
        }
        traverse(this.root, '')
        return words
    }

    autoComplete(prefix) {
        let node = this.root
        for (let char of prefix) {
            if (node.children[char]) {
                return null
            }
            node = node.children[char]
        }
        return this.printWordsWithPrefix(prefix , node)
    }

    printWordsWithPrefix(prefix , node){
        let words = []
        const traverse = (node, currentPrefix)=> {
            if(node.isEndOfWord) {
                words.push(currentPrefix)
            }
            for(let char in node.children) {
                traverse(node.children[char] , currentPrefix + char)
            }
        }
    }

    suggest(prefix , max) {
        let suggestions = this.autoComplete(prefix)
        if(Array.isArray(suggestions)) {
            let maxSuggest = suggestions.slice(0,max)
            return maxSuggest.join(' ')
        }else{
            return suggestions
        }
    }
}