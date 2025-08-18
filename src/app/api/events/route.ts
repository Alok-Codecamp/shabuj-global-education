import clientPromise from "@/lib/db"


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