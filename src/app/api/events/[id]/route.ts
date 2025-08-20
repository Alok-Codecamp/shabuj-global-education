import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// function for delete event  
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
        const client = await clientPromise;
        const db =  client.db('database1')
        const eventsCollection = db.collection("events");
        const res = await eventsCollection.deleteOne({_id:new ObjectId(id)})
  return new NextResponse(JSON.stringify({deletedCount:res.deletedCount}))
}

// function for get event by id 
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = await params;
        const client = await clientPromise;
        const db =  client.db('database1')
        const eventsCollection = db.collection("events");
        const event = await eventsCollection.findOne({_id:new ObjectId(id)})
   return new Response(JSON.stringify(event),{
            status:200,
            headers:{
                "Content-Type":"application/json"
            }
        })
}

// function for update 
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = await params;
  const data = await request.json();
        const client = await clientPromise;
        const db =  client.db('database1')
        const eventsCollection = db.collection("events");
        console.log('data',data)
        const event = await eventsCollection.findOneAndUpdate({_id:new ObjectId(id)},{$set:data},{returnDocument:"after"})
        
   return new Response(JSON.stringify(event),{
            status:200,
            headers:{
                "Content-Type":"application/json"
            }
        })
}