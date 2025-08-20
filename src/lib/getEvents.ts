const getEvents = async()=>{
    // https://shabuj-global-education.vercel.app
    const res = await fetch(`https://shabuj-global-education.vercel.app/api/events`)

    return await res.json();
}

export default getEvents;