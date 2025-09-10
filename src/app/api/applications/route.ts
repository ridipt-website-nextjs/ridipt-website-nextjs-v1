import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Application, { IApplication } from "@/models/applications.model";

// Create Application
export async function POST(request: Request) {
  try {
    await dbConnect();
    const body: IApplication = await request.json();

    const newApplication = await Application.create(body);

    return NextResponse.json(
      { success: true, data: newApplication },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to create application" },
      { status: 500 }
    );
  }
}

// Get All Applications
export async function GET() {
  try {
    await dbConnect();
    const applications = await Application.find<IApplication>({});

    return NextResponse.json(
      { success: true, data: applications },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to fetch applications" },
      { status: 500 }
    );
  }
}
