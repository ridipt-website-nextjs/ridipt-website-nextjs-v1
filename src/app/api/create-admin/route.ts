import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Admin from "@/models/admin.model"

export async function POST(request: NextRequest) {
    try {
        const { name, email, mobile } = await request.json()

        if (!name || !email || !mobile) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            )
        }


        await connectDB()

        // Check if user already exists
        const existingUser = await Admin.findOne({
            email: email.toLowerCase()
        })

        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            )
        }


        // Create user
        const user = await Admin.create({
            name,
            email: email.toLowerCase(),
            mobile
        })

        // Remove password from response
        const { password: _, ...userWithoutPassword } = user.toObject()

        return NextResponse.json(
            {
                message: "Admin user created successfully",
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
