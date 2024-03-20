import mongoose from "mongoose";

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Provide a Username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please Provide an Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide a Password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
  // Additional fields can be added here as needed
});

// Create a model using the schema
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
