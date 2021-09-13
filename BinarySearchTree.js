
/* Binary Search Tree */
// a way to gold data that when visialized looks like a tree you would see in nature
// BST can only have two branches

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null; // top of tree
    }

    add(data) {        
        const node = this.root;
        if (node === null) {    // if its the first node
            this.root = new Node(data);
            return;
        } else {

            const searchTree = function(node) {             // recursive, important function
                if (data < node.data ) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else { 
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return null;
    }


    isPresent(data) {                   // returns only True or False
        let current = this.root;                        // start at top
        while(current) {                                // while current is not null 
            if (data === current.data) {                // means its found
                return true;
            }
            if (data < current.data) {                  // checking left side
                current = current.left;
            } else {
                current = current.right;                // if its not on the left, check right
            }
        }
        return false;
    }

    remove(data) {                      // recursive
        const removeNode = function(node, data) {
            if (node ==  null) {                                    // first check if the tree is empty
                return null;
            }
            if (data == node.data) {                                // if we can find data in the tree
                // node has no children
                if (node.left == null && node.right == null) {
                    return null;
                }
                // node has no left children
                if (node.left == null) {                            // if the node has no left child, its replaced by the right child
                    return node.right;
                }
                // node has no right children
                if (node.right == null) {
                    return node.left;
                }
                // node has two children
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1 )
    }

    findMinHeight(node = this.root) {
        if (node== null) {
            retrun -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }

    findMaxHeight(node = this.root) {
        if(node == null) {
            return -1;
        };
        let left = rhis.findMaxHeight(node.left);
        let right = rhis.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    };

    inOrder() {
        if (this.root == null) {                    // check if there are values
            return null;
        } else {
            var result = new Array();               // create new array with the result
            function traverseInOrder(node) {
                node.left && traverseInOrder(node.left);                // &&: if the first thing is true it will also run the second command
                result.push(node.data);                                 
                node.right && traverseInOrder(node.right);              // -- if node.right exists then run the recursion
            }
            traverseInOrder(this.root);
            return result;
        };
    }

    postOrder() {
        if (this.root == null) {                    // check if there are values
            return null;
        } else {
            var result = new Array();               // create new array with the result
            function traverseInOrder(node) {
                node.left && traverseInOrder(node.left);
                node.right && traverseInOrder(node.right);
                result.push(node.data);
            }
            traverseInOrder(this.root);
            return result;
        };
    }

    levelOrder() {
        let result = [];
        let Q = [];
        if (this.root != null) {
            Q.push(this.root);                              // add the root node to a queue, then begin a loop where we
            while(Q.length > 0) {                           // DQ the first item in the queue add it to a new array and then inspect
                let node = Q.shift();                       // both its child sub trees
                result.push(node.data);
                if (node.left != null) {
                    Q.push(node.left);
                };
                if (node.right != null) {
                    Q.push(node.right);
                };
            };
            return result;
        } else {
            return null;
        };
    };
}


const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);

console.log(bst.isPresent(4));
bst.remove(4);

console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.isPresent(4));

console.log('In Order: ' + bst.inOrder());
console.log('Post Order: ' + bst.postOrder());
console.log('Level Order: ' + bst.levelOrder());
