class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root == null
    }

    insert(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.root.value = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, value) {
        const node = new Node()
        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(root, node)
        }
    }

    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left == null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (root.right == null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                this.search(root.left, value)
            } else {
                this.search(root.right, value)
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root)
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root)
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            this.max(root.right)
        }
    }

    levelOrder() {
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value)
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root , value)
    }

    deleteNode(root , value) {
        if(root == null) {
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left , value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right , value)
        }else{
            if(!root.left && !root.right) {
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }        
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right , root.value)
        }
    }

    findClosest(target) {
        return this.findClosestValue(this.root, target, this.root.value)
    }

    findClosestValue(node, target, closest) {
        if (node === null) {
            return closest
        }
        if (Math.abs(target - closest) > Math.abs(target - node.value)) {
            closest = node.value
        }
        if (target < node.value) {
            return this.findClosestValue(node.left, target, closest)
        } else if (target > node.value) {
            return this.findClosestValue(node.right, target, closest)
        } else {
            return closest
        }
    }

    isBST() {
        return this.validateBST(this.root , -Infinity , Infinity)
    }

    validateBST(node , min , max) {
        if(node == null) {
            return true
        }

        if(node.value <= min || node.value >= max) {
            return false
        }

        return this.validateBST(node.left , min , node.value) && this.validateBST(node.right , node.value , max)
    }
}