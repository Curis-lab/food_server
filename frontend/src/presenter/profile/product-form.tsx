import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { foodInput, useAddFoodMutation } from "@/adapter/redux/vendor-slice";


const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description:z.string().min(10,{message:"Description must be at least 10 characters."}),
  category:z.string().min(10,{message:"category must be at least 10 characters."}),
  readyTime:z.string(),
  price:z.string(),
});

export default function ProductForm() {
  const [addFood] = useAddFoodMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description:"",
      category:"",
      readyTime:'',
      price:''
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data:foodInput ={name:values.name, description:values.description, category: values.category, foodType: values.category, price: parseInt(values.price), readyTime: parseInt(values.readyTime)}

    await addFood(data).then((data)=>console.log(data)).catch((err)=>console.log(err));
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex items-center justify-center gap-2">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex items-center justify-center gap-2">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="flex items-center justify-center gap-2">
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="category" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="readyTime"
          render={({ field }) => (
            <FormItem className="flex items-center justify-center gap-2">
              <FormLabel>Time for Ready</FormLabel>
              <FormControl>
                <Input placeholder="Food Ready Time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="flex items-center justify-center gap-2">
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
