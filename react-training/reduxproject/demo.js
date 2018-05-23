function a(msg) {
    console.log('Inside function a');

    function b(arg) {
        console.log('Inside fuction b with argument -> ', arg, msg);
        
        function c() {
            console.log('Inside function c -> ',msg, arg);
        }

        return c;
    }

    return b; // function a returning function b;
}

let x = a(); // return reference of function b
console.log(x); // got reference of function b
x(100); // invoking function b

a()(1000); // to invoke the inner function
a("hello ankit")("aa")(); // a->b->c

// Array manipulation

myArray = [10,20];
console.log('myArray -> ', myArray);

// ... -> Spread operator. It expands the values of the array and add it to the new array.
arr2 = [300,500,...myArray,1000];
console.log('arr2 -> ', arr2);

arr2 = [...arr2, 22];
console.log('new arr2 -> ', arr2);

// Slice function

// .arr2.slice(0,1) -> returns value between start and end index
// .arr2.slice(2) -> slicing till the 2nd index and returns the remaining elements after 2nd index.
arr3 = [...arr2.slice(0,1), ...arr2.slice(2)];
console.log('arr3 -> ', arr3);