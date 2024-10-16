class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false; // Fixed typo: should be isEndOfWord
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) { // Changed from for...in to for...of
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    printWords() {
        let words = [];
        const traverse = (node, prefix) => {
            if (node.isEndOfWord) {
                words.push(prefix);
            }
            for (let char in node.children) { // Changed to for...in
                traverse(node.children[char], prefix + char);
            }
        };
        traverse(this.root, "");
        return words;
    }

    startsWith(prefix) { // Renamed for clarity
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    autoComplete(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return "no suggestions";
            }
            node = node.children[char];
        }
        return this.printWordsWithPrefix(node, prefix);
    }

    printWordsWithPrefix(node, prefix) {
        let words = [];
        const traverse = (node, currentPrefix) => {
            if (node.isEndOfWord) {
                words.push(currentPrefix); // Fixed to use currentPrefix
            }
            for (let char in node.children) { // Changed to for...in
                traverse(node.children[char], currentPrefix + char);
            }
        };
        traverse(node, prefix);
        return words;
    }
}
