function cookingByNumbers(param1, param2, param3, param4, param5, param6) {
    let startNum = param1;
    let arr = [param2, param3, param4, param5, param6];

    let finalArr = [];
    let temp = startNum;
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        if (command === "chop") {
            temp = temp / 2;
            finalArr.push(temp);
        } else if (command === "dice") {
            temp = temp ** 2;
            finalArr.push(temp);
        } else if (command === "spice") {
            temp = temp + 1;
            finalArr.push(temp);
        } else if (command === "bake") {
            temp = temp * 3;
            finalArr.push(temp);
        } else if (command === "fillet") {
            temp = temp - temp / 5;
            finalArr.push(temp);
        }

    }
    return finalArr.join(`\n`);
}
console.log(cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop'));
//console.log(cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));