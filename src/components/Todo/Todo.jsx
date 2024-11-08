import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo("");
      setIsModalOpen(false);
    }
  };

  return (
    <div className='flex mx-auto space-x-5'>
      <div className='border border-[#5200FF] rounded-[16px] w-[250px] min-h-[100px] py-[5px] px-[10px]'>
        <div className="flex items-center justify-between">
            <h3 className="text-[22px]">To do</h3>
            <span>&times;</span>
        </div>
        <div className="mt-[10px]">
          {todos.map((task, index) => (
            <input
              type="text"
              key={index}
              placeholder={task}
              readOnly
              className="border border-[#5200FF] py-[2px] px-[5px] rounded-[4px] w-full mt-[5px]"
            />
          ))}
        </div>
        <button onClick={() => setIsModalOpen(true)} className="mt-[10px]">+ add task</button>
      </div>

      {isModalOpen && (
        <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-white p-5 rounded-[16px] w-[300px] shadow-lg z-50">
          <h3 className="text-[22px] mb-4">Add a Task</h3>
          <input
            type="text"
            placeholder="Enter a task"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="border border-[#5200FF] text-[#000] py-[2px] px-[5px] rounded-[4px] w-full"
          />
          <div className="flex justify-end space-x-3 mt-4">
            <button onClick={() => setIsModalOpen(false)} className="text-gray-500">Cancel</button>
            <button onClick={addTask} className="text-white bg-[#5200FF] py-[5px] px-[10px] rounded-[4px]">Add</button>
          </div>
        </div>
      )}

      <div className='border border-[#5200FF] rounded-[16px] w-[250px] min-h-[100px] py-[5px] px-[10px]'>
        <h3 className="text-[22px]">In process</h3>
      </div>
      <div className='border border-[#5200FF] rounded-[16px] w-[250px] min-h-[100px] py-[5px] px-[10px]'>
        <h3 className="text-[22px]">Done</h3>
      </div>
    </div>
  );
}

export default Todo;
