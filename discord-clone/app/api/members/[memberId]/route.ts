import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: {memberId: string }}
    ) {
    try{
        const profile = await currentProfile();
        const { searchParams } = new URL(req.url);
        const { role } = await req.json();

        const serverId = searchParams.get("serverId");
        
        if (!serverId){
            return new NextResponse("Server ID Missing", { status: 400 })
        }

        if (!serverId){
            return new NextResponse("Server ID Missing", { status: 400 })
        }

        if (!params.memberId){
            return new NextResponse("Member ID Missing", { status: 400 })
        }
    } catch (error){
        console.log("[MEMBERS_ID_PATCH]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}