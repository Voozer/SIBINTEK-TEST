// Написать функцию на Javascript, копирующую объект. Вложенность копируемого объекта может быть любой

// переводим объект в строку и обратно в уже новый объект - таким образом реализуем deep copy
function objectCopy(object) {
    return JSON.parse(JSON.stringify(object))
}

const testObject = {
    someNumber: 42,
    someString: "I am a test object",
    nestedObject: {
        nestedString: "I am a nested object",
        objectsArray: [{
            anotherString1: "Can you copy me?"
        },
        {
            anotherString2: "Ok, how about me?"
        },
        {
            anotherString3: "Deep copy is really useful"
        }]
    }
}

const copiedObject1 = objectCopy(testObject)
console.log(copiedObject1)

const copiedObject2 = objectCopy({})
console.log(copiedObject2)
