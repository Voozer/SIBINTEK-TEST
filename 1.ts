// Реализовать на Typescript один из Javascript методов работы с массивами (на выбор reduce, map, filter)
// Сам массив передается первым параметром, остальные параметры как в Javascript аналоге.

function myMap<InputType, OutputType>(inputArray: InputType[], callback: (value: InputType, index: number, array: InputType[]) => OutputType): OutputType[] {
    let outputArray = []
    for (let i = 0; i < inputArray.length; i++) {
        if (i in inputArray) {
            outputArray[i] = callback(inputArray[i], i, inputArray)
        }
    }
    return outputArray
}

//                                                  ПРИМЕРЫ РАБОТЫ
let testArray1 = [1, 2, 3, 4, 5]
console.log(myMap(testArray1, value => value * 10))
console.log(myMap(testArray1, value => value.toString()))
console.log(testArray1.map(value => value * 10))
console.log(testArray1.map(value => value.toString()))

// работает также и с пустыми слотами в массиве
let testArray2 = [1, 2, , , 15]
console.log(testArray2)
console.log(myMap(testArray2, value => value * 10))
console.log(myMap(testArray2, value => value.toString()))
console.log(testArray2.map(value => value * 10))
console.log(testArray2.map(value => value.toString()))

// и с непримитивными элементами
let testArray3 = [[1, 2, 3], [1, 2], , [0, 0, , 0]]
console.log(myMap(testArray3, (value, index) => `I am array number ${index} and my size is ${value.length}`))
console.log(testArray3.map((value, index) => `I am array number ${index} and my size is ${value.length}`))
// пример с MDN
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
const reformattedArray = myMap(kvArray, ({ key, value }) => ({ [key]: value }))
console.log(reformattedArray)
console.log(kvArray)

// shallow copy в обоих случаях
let copyArray1 = [[1, 2], []]
let newArr1 = myMap(copyArray1, value => value)
newArr1[1].push(42)
console.log(newArr1)
console.log(copyArray1)

let copyArray2 = [[1, 2], []]
let newArr2 = copyArray2.map(value => value)
newArr2[1].push(999)
console.log(newArr2)
console.log(copyArray2)
