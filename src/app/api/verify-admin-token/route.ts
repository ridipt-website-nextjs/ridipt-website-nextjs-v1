import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Admin from "@/models/admin.model";
import TokenManager from "@/lib/jwt-token-manager";

export async function POST(req: Request) {
    try {
        const { token } = await req.json();

        if (!token) {
            return NextResponse.json(
                { success: false, message: "Token is required" },
                { status: 400 }
            );
        }

        // Verify JWT token

        let decoded;
        try {
            decoded = TokenManager.verifyToken<{
                email: string;
                adminId: string;
                type: string;
            }>(token)
        } catch (jwtError) {
            return NextResponse.json(
                { success: false, message: "Invalid or expired token" },
                { status: 401 }
            );
        }

        // Check if token type is admin
        if (decoded.type !== 'admin') {
            return NextResponse.json(
                { success: false, message: "Not an admin token" },
                { status: 403 }
            );
        }

        // Connect to database and verify admin exists
        await connectDB();

        const admin = await Admin.findById(decoded.adminId).select('name email mobile isActive');

        if (!admin) {
            return NextResponse.json(
                { success: false, message: "Admin not found" },
                { status: 404 }
            );
        }

        // Check if admin is active (optional check)
        // if (admin.isActive === false) {
        //   return NextResponse.json(
        //     { success: false, message: "Admin account is deactivated" },
        //     { status: 403 }
        //   );
        // }

        return NextResponse.json({
            success: true,
            message: "Token verified successfully",
            isValid: true
        });

    } catch (error) {
        console.error("Token verification error:", error);
        return NextResponse.json(
            { success: false, message: "Server error while verifying token" },
            { status: 500 }
        );
    }
}
