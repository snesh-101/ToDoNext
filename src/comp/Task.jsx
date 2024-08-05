import Done from "./Done";
import Del from "./Del";
const Task=()=>{
    return(
        <div className="flex ">
            <input className="bg-lightpurple border-2 mt-4 rounded-lg focus:outline-none focus:border-orange text-yellow-500 w-64 md:w-80 lg:w-[45em]  border-slate-900"></input>
            <Done></Done>
            <Del></Del>
        </div>
    );
};
export default Task