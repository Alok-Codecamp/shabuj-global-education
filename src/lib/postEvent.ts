export interface IEvent{
     title: string;
  description: string;
  startDate: string; 
  endDate: string;   
  location: string;
  image?: string;      
}
const postEvent = async(event:IEvent)=>{
    try{
        const res = await fetch('/api/events',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(event)
    })

    return await res.json();
    }catch(error){
        return error;
    }
}

export default postEvent;