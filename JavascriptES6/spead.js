// var array1 = ['JavaScript', 'PHP', 'Ruby'];
// var array2 = ['ReactJS', 'NodeJS', 'AngularJS'];

// var array3 = [...array2, ...array1];

// console.log(array3); // ["ReactJS", "NodeJS", "AngularJS", "JavaScript", "PHP", "Ruby"]

var object1 = {
    name: 'JavaScript'
};
var object2 = {
    price: 1000
};

var object3 = {
    ...object1, //
    ...object2
};

console.log(object3);