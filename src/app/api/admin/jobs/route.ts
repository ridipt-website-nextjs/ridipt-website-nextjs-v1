import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Job from "@/models/jobs.model";
import dbConnect from "@/lib/mongodb";
import TokenManager from "@/lib/jwt-token-manager";

// 📌 POST new job
export async function POST(req: Request) {
    try {
        await dbConnect();

        // 🔑 Token validation
        const authHeader = req.headers.get("authorization");
        if (!authHeader) {
            return NextResponse.json({ error: "Unauthorized - Token missing" }, { status: 401 });
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return NextResponse.json({ error: "Unauthorized - Invalid token format" }, { status: 401 });
        }

        const data = TokenManager.verifyToken<{
            email: string;
            adminId: string;
            type: string;
        }>(token);

        if (data.type !== 'admin') {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();

        // ✅ VALIDATION - Ensure job_id exists and is unique
        if (!body.job_id) {
            return NextResponse.json({ error: "Job ID is required" }, { status: 400 });
        }

        // Check if job_id already exists
        const existingJob = await Job.findOne({ job_id: body.job_id });
        if (existingJob) {
            return NextResponse.json({ error: "Job ID already exists" }, { status: 400 });
        }

        // ✅ Create new job
        const newJob = await Job.create(body);

        return NextResponse.json(newJob, { status: 201 });
    } catch (error: any) {
        console.error("Job creation error:", error);
        
        // Handle duplicate key errors
        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern)[0];
            return NextResponse.json({ 
                error: `Duplicate value for field: ${field}` 
            }, { status: 400 });
        }
        
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