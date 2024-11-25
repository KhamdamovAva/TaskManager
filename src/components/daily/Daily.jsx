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

  const [tasks, setTasks] = useState({
    "To Do": [],
    "In Progress": [],
    "Done": [],
  });

  // Состояние для отслеживания открытых блоков
  const [openedTaskToDo, setOpenedTaskToDo] = useState(null);
  const [openedTaskInProgress, setOpenedTaskInProgress] = useState(null);
  const [openedTaskDone, setOpenedTaskDone] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Обработчик изменения значений в инпутах
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  // Обновление изменения даты
  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    setTask((prevTask) => ({
      ...prevTask,
      due_date: formattedDate,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prevTasks) => {
      // Добавляем новую задачу в выбранный статус
      const updatedTasks = { ...prevTasks };
      updatedTasks[task.status].push(task);
      return updatedTasks;
    });
    closeModal();
    setTask({ title: '', description: '', status: 'To Do', due_date: '' });  // Сброс значений
  };

  // Функция для обработки клика по задаче
  const handleTaskClick = (status, index) => {
    if (status === "To Do") {
      setOpenedTaskToDo(openedTaskToDo === index ? null : index);
    } else if (status === "In Progress") {
      setOpenedTaskInProgress(openedTaskInProgress === index ? null : index);
    } else if (status === "Done") {
      setOpenedTaskDone(openedTaskDone === index ? null : index);
    }
  };

  return (
    <>
      <div className="w-[76%] borderLines">
        <div className="bg-[#5200FF] text-white text-center p-[10px]">
          <p>Today 22.04.2024</p>
        </div>
        <div className="flex justify-between px-[10px] py-[10px]">
          {["To Do", "In Progress", "Done"].map((status) => (
            <div key={status}>
              <div className="w-[235px] min-h-[90px] rounded-[10px] borderLines py-[5px] px-[10px]">
                <h4 className="text-[20px] font-medium mb-[10px]">{status}</h4>
                {tasks[status].map((task, index) => (
                  <div
                    className={`bg-[#5200FF] text-white rounded-[5px] p-[5px] mt-[5px] ${status === "To Do" ? "cursor-pointer" : ""}`}
                    key={index}
                    onClick={status === "To Do" || status === "In Progress" || status === "Done" ? () => handleTaskClick(status, index) : undefined}
                  >
                    <p>{task.title}</p>
                    {status === "To Do" && openedTaskToDo === index && (
                      <div>
                        <p>{task.description}</p>
                        <p>{task.due_date ? task.due_date : 'No due date'}</p>
                      </div>
                    )}
                    {status === "In Progress" && openedTaskInProgress === index && (
                      <div>
                        <p>{task.description}</p>
                        <p>{task.due_date ? task.due_date : 'No due date'}</p>
                      </div>
                    )}
                    {status === "Done" && openedTaskDone === index && (
                      <div>
                        <p>{task.description}</p>
                        <p>{task.due_date ? task.due_date : 'No due date'}</p>
                      </div>
                    )}
                    {status !== "To Do" && openedTaskToDo !== index && status !== "In Progress" && openedTaskInProgress !== index && status !== "Done" && openedTaskDone !== index && (
                      <div>
                        <p>{task.description}</p>
                        <p>{task.due_date ? task.due_date : 'No due date'}</p>
                      </div>
                    )}
                  </div>
                ))}
                <button onClick={openModal}>+ add task</button>
              </div>
            </div>
          ))}
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
                required
                className="w-[260px] mb-[10px] p-[10px] border rounded-[5px]"
                dateFormat="yyyy-MM-dd" placeholderText='Date' />
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
