class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class circularLinked {
  constructor() {
    this.head = null
    this.size = 0
  }

  getSize() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }

  prepend(value) {
    let node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      node.next = this.head
    } else {

      let prev = this.head

      while (prev.next != this.head) {
        prev = prev.next
      }
      node.next = this.head
      prev.next = node
      this.head = node 
    }
    this.size++
  }

  append(value) {
    let node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      node.next = this.head
    } else {
      let prev = this.head
      while (prev.next != this.head) {
        prev = prev.next
      }
      prev.next = node
      node.next = this.head
    }
    this.size++
  }

  print() {
    let listed = ''
    let curr = this.head
    let result = []
    do {
      result.push(curr.value)
      curr = curr.next
    } while (curr != this.head)
    console.log(result)
  }

}

let cList = new circularLinked()
cList.prepend(45)
cList.append(76)
cList.print()
