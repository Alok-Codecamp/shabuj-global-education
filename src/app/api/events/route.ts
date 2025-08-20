import clientPromise from "@/lib/db"
import { NextResponse } from "next/server";


export async function GET() {
    try{
        const client = await clientPromise;
        const db =  client.db('database1')
        const events = await db.collection('events').find().toArray();
        return new Response(JSON.stringify(events),{
            status:200,
            headers:{
                "Content-Type":"application/json"
            }
        })
    }catch(error){
        return new Response(JSON.stringify({error:error}),{
            status:500,
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
}

export async function POST(request:Request) {
     try{
        const data = await request.json();
        const client = await clientPromise;
        const db =  client.db('database1')
        const eventsCollection = db.collection("events");
         const newEvent = {
      title: data.title,
      description: data.description,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      location: data.location,
      image: data.image, 
      createdAt: new Date(),
    };
        const events = await eventsCollection.insertOne(newEvent);
        return NextResponse.json({
            status:200,
            message:'event created successfully',
            result:events.insertedId,
            headers:{
                "Content-Type":"application/json"
            }
        })
    }catch(error){
        return NextResponse.json({
            status:500,
            message:error,
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
}

