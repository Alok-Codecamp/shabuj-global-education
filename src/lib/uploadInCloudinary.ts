

const photoUploader = async(file:File)=>{
    const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    const formData = new FormData();
    formData.append('file',file);
    formData.append('upload_preset',preset as string);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`,{
        method:"POST",
        body:formData
    })
    if(!res.ok){
        const errorText = await res.text();
        throw new Error(errorText)
    }
    return (await res.json()) as{
        url:string,
    secure_url: string;
    public_id: string;
    width: number;
    height: number;
    format: string;


    }
}

export default photoUploader;