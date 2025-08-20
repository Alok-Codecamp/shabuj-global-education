
const deleteEvent = async(id:string)=>{
    try{
        console.log(id)
        const res = await fetch(`/api/events/${id}`,{
        method:"DELETE",
    })

    return await res.json();
    }catch(error){
        return error;
    }
}

export default deleteEvent;