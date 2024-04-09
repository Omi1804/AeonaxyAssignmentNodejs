import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  const dbString = process.env.MONGO_URI;

  // Checking if MONGO_URI is not defined
  if (!dbString) {
    console.log("Please specify Database URI");
    process.exit(1);
  }

  try {
    await mongoose.connect(dbString);
    console.log("Connection is successful");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
