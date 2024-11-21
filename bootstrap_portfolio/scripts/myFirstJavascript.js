//alert("Hello World");
var hello="Hello World";
console.log("This is good for debugging " + hello);

function print3Ways(){
    alert("Hello World");
    console.log("printing to the console");
    document.write("this will re-write the HTML page");
}
var arr=[1,2,3,4,5];

function funWithArrays(){
    document.write("The sum is " + getSum());
    document.write("The minimum is " + findMin());
    document.write("The maximum is " + findMax());
    document.write("The average is " + average())
}
function getSum(){
    sum=0;
    for(let i=0;i<arr.length;i++) {
        sum+= arr[i];
    }
    return sum;
}
function findMin(){
    min=arr[0];
    for(let i=1;i<arr.length;i++) {
        if (arr[i] < min){
            min=arr[i];
        }
    }
    return min;
}

function findMax(){
    max=arr[0];
    for(let i=1;i<arr.length;i++) {
        if (arr[i] > max){
            max=arr[i];
        }
    }
    return max;
}

function average(){
    let sum=getSum();
    return sum/arr.length;
}

function firstFunction(callback){
    console.log("about to execute the callback function");
    callback();
}

function myCallbackFunction(){
    console.log("this is the callback function that does something special");
}

function soManyFunctions(){
    console.log("in soManyFunctions. Begin function calls");
    firstFunction(myCallbackFunction);
    console.log("returning to soManyFunctions");

}