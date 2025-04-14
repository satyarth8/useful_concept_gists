// ********************* Example of creating and using a hashmap in JavaScript: *************************

let map = {};

// Add key-value pairs to the map
map['key1'] = 'value1';
map['key2'] = 'value2';
map['key3'] = 'value3';

// Access values in the map using keys
console.log(map['key1']); // outputs: "value1"
console.log(map['key2']); // outputs: "value2"
console.log(map['key3']); // outputs: "value3"

// Check if a key exists in the map
console.log('key1' in map); // outputs: true
console.log('key4' in map); // outputs: false

// Remove a key-value pair from the map
delete map['key2'];
console.log('key2' in map); // outputs: false



// *********************  Example of using a hashmap to count the occurrences of elements in an array in JavaScript ******************************

let array = [1, 2, 3, 2, 1, 3, 4, 4, 5];

let countMap = {};

// Loop through the array and count the occurrences of each element
array.forEach(element => {
  if (countMap[element] === undefined) {
    countMap[element] = 1;
  } else {
    countMap[element]++;
  }
});

// Log the count for each element
for (let key in countMap) {
  console.log(`Element ${key} occurs ${countMap[key]} times`);
} 

// output   Element 1 occurs 2 times
            // Element 2 occurs 2 times
            // Element 3 occurs 2 times
            // Element 4 occurs 2 times
            // Element 5 occurs 1 times