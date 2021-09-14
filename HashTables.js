
/* Hash Tables */
// used to implement associative arrays or mappings of key value paris, common way to implement the "map" data structure
// or objects, widely used because of how efficient they are. Avarage time for each lookup is O(1)

// takes a key input and the runs it through a hash function, hash function maps strings to numbers and usually
// the numbers correspond to indexes in an array

// most languages have it built in

var hash = (string, max) => {   // max number of buckets we use in our hash table to store values
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;               
};

class HashTable {
    constructor() {

        let storage = [];
        const storageLimit = 4;

        this.print = function () {              // to visualise
            console.log(storage);
        };

        this.add = function (key, value) {
            var index = hash(key, storageLimit);
            if (storage[index] === undefined) {
                storage[index] = [
                    [key, value]
                ];
            } else {
                var inserted = false;
                for (var i = 0; i < storage[index].length; i++) {
                  if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                    }
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
              }
        }

        this.remove = function(key) {
            var index = hash(key, storageLimit);
            if (storage[index].length === 1 && storage[index][0][0] === key) {
              delete storage[index];
            } else {
              for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                  delete storage[index][i];
                }
              }

            }
        };

        this.lookup = function(key) {
            var index = hash(key, storageLimit);
            if (storage[index] === undefined) {
              return undefined;
            } else {
              for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                  return storage[index][i][1];
                }
              }
            }
        };
    }
};


console.log(hash('quincy', 10))

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
console.log(ht.lookup('tux'))
ht.print();
