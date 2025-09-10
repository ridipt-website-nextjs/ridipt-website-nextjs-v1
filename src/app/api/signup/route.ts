import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import connectDB from "@/lib/mongodb"
import User from "@/models/user.model"

export async function POST(request: NextRequest) {
    try {
        const { name, email, password, roles } = await request.json()

        if (!name || !email || !password) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            )
        }

        if (password.length < 6) {
            return NextResponse.json(
                { error: "Password must be at least 6 characters" },
                { status: 400 }
            )
        }

        await connectDB()

        // Check if user already exists
        const existingUser = await User.findOne({
            email: email.toLowerCase()
        })

        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            )
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12)

        // Create user
        const user = await User.create({
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
            roles: roles || ["user"]
        })

        // Remove password from response
        const { password: _, ...userWithoutPassword } = user.toObject()

        return NextResponse.json(
            {
                message: "User created successfully",
                user: userWithoutPassword
            },
            { status: 201 }
        )

    } catch (error) {
        console.error("Signup error:", error)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
