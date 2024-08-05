import Task from "./Task";
import Add from "./Add";
const Todobox=()=>{
 return(

    <>
    <div className="bg-red border-t-4 border-l-4 border-black flex justify-center  w-96 md:w-[450px] lg:w-[55em] h-4/5 rounded-lg shadow-lg shadow-black ">
        <div className="flex flex-col items-center ">
        <h1 className="text-slate-900 text-2xl mb-5 h-7 w-32 md:w-40 lg:w-64 md:h-10 lg:h-12 md:text-3xl lg:text-5xl font-semibold mt-2 bg-orange shadow-md  shadow-black rounded-lg font-serif">ToDoNext</h1>
       
        <Task></Task> 
        <Task></Task>
        <Task></Task>
        <Add></Add>

      </div>
        
  

    </div>
    </>


 );
};
export default Todobox