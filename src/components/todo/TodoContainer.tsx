

import { useAppSelector } from "@/redux/hooks";
import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";



const TodoContainer = () => {
 
  const {todos} = useAppSelector((state) => state.todos)
// const [todos, setTodos] = useState({ data: [] });



    return (
        <div>
               <div className="flex justify-between mb-5 ">
            <Button  className="bg-primary-gradient rounded-md " > <AddTodoModal></AddTodoModal> </Button  >

            <Button  className="bg-primary-gradient rounded-full p-3" >  <TodoFilter></TodoFilter> </Button>         
             </div>
             
            <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">

             <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">

            

           {todos.map((item) =>(
            <TodoCard {...item} ></TodoCard>
           ))} 
            
               

               </div>
       
               
            
        </div>
        </div>
    );
};

export default TodoContainer;