let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
};
function one(obj){
    obj.languages.push("Go")
    return obj;
}

console.log(one(programming));

function two(obj){
    obj.difficulty = 7;
    return obj
}
console.log(two(programming));

function three(obj){
    delete obj.jokes
    return obj
}
console.log(three(programming));

function four(obj){
    obj["isFun"] = true;
    return obj
}
console.log(four(programming));