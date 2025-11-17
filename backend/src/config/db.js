import mongoose from "mongoose"

export const connectDB = async () => {
    try {
      console.log("🔍 MONGO_URI =", process.env.MONGO_URI); // debug log
        await mongoose.connect(
          process.env.MONGO_URI
        )
        console.log("Mogodb connected successfully");
    } catch (error) {
      console.error("Error connecting to MongoDB", error)
      process.exit (1)
    }
}