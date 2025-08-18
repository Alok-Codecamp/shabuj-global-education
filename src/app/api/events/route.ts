import clientPromise from "@/lib/db"

export async function GET() {
    try{
        const client = await clientPromise;
        const db =  client.db('database1')
        const events = await db.collection('events').find().toArray();
        return new Response('hello world')
    }catch(error){
        console.log(error)
    }
}