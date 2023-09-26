// Button Event Listener
document.getElementById("btn1").addEventListener("click", btnClicked1);
document.getElementById("btn2").addEventListener("click", btnClicked2);
document.getElementById("btn3").addEventListener("click", btnClicked3);
document.getElementById("btn4").addEventListener("click", btnClicked4);
document.getElementById("btn5").addEventListener("click", btnClicked5);

// arrays
let list = [1, 2, 3, "flowers", "genuine", "Maynards"];

function btnClicked1() {
    let testItem = prompt("test this item");

    if (myIncludes(list, testItem)) {
        console.log("its in the array");
    } else {
        console.log("it not in aray");
    }
}

function myIncludes(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == item) {
            return true;
        } else if (array[i] === item) {
            return true;
        }
    }
}

function btnClicked2() {
    let testItem = prompt("test this item");
    let index = myIndexOf(list, testItem);

    if (index === -1) {
        console.log("it not in aray");
    } else {
        console.log(`in the array at index ${index}`);
    }
}

function myIndexOf(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == item) {
            return i;
        } else if (array[i] === item) {
            return i;
        }
    }

    return -1;
}

function btnClicked3() {
    let nums1 = [];
    let digits = +prompt("how many numbers are in the array?");

    for (let i = 0; i < digits; i++) {
        let newItem = +prompt(`what is your number at array position ${i}?`)
        nums1.push(newNum);
    }

    console.log(nums1);
    console.log(average(nums1));
}

function average(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }

    total = total/array.length;

    return total;
}

function btnClicked4() {
    let nums2 = [];
    let digits = +prompt("how many numbers are in the array?");

    for (let i = 0; i < digits; i++) {
        let newNum = +prompt(`what is your number at array position ${i}?`)
        nums2.push(newNum);
    }

    console.log(nums2);
    console.log(myMax(nums2));
}

function myMax(array) {
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    
    return max;
}

function btnClicked5() {
    let list2 = [];
    let list2Size = +prompt("how many items are in the array?");

    for (let i = 0; i < digits; i++) {
        let newItem = prompt(`what is your number at array position ${i}?`)
        nums2.push(newItem);
    }
}

function count(array) {

}