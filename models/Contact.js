import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        maxLength: [100, "Name cannot exceed 100 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        match: [/^\S+@\.\S+$/, "Please enter a valid email"]
    },
    subject: {
        type: String,
        required: [true, "Subject is required"],
        trim: true,
        maxLength: [200, "Subject cannot exceed 200 characters"]
    },
    message: {
        type: String,
        required: [true, "Message is required"],
        trim: true,
        maxLength: [1000, "Message cannot exceed 200 characters"]
    },
    status: {
        type: String,
        enum: ["new", "read", "replied"],
        default: "new"
    },
}, { timestamps: true })

const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);