// Testing mongoose database insert operation.
import users from "./data/users.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

 connectDB()

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema);

// Function to insert multiple users into the database
async function insertManyUsers(users) {
  try {
    const result = await UserModel.insertMany(users);
    console.log("Users inserted successfully:", result);
  } catch (error) {
    console.error("Error inserting users:", error.message);
  } finally {
    mongoose.disconnect();
  }
}


insertManyUsers(users);
