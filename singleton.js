import MongoSingleton from "./mongooseSingleton.js"

const mongoInstance = MongoSingleton.getInstance()

const anotherMongoInstance = MongoSingleton.getInstance()