"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import {  z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import photoUploader from '@/lib/uploadInCloudinary'
import postEvent from '@/lib/postEvent'


const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 10 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  startDate: z.string()
  .refine((val)=>{
    const startTime = new Date(val);
    const presentTime = new Date();
    return startTime>=presentTime;
  }, {
      message: "Event date must be today or in the future",
    }),
  endDate: z.string()
  .refine((val)=>{ 
    const endTime = new Date(val);
    const presentTime = new Date();
    return endTime>presentTime;
  }, {
      message: "Event end date must be tomorrow or in the future",
    }),
    
    location: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  image:z.any().refine(files => files.length>0,{message:'image is required!'})
})
const page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description:"",
      startDate:"",
      endDate:"",
      location:"",
      image:undefined

    },
  })
  async function onSubmit(data: z.infer<typeof formSchema>) {
    const myImage = data.image[0];
    const photoString = await photoUploader(myImage);
    
    const payload = {...data,image:photoString.url};
    const res = await postEvent(payload)
    console.log(res);
  }

  
  return (
    <div className='mx-20 bg-gray-200 rounded-xl'>
    
<div className='mx-10 text-4xl pt-4'>
    <span className='text-blue-950'>Create</span><span className='text-black'>Event</span>
</div>
 <div className='p-10'>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* title and description  */}
       <div className='flex flex-col md:flex-row justify-between items-center'>
 <FormField 
          
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                className='border-2 border-gray-900 md:min-w-xs lg:min-w-sm'
                 placeholder="Event title" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input 
                className='border-2 border-gray-900 md:min-w-xs lg:min-w-sm'
                placeholder="Event description" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
       </div>
       {/* start date and end date field  */}
      <div className='flex flex-col md:flex-row justify-between items-center'>
          <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Date</FormLabel>
              <FormControl>
                <Input 
                className='border-2 border-gray-900 md:min-w-xs lg:min-w-sm'

                type="datetime-local" placeholder="Start Date" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>End Date</FormLabel>
              <FormControl>
                <Input 
                className='border-2 border-gray-900 md:min-w-xs lg:min-w-sm'
                type="datetime-local" placeholder="Start Date" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      {/* location and image field  */}
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input 
                className='border-2 border-gray-900 md:min-w-xs lg:min-w-sm'
                placeholder="Address" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
<FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Photo</FormLabel>
              <FormControl>
                <Input 
                type='file'
                className='border-2 border-gray-900 md:min-w-xs lg:min-w-sm'
                placeholder="Photo" 
                 
          accept="image/*"
          onChange={(e) => field.onChange(e.target.files)} 
                />
                
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <Button className='bg-blue-900 text-white w-full' type="submit">
          {
            form.formState.isSubmitting?'Event creating...':'Create Event'
          }
        </Button>
      </form>
    </Form>
 </div>
    </div>
  )
}

export default page