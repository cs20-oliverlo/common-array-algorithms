// arrays
let list1 = [1, 2, 3, "flowers", "genuine", "Maynards"];
let list2 = [4, 6, -7, 9, 10]; 
let list3 = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, "grass", "grass", "lancaster"];
let newArray = [];

// Functions
function myIncludes(item) {
    for (let i = 0; i < list1.length; i++) {
        if (list1[i] === item) {
            return true;
        }
    }
}

function myIndexOf(item) {
    for (let i = 0; i < list1.length; i++) {
        if (list1[i] == item) {
            return i;
        } else if (list1[i] === item) {
            return i;
        }
    }

    return -1;
}

function average() {
    let avg = 0;

    for (let i = 0; i < list2.length; i++) {
        avg += list2[i];
    }

    avg = avg/list2.length;

    return avg;;
}

function myMax() {
    let max = list2[0];

    for (let i = 0; i < list2.length; i++) {
        if (list2[i] > max) {
            max = list2[i]
        }
    }
    
    return max;
}

function count(item) {
    let num = 0;

    for (let i = 0; i < list3.length; i++) {
        if (list3[i] === item) {
            num++;
        }
    }

    return num;
}

function swap(array, index1, index2) {
    newArray = array.slice();

    newArray[index1] = array.slice(index2, index2 + 1);
    newArray[index2] = array.slice(index1, index1 + 1);

    return newArray;
}