"use client"
import React, { useEffect, useState } from 'react'
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
import { toast } from 'sonner'
import { IGetEvent } from '@/types/eventType'
import getEventById from '@/lib/getEventById'
import updateEvent from '@/lib/updateEvent'

interface IParams {
    params:{id:string}  
}

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 10 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  startDate: z.string().min(1,{message:"start date can not be empty"}),
  endDate: z.string().min(1,{message:"end date can not be empty"}),
    
    location: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  
})

// main start here 
const Page = ({params}:IParams) => {
    
    const [events,setEvents] = useState<IGetEvent>()
   
    
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: events?.title,
      description:events?.description,
      startDate:events?.startDate,
      endDate:events?.endDate,
      location:events?.location,


    },
  })
   useEffect(() => {
    const fetchEvents = async () => {
      const id = await params.id;
    const event = await getEventById(id);
    setEvents(event)
        form.reset({
      title: event.title,
      description: event.description,
        startDate: new Date(event.startDate).toISOString().slice(0,16),
  endDate: new Date(event.endDate).toISOString().slice(0,16),
      location: event.location,
      
    });
    };
    fetchEvents();

  }, [form]);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    // const myImage = data.image[0];
    try{
      // const photoString = await photoUploader(myImage);
    const startDateIso = new Date(data.startDate).toISOString()
    const endDateIso = new Date(data.endDate).toISOString()
    const payload = {...data,startDate:startDateIso,endDate:endDateIso};
    const res = await updateEvent(events?._id as string,payload)
    
    if(res){
      setEvents(res)
      toast('Event Updated successfully')
    }
    form.reset();
    }catch(error){
      console.log(error)
      toast('event creatinon faild')
    }
  }

  
  return (
    <div className='mx-20 bg-gray-200 rounded-xl'>
    
<div className='mx-10 text-xl md:text-4xl pt-4'>
    <span className='text-blue-950'>Update</span><span className='text-black'>Event</span>
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
{/* <FormField
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
        /> */}
        </div>
        <Button className='bg-blue-900 text-white w-full' type="submit">
          {
            form.formState.isSubmitting?'Event updating...':'Update Event'
          }
        </Button>
      </form>
    </Form>
 </div>
    </div>
  )
}

export default Page