import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Job from "@/models/jobs.model";
import dbConnect from "@/lib/mongodb";
import TokenManager from "@/lib/jwt-token-manager";

// Helper function - Token verification
async function verifyAdminToken(req: Request) {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
        throw new Error("Token missing");
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
        throw new Error("Invalid token format");
    }

    const data = TokenManager.verifyToken<{
        email: string;
        adminId: string;
        type: string;
    }>(token);

    if (data.type !== 'admin') {
        throw new Error("Unauthorized - Not admin");
    }

    return data;
}

// 📌 GET single job by custom ID
export async function GET(req: Request, { params }: { params: any}) {
    try {
        await dbConnect();
        
        // 🔑 Token verify
        await verifyAdminToken(req);
        console.log(params.job_id.trim())

        // 🔍 Custom ID validate (string validation instead of ObjectId)
        if (!params.job_id || params.job_id.trim() === '') {
            return NextResponse.json(
                { error: "Invalid job ID" }, 
                { status: 400 }
            );
        }

        // ✅ Job find karna using custom 'job_id' field
        const job = await Job.findOne({ job_id: params.job_id });
        
        if (!job) {
            return NextResponse.json(
                { error: "Job not found" }, 
                { status: 404 }
            );
        }

        return NextResponse.json(job, { status: 200 });

    } catch (error: any) {
        if (error.message.includes("Token") || error.message.includes("Unauthorized")) {
            return NextResponse.json({ error: error.message }, { status: 401 });
        }
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// 📌 PUT - Update job by custom ID
export async function PUT(req: Request, { params }: { params: any}) {
    try {
        await dbConnect();
        
        // 🔑 Token verify
        await verifyAdminToken(req);

        // 🔍 Custom ID validate
        if (!params.job_id || params.job_id.trim() === '') {
            return NextResponse.json(
                { error: "Invalid job ID" }, 
                { status: 400 }
            );
        }

        // 📝 Request body get karna
        const body = await req.json();

        // 🚫 ID field को update करने से रोकना
        if (body.job_id && body.job_id !== params.job_id) {
            return NextResponse.json(
                { error: "Cannot change job ID" }, 
                { status: 400 }
            );
        }

        // ✅ Job update karna using custom 'job_id' field
        const updatedJob = await Job.findOneAndUpdate(
            { job_id: params.job_id }, // custom job_id field se find karna
            body,
            { 
                new: true, // updated document return kare
                runValidators: true // schema validation run kare
            }
        );

        if (!updatedJob) {
            return NextResponse.json(
                { error: "Job not found" }, 
                { status: 404 }
            );
        }

        return NextResponse.json(updatedJob, { status: 200 });

    } catch (error: any) {
        if (error.message.includes("Token") || error.message.includes("Unauthorized")) {
            return NextResponse.json({ error: error.message }, { status: 401 });
        }
        
        // Duplicate key error handle karna
        if (error.code === 11000) {
            return NextResponse.json(
                { error: "Job ID already exists" }, 
                { status: 409 }
            );
        }
        
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// 📌 DELETE job by custom ID
export async function DELETE(req: Request, { params }: { params: any}) {
    try {
        await dbConnect();
        
        // 🔑 Token verify
        await verifyAdminToken(req);

        // 🔍 Custom ID validate
        if (!params.job_id || params.job_id.trim() === '') {
            return NextResponse.json(
                { error: "Invalid job ID" }, 
                { status: 400 }
            );
        }

        // ❌ Job delete karna using custom 'job_id' field
        const deletedJob = await Job.findOneAndDelete({ job_id: params.job_id });

        if (!deletedJob) {
            return NextResponse.json(
                { error: "Job not found" }, 
                { status: 404 }
            );
        }

        return NextResponse.json(
            { 
                message: "Job deleted successfully", 
                deletedJob 
            }, 
            { status: 200 }
        );

    } catch (error: any) {
        if (error.message.includes("Token") || error.message.includes("Unauthorized")) {
            return NextResponse.json({ error: error.message }, { status: 401 });
        }
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
