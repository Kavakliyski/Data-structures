/* Sracks */
// last in first out (example: browser back button)
// functions used for stacks: push(placing data on the stack), pop(removing the top element of the stack),
//                            peek(display the top element), lenght(determining how many elements are on the stack)

var letters = [];           // this is our stack

var word = "racecar";

var rword = "";             // reversed word


for (var i = 0; i < word.length; i++) {         // put letters of word into stack
    letters.push(word[i]);
}

for (var i = 0; i < word.length; i++) {         // pop off the stack in reverse order
    rword += letters.pop();
}

if (rword === word) {
    console.log(word + " is a polindrome.")
} else {
    console.log(word + " is not a polindrome.")
}



class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};

        this.push = function (value) {
            this.storage[this.count] = value;
            this.count++;
        };

        this.pop = function () {
            if (this.count === 0) {
                return undefined;
            }

            this.count--; // -1
            var result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        };

        this.size = function () {
            return this.count;
        };

        this.peek = function (value) {  // returns the value at the end of the stack
            return this.storage[this.count - 1];
        };
    }
}


var myStack = new Stack();

myStack.push(1);
myStack.push(10);
myStack.push(100);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push('zdravej');
myStack.push('brato');
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

