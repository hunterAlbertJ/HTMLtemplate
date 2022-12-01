function difference(param1, param2){
    return param1 - param2;
}

function product(param1, param2){
    return param1 + param2;
}

function printDay(dayCount){
    let weekArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekArr[dayCount - 1];
}
//console.log(printDay(4))

function lastElement(arr){
    return arr[arr.length - 1];
}

function numberCompare(param1, param2){
    if(param1 === param2){
        return "Numbers are Equal"
    } else if(param1 > param2){
        return "First is greater"
    } else{
        return "Second is greater"
    }
}

function singleLetterCount(str1, str2){
    let adjStr2 = str2.toLowerCase();

    let storageVar = 0;
    for(i = 0; i < str1.length; i++){
        if(str1[i] === adjStr2){
            storageVar ++;
        }
    }
    return storageVar;
}
//console.log(singleLetterCount('amazing','A')) // 2))

function multipleLetterCount(str){
    let storageObj = {};
    for(i = 0; i < str.length; i++){
        if(storageObj[str[i]] === undefined){
            storageObj[str[i]] = 1
        } else {
            storageObj[str[i]]++
        }
    }
    return storageObj;
}
console.log(multipleLetterCount("hello world"));

function arrayManipulation(arr, command, position, value){
    if(command === "remove" && position === "end"){
        let temp = arr[arr.length-1];
        arr.pop;
        return temp
    }
    if(command === "remove" && position === "beginning"){
        let temp = arr[0];
        arr.shift;
        return temp
    }
    if(command === "add" && position === "beginning"){
        arr.unshift(value)
        return arr;
    }

    if(command === "add" && position === "end"){
        arr.push(value)
        return arr;
    }
}

//console.log(arrayManipulation([1,2,3], "add", "end", 20)) // 3)
 function isPalindrome(str){
  
    let tempStr = "";
 for(i = str.length -1; i >= 0; i--){
    tempStr += str[i]
    console.log(tempStr)
 }
 if(tempStr === str){
    return true
 }
 return false;
 }
 //console.log(isPalindrome("tacocat"))