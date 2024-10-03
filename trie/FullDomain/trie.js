class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfTheWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root; // start from root node
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode(); // create a new TrieNode if the char is not present
            }
            node = node.children[char]; // move to the next node (or char)
        }
        node.isEndOfTheWord = true; // mark the end of the word
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfTheWord;
    }

    // Method to print all words in the trie
    printWords() {
        let words = [];
        const traverse = (node, prefix) => {
            if (node.isEndOfTheWord) {
                words.push(prefix);
            }
            for (let char in node.children) {
                traverse(node.children[char], prefix + char);
            }
        };
        traverse(this.root, "");
        return words;
    }

    autoComplete(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return `${prefix} : no suggestions found`; // No suggestions if prefix is not found
            }
            node = node.children[char];
        }
        return this.printWordsWithPrefix(node, prefix);
    }

    printWordsWithPrefix(node, prefix) {
        let words = [];
        const traverse = (node, currentPrefix) => {
            if (node.isEndOfTheWord) {
                words.push(currentPrefix);
            }
            for (let char in node.children) {
                traverse(node.children[char], currentPrefix + char);
            }
        };
        traverse(node, prefix);
        return words.length > 0 ? words : `${prefix} : no suggestions found`;
    }

    suggest(prefix, max) {
        let suggestions = this.autoComplete(prefix);
        if (Array.isArray(suggestions)) {
            let maxSuggest = suggestions.slice(0, max);
            return maxSuggest.join(", ");
        } else {
            return suggestions;
        }
    }
}

// Example usage
const trii = new Trie();

trii.insert("abin");
trii.insert("abinaya");
trii.insert("abinayam");
trii.insert("abinav");
trii.insert("abina");

console.log("Auto complete:", trii.autoComplete("abina"));
console.log("Suggestions:", trii.suggest("abina", 4));
console.log("Auto complete:", trii.autoComplete("ab"));
console.log("Words in Trie:", trii.printWords());


//This is enough for understanding trie
