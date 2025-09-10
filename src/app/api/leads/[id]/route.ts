import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Lead, { ILead } from "@/models/leads.model";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(req: Request, { params }: any) {
  try {
    await dbConnect();

    const lead = await Lead.findById<ILead>(params.id);

    if (!lead) {
      return NextResponse.json(
        { success: false, message: "Lead not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: lead },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
