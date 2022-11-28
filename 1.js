// Реализовать на Typescript один из Javascript методов работы с массивами (на выбор reduce, map, filter)
// Сам массив передается первым параметром, остальные параметры как в Javascript аналоге.
function myMap(inputArray, callback) {
    var outputArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        if (i in inputArray) {
            outputArray[i] = callback(inputArray[i], i, inputArray);
        }
    }
    return outputArray;
}
//                                                  ПРИМЕРЫ РАБОТЫ
var testArray1 = [1, 2, 3, 4, 5];
console.log(myMap(testArray1, function (value) { return value * 10; }));
console.log(myMap(testArray1, function (value) { return value.toString(); }));
console.log(testArray1.map(function (value) { return value * 10; }));
console.log(testArray1.map(function (value) { return value.toString(); }));
// работает также и с пустыми слотами в массиве
var testArray2 = [1, 2, , , 15];
console.log(testArray2);
console.log(myMap(testArray2, function (value) { return value * 10; }));
console.log(myMap(testArray2, function (value) { return value.toString(); }));
console.log(testArray2.map(function (value) { return value * 10; }));
console.log(testArray2.map(function (value) { return value.toString(); }));
// и с непримитивными элементами
var testArray3 = [[1, 2, 3], [1, 2], , [0, 0, , 0]];
console.log(myMap(testArray3, function (value, index) { return "I am array number ".concat(index, " and my size is ").concat(value.length); }));
console.log(testArray3.map(function (value, index) { return "I am array number ".concat(index, " and my size is ").concat(value.length); }));
// пример с MDN
var kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
];
var reformattedArray = myMap(kvArray, function (_a) {
    var _b;
    var key = _a.key, value = _a.value;
    return (_b = {}, _b[key] = value, _b);
});
console.log(reformattedArray);
console.log(kvArray);
// shallow copy в обоих случаях
var copyArray1 = [[1, 2], []];
var newArr1 = myMap(copyArray1, function (value) { return value; });
newArr1[1].push(42);
console.log(newArr1);
console.log(copyArray1);
var copyArray2 = [[1, 2], []];
var newArr2 = copyArray2.map(function (value) { return value; });
newArr2[1].push(999);
console.log(newArr2);
console.log(copyArray2);
