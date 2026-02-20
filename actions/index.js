"use server";

import dbConnect from "@/lib/db";
import Contact from "@/models/Contact";
import { success } from "zod";

export async function createContact(formData) {
    try {
        await dbConnect();
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        const subject = formData.get("subject");

        if (!name || !email || !message || !subject) {
            return {
                success: false,
                error: "All fields are required"
            }
        }

        const contact = await Contact.create({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            message: message.trim(),
            subject: subject.trim()
        })

        return {
            success: true,
            message: "Message sent successfully",
            contactId: contact._id.toString()
        }
    } catch (error) {
        console.log("Error creating contaact: ", error);
        return {
            success: false,
            error: "Someting went wrong. Please try again."
        }
    }
}
