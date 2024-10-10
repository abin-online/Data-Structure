class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    
    isEmpty() {
        return this.root === null;
    }
    
    insert(value) {
        let node = new TreeNode(value);
        if (this.isEmpty()) {
            this.root = node; // Corrected from `==` to `=`
        } else {
            this.insertNode(this.root, node);
        }
    }
    
    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node); // Added recursive call
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node); // Added recursive call
            }
        }
    }
    
    preOrder(root) {
        if (root) {
            console.log(root.value); 
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
    
    levelOrder() {
        const queue = [];
        if (this.root) queue.push(this.root); 
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
    }
    
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    
    deleteNode(root, value) {
        if (root === null) {
            return root;
        }
        
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // Node with one child or no child
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            // Node with two children
            root.value = this.min(root.right); // Correctly get the min value
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
    
    min(root) {
        if (root.left) {
            return this.min(root.left); //  traverse to the leftmost node
        }
        return root.value; // Return the smallest value
    }
    
    max(root) {
        if (root.right) {
            return this.max(root.right); //  traverse to the rightmost node
        }
        return root.value; // Return the largest value
    }
    
    findClosest(target) {
        return this.findClosestValue(this.root, target, this.root.value);
    }
    
    findClosestValue(node, target, closest) {
        if (node === null) {
            return closest; // Added to handle null node
        }
        
        if (Math.abs(target - closest) > Math.abs(target - node.value)) {
            closest = node.value;
        }
        
        if (target < node.value) {
            return this.findClosestValue(node.left, target, closest);
        } else if (target > node.value) {
            return this.findClosestValue(node.right, target, closest);
        } else {
            return closest;
        }
    }
    
    isBST() {
        return this.isBSTValidate(this.root, -Infinity, Infinity);
    }
    
    isBSTValidate(node, min, max) {
        if (node === null) {
            return true;
        }
        if (min >= node.value || max <= node.value) {
            return false;
        }
        return this.isBSTValidate(node.left, min, node.value) && 
               this.isBSTValidate(node.right, node.value, max); // Fixed typo from `tihs` to `this`
    }
}

// Example usage
const trrr = new Tree();
trrr.insert(45);
trrr.insert(33);
trrr.preOrder(trrr.root);
