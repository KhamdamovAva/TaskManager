import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function Daily() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'To Do',
    due_date: '',
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Обработчик изменения значений в инпутах, обновлеет измененеия
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  // Обновление изменения даты
  const handleDateChange = (date) => {
    setTask((prevTask) => ({
      ...prevTask,
      due_date: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task added:', task);
    closeModal();
  };

  return (
    <>
      <div className="w-[76%] borderLines">
        <div className="bg-[#5200FF] text-white text-center p-[10px]">
          <p>Today 22.04.2024</p>
        </div>
        <div className="flex justify-between px-[10px] py-[10px]">
          <div>
            <div className="w-[235px] min-h-[90px] rounded-[10px] borderLines py-[5px] px-[10px]">
              <h4 className="text-[20px] font-medium mb-[10px]">To do</h4>
              <button onClick={openModal}>+ add task</button>
            </div>
          </div>
          <div>
            <div className="w-[235px] min-h-[90px] rounded-[10px] borderLines py-[5px] px-[10px]">
              <h4 className="text-[20px] font-medium mb-[10px]">In process</h4>
              <button onClick={openModal}>+ add task</button>
            </div>
          </div>
          <div>
            <div className="w-[235px] min-h-[90px] rounded-[10px] borderLines py-[5px] px-[10px]">
              <h4 className="text-[20px] font-medium mb-[10px]">Done</h4>
              <button onClick={openModal}>+ add task</button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-[20px] rounded-[10px] w-[300px]">
            <h2 className="text-[20px] font-semibold mb-[10px]">Add New Task</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                value={task.title}
                onChange={handleInputChange}
                placeholder="Title"
                className="w-[260px] mb-[10px] p-[10px] border rounded-[5px]"
                required />
              <textarea name="description" value={task.description} onChange={handleInputChange} placeholder="Description"
                className="w-[260px] mb-[10px] p-[10px] border rounded-[5px]" required />
              <select
                name="status"
                value={task.status}
                onChange={handleInputChange}
                className="w-[260px] mb-[10px] p-[10px] border rounded-[5px]">
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
              <DatePicker
                selected={task.due_date ? new Date(task.due_date) : null}
                onChange={handleDateChange}
                className="w-[260px] mb-[10px] p-[10px] border rounded-[5px]"
                dateFormat="yyyy-MM-dd" />
              <div className="flex justify-between mt-[10px]">
                <button type="button" onClick={closeModal} className="bg-red-500 text-white px-[10px] py-[5px] rounded-[5px]">
                  Close
                </button>
                <button type="submit" className="bg-[#5200FF] text-white px-[10px] py-[5px] rounded-[5px]">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Daily;
