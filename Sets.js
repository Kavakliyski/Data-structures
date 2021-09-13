
/* Sets */
// like an array but no duplicate items and the values are not in order

class mySet {
    constructor() {
        var collection = [];    // will hold the set

        this.has = function(element) {  // this m will check for the presence of and element and return true or false
            return (collection.indexOf(element) !== -1);
        };

        this.values = function() {  // this m will return the values in the set
            return collection;
        };

        this.add = function(element) {  // this m will add and element to the set
            if (!this.has(element)) {
                collection.push(element);
                return true;
            }
            return false;
        };

        this.remove = function(element) {   // this , will remove and element from a set
            if (this.has(element)) {
                index = collection.indexOf(element);
                collection.splice(index, 1);
                return true;
            }
            return false;
        };

        this.size = function() {    // will return the size of the collection
            return collection.length;
        }

        this.union = function(otherSet) { // will return the union    
            var unionSet = new Set();
            var firstSet = this.values();
            var secondSet = otherSet.values();
            firstSet.forEach(function(e) {
                unionSet.add(e);
            });
        }

    };

}
