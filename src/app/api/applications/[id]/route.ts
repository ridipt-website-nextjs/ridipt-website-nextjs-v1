import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Application, { IApplication } from "@/models/applications.model";

interface Params {
  params: {
    id: string;
  };
}

// Get One Application by ID
export async function GET(req: Request, { params }: any) {
  try {
    await dbConnect();

    const application = await Application.findById<IApplication>(params.id);

    if (!application) {
      return NextResponse.json(
        { success: false, message: "Application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: application },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to fetch application" },
      { status: 500 }
    );
  }
}
