

import { FormEvent, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../dialog";
import { Input } from "../input";
import { Label } from "../label";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { addTodo } from "@/redux/features/TodoSlice";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./select";
import { useAddTodoMutation } from "@/redux/features/api/api";


const AddTodoModal = () => {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    

     console.log(priority);
  const [addTodo, {data, isLoading, isError, isSuccess}] = useAddTodoMutation();

   console.log({data, isLoading, isSuccess, isError});


    const onSubmit = (e: FormEvent) => {
      e.preventDefault();

      // const randomString = Math.random().toString(36).substring(2, 7);
    
      const taskDetails = {       
        title: task,
        description,
        isCompleted: false,
        priority,
      };
      console.log("from modal", taskDetails)
       addTodo(taskDetails);
    };  

 
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button className="bg-primary-gradient text-xl font-semibold">
        Add todo
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader> 
        <DialogTitle>Add task</DialogTitle>
        <DialogDescription>
          Add your tasks that you want to finish.
        </DialogDescription>
      </DialogHeader>
      <form  onSubmit={onSubmit} >
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Task
            </Label>
            <Input
               onBlur={(e) => setTask(e.target.value)}
              id="task"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center border border-gray-600 gap-4">
            <Label htmlFor="description" className="text-right">
              Description 
            </Label>
            <Input
              onBlur={(e) => setDescription(e.target.value)}
              id="description"
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center border border-gray-600 gap-4">
            <Label  className="text-right">
              Priority</Label>
              <Select onValueChange={(value) => setPriority(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
            
          </div>
        </div>
        <div className="flex justify-end">
          <DialogClose asChild>
            <Button className='text-green-600' type="submit">Save changes</Button>
          </DialogClose>
        </div>
      </form>
    </DialogContent>
  </Dialog>

  
  );
};

export default AddTodoModal;