import mongoose from "mongoose"

export const connection=async()=>{
    const URL="mongodb+srv://debnathmouparna2005:omnamahshivay@ecommerce-webapp.zcu8v94.mongodb.net/?retryWrites=true&w=majority"
    try {
        await mongoose.connect(URL,)
console.log("database conneted successfully")
    } catch (error) {
        console.log("error while connecting with the server",error.message)
    }
}