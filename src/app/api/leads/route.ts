import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Lead, { ILead } from "@/models/leads.model";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body: ILead = await request.json();

    const newLead = await Lead.create(body);

    return NextResponse.json(
      { success: true, data: newLead },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const leads = await Lead.find<ILead>({});

    return NextResponse.json(
      { success: true, data: leads },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
