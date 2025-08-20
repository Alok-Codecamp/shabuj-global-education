import { IEvent } from "./postEvent";

const updateEvent = async(id:string,event:IEvent)=>{
    try{
        console.log(id)
        const res = await fetch(`/api/events/${id}`,{
        method:"PUT",
        body:JSON.stringify(event)
    })

    return await res.json();
    }catch(error){
        return error;
    }
}

export default updateEvent;