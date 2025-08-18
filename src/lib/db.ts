
import { MongoClient,ServerApiVersion } from "mongodb";

//define from env 
const uri = process.env.DB_URI as string;
console.log(uri);
if(!uri) throw new Error('db uri not found!!')

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

let client: MongoClient;
let clientPromise : Promise<MongoClient>;

if(process.env.NODE_ENV==='development'){
    let globalWithMongo = global as typeof globalThis & {_mongoClientPromise?:Promise<MongoClient>}
    if(!globalWithMongo._mongoClientPromise){
        client = new MongoClient(uri);
        globalWithMongo._mongoClientPromise = client.connect().then(()=>{
            console.log('connection successfull with db')
            return client;
        }).catch((err)=>{
            console.log('connection faild',err)
            throw err;
        });;
    }
    clientPromise = globalWithMongo._mongoClientPromise;
}else{
    client = new MongoClient(uri);
    clientPromise = client.connect().then(()=>{
            console.log('connection successfull with db')
            return client;
        }).catch((err)=>{
            console.log('connection faild',err)
            throw err;
        });
}

export default clientPromise;