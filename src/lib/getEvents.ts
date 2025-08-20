const getEvents = async()=>{
    const res = await fetch(`https://shabuj-global-education.vercel.app/api/events`)

    return await res.json();
}

export default getEvents;