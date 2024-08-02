class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
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

    search(root, value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(root.value > value){
                this.search(root.left , value)
            }else{
                this.search(root.right , value)
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if(root){
            this.inOrder(root.left)
             
            console.log(root.value);

        this.inOrder(root.right)
        }
        
    }

    postOrder(root) {
        if(root){
            this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value);

        }
        
    }

    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
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

    delete(value){
        this.root = this.deleteNode(this.root , value)
    }

    deleteNode(root , value){
        if(root === null){
            return root
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left , value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right , value)
        }else{
            if(!root.right && !root.left){
                return null
            }

            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right , value)
            root.right = this.deleteNode(root.right , root.value)
        }
        return root
    }

    findClosest(target){
        return this.findClosestValue(this.root , target , this.root.value)
    }

    findClosestValue(node , target , closest){
        if(node === null){
            return this.root
        }

        if(Math.abs(target - closest) > Math.abs(target - node.value)){
            closest = node.value
        }

        if(target < node.value){
            this.findClosestValue(node.left , target , closest)
        }else if(target > node.value){
            this.findClosestValue(node.right , target , closest)
        }else{
            return closest
        }
    }

    isBST(){
        return this.isBSTValidate(this.root , -Infinity , Infinity)
    }

    isBSTValidate(node , min , max){
        if(node == null){
            return true
        }

        if(node.value <= min || node.value >= max){
            return false
        }

        return this.isBSTValidate(node.left , min , node.value) && this.isBSTValidate(node.right , node.value , max)
    }
}

let bst = new BinarySearchTree()

bst.insert(34)
bst.insert(45)
bst.insert(56)
bst.preOrder(bst.root)
