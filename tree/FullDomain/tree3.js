class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root == null
    }

    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root , node)
        }
    }

    insertNode(root , node){
        
        if(node.value < root.value) {
            if(root.left == null){
                root.left = node
            }else{
                this.insertNode(root.left , node)
            }
        }else{
            if(root.right == null){
                root.right = node
            }else{
                this.insertNode(root.right , node)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root , value)
    }

    deleteNode(root , value){
        if(root == null){
            return null
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left ,  value)
        }else if(value > root.value) {
            root.right = this.deleteNode(root.right , value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right , root.value)
        }
        return root
    }

    height(root = this.root) {
        if(root){
            return 0
        }

        let leftHeight = this.height(root.left)
        let rightHeight = this.height(root.right)
        return Math.max(leftHeight , rightHeight) + 1
    }
}

const treee = new Tree()

treee.insert(34)
treee.insert(45)
treee.insert(4)
treee.preOrder(treee.root)


let a = 7
typeof(a) // 