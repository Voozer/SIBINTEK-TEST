// Реализовать паттерны программирования на JS ('Синглтон', 'Подписчик')

// Синглтон
class Singleton {
    // статичная приватная переменная - не передается экземплярам и не может быть изменена извне класса
    static #instance = null
    constructor(initMessage) {
        if (Singleton.#instance) {
            console.log("Singleton already created!")
            return Singleton.#instance
        }
        console.log("New singleton created!")
        this.msg = initMessage
        Singleton.#instance = this
    }
    // какие-нибудь свойства и/или методы
}

const singletonObject = new Singleton("First instance")
const singletonObject1 = new Singleton("Second instance")
console.log(singletonObject === singletonObject1) // должно быть true, так как экземпляр класса должен быть создан лишь 1 раз
console.log(singletonObject.msg)
console.log(singletonObject1.msg)

// Подписчик (Издатель-Подписчик)
class Publisher {
    #subs = []
    addSub(...newSubs) {
        this.#subs.push(...newSubs)
    }
    removeSub(...subs) {
        for (const sub of subs) {
            let subIndex = this.#subs.indexOf(sub)
            if (subIndex !== -1) {
                this.#subs.splice(subIndex, 1)
            } else {
                console.log("Subscriber to be removed not found!")
            }
        }
    }
    #notifyOne(sub, msg) {
        let subIndex = this.#subs.indexOf(sub)
        if (subIndex !== -1) {
            this.#subs[subIndex].update(msg)
        } else {
            console.log("Subscriber to be notified not found!")
        }
    }
    notifySome(subs, msg) {
        if (Array.isArray(subs)) {
            for (const sub of subs) {
                this.#notifyOne(sub)
            }
        } else {
            this.#notifyOne(subs, msg)
        }
    }
    notifyAll(msg) {
        this.#subs.forEach(sub => sub.update(msg))
    }
}

class Subscriber {
    #name
    constructor(name) {
        this.#name = name
    }
    update(msg) {
        console.log(`Subscriber '${this.#name}' updated!`)
        if (msg) {
            console.log(`Recieved message: ${msg}`)
            console.log()
        }
    }
}

const pub = new Publisher
for (let i = 0; i < 10; i++) {
    pub.addSub(new Subscriber(`Sub ${i}`))
}
const newSub1 = new Subscriber("New sub")
const newSub2 = new Subscriber("Another new sub")
pub.addSub(newSub1, newSub2)
pub.notifyAll()
pub.notifySome(newSub1, "Only one sub is notified!")
pub.removeSub(newSub1, newSub2)
pub.notifyAll("This is a very important message from a publisher!")