import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Job from "@/models/jobs.model";
import dbConnect from "@/lib/mongodb";
import TokenManager from "@/lib/jwt-token-manager";

// 📌 POST new job
export async function POST(req: Request) {
    try {
        await dbConnect();

        // 🔑 Token extract karna
        const authHeader = req.headers.get("authorization");
        if (!authHeader) {
            return NextResponse.json({ error: "Unauthorized - Token missing" }, { status: 401 });
        }

        // Bearer token handle karna
        const token = authHeader.split(" ")[1];
        if (!token) {
            return NextResponse.json({ error: "Unauthorized - Invalid token format" }, { status: 401 });
        }

        // ✅ Yahan aap apna JWT verify kar sakte ho (agar JWT use kar rahe ho)
        // Example:
        const data = TokenManager.verifyToken<{
            email: string;
            adminId: string;
            type: string;
        }>(token)

        if (data.type !== 'admin') {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const newJob = await Job.create(body);

        return NextResponse.json(newJob, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


export async function GET(req: Request) {
    try {
        await dbConnect();

        // 🔑 Token extract karna
        const authHeader = req.headers.get("authorization");
        if (!authHeader) {
            return NextResponse.json({ error: "Unauthorized - Token missing" }, { status: 401 });
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return NextResponse.json({ error: "Unauthorized - Invalid token format" }, { status: 401 });
        }

        // ✅ Token verify
        const data = TokenManager.verifyToken<{
            email: string;
            adminId: string;
            type: string;
        }>(token);

        if (data.type !== "admin") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // ✅ Sab jobs fetch karna
        const jobs = await Job.find();

        return NextResponse.json(jobs, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}