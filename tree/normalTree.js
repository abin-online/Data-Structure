class Node{
    constructor(value){
        this.value = value
        this.children = []
    }

    addChild(child){
        this.children.push(child)
    }
}
