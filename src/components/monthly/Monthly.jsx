import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Modal from '../modal/Modal';
import { createTodo, getTodos, updateTodo } from '../../api/todo';
import Button from '../buttons/Button';
import MonthSlider from './MonthlySlider';

function Monthly() {
  const input = "border border-[#ECE4E4] rounded-lg w-full p-[5px] my-[10px] font-mono";
  const btn = "m-auto border border-black py-[5px] px-[10px] rounded-lg text-white font-medium bg-[#5200ff]";
  const todoBox = "border border-[#F5F5F5] rounded-lg p-[10px] mb-[20px] bg-[#F5F5F5] shadow-[rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px]";
  const editBtn = 'border border-black text-black py-[2px] px-[10px] rounded-md font-mono text-[14px] transition-all ease-linear duration-300 hover:bg-[#007BFF] hover:border-[#007BFF] hover:text-white';
  const delBtn = 'border border-black text-black py-[2px] px-[10px] rounded-md font-mono text-[14px] transition-all ease-linear duration-300 hover:bg-[#DC3545] hover:border-[#DC3545] hover:text-white';
  const btnBox = "flex justify-end gap-[10px] text-white pt-[10px] pr-[5px]";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('todo');
  const [due_date, setDue_date] = useState(moment().format('YYYY-MM-DD'));
  const [todos, setTodos] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(moment().startOf('month')); // Текущий месяц по умолчанию
  const [editTodoId, setEditTodoId] = useState(null); // Добавлено для редактирования

  const todo = {
    title,
    description,
    status,
    due_date,
  };

  const closeModal = () => setIsModalOpen(false);

  const openEditModal = (todo) => {
    setEditTodoId(todo.id); // Сохраняем id редактируемой задачи
    setTitle(todo.title);
    setDescription(todo.description);
    setStatus(todo.status);
    setDue_date(todo.due_date);
    setIsModalOpen(true);
  };

  const openModal = () => {
    setTitle('');
    setDescription('');
    setStatus('todo');
    setDue_date(moment().format('YYYY-MM-DD'));
    setEditTodoId(null); // Убедитесь, что для новой задачи id будет null
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editTodoId) {
        // Если editTodoId существует, это значит, что мы редактируем задачу
        const response = await updateTodo(editTodoId, todo);
        setTodos((prevTodos) => prevTodos.map(t => (t.id === editTodoId ? response.data : t)));
      } else {
        // Создаем новую задачу
        const response = await createTodo(todo);
        setTodos((prevTodos) => [...prevTodos, response.data]); // Добавляем новую задачу в конец списка
      }
      
      setTitle('');
      setDescription('');
      setStatus('todo');
      setDue_date(moment().format('YYYY-MM-DD'));
      closeModal();
      await fetchTodos();
    } catch (error) {
      setError(error.message || 'An error occurred');
    }
  };

  const fetchTodos = async () => {
    try {
      const data = await getTodos("monthly");
      if (Array.isArray(data)) {
        const normalizedData = data.map(todo => ({
          ...todo,
          due_date: todo.due_date || moment().format('YYYY-MM-DD') // Устанавливаем текущую дату по умолчанию
        }));
        setTodos(normalizedData);
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []); // Загружаем задачи при изменении выбранного месяца

  const filteredTodos = todos.filter(todo => 
    todo && todo.due_date && moment(todo.due_date).isSame(selectedMonth, 'month') // Проверяем, что todo и todo.due_date существуют
  );

  return (
    <>
      {/* Слайдер для выбора месяца */}
      <div className="w-full borderLines">
        <div className="text-center p-[10px]">
          <MonthSlider
            selectedMonth={selectedMonth}
            onMonthSelect={setSelectedMonth} // Передаём выбранный месяц
          />
        </div>

        {/* Отображение задач для выбранного месяца */}
        <div className="flex justify-between px-[10px] py-[10px]">
          <div className="w-[235px] min-h-[90px] rounded-[10px] borderLines py-[5px] px-[10px]">
            <h4 className="text-[20px] font-medium mb-[10px]">To do</h4>
            {filteredTodos
              .filter(todo => todo.status === 'todo')
              .map((todo) => (
                <div className={todoBox} key={todo.id}>
                  <h4 className='break-words'><span className='font-medium font-sans uppercase'>Title:</span> {todo.title}</h4>
                    <p className='break-words'><span className='font-medium font-sans uppercase'>Description:</span> {todo.description}</p>
                    <div className={btnBox}>
                      <button className={editBtn} onClick={() => openEditModal(todo)}>Edit</button>
                      <button className={delBtn}>Delete</button>
                    </div>
                </div>
              ))}
            <button onClick={openModal} className={btn}>+ Add Task</button>
          </div>
          <div className="w-[235px] min-h-[90px] rounded-[10px] borderLines py-[5px] px-[10px]">
            <h4 className="text-[20px] font-medium mb-[10px]">In process</h4>
            {filteredTodos
              .filter(todo => todo.status === 'in process')
              .map((todo) => (
                <div className={todoBox} key={todo.id}>
                  <h4 className='break-words'><span className='font-medium font-sans uppercase'>Title:</span> {todo.title}</h4>
                    <p className='break-words'><span className='font-medium font-sans uppercase'>Description:</span> {todo.description}</p>
                    <div className={btnBox}>
                      <button className={editBtn} onClick={() => openEditModal(todo)}>Edit</button>
                      <button className={delBtn}>Delete</button>
                    </div>
                </div>
              ))}
          </div>
          <div className="w-[235px] min-h-[90px] rounded-[10px] borderLines py-[5px] px-[10px]">
            <h4 className="text-[20px] font-medium mb-[10px]">Done</h4>
            {filteredTodos
              .filter(todo => todo.status === 'done')
              .map((todo) => (
                <div className={todoBox} key={todo.id}>
                <h4 className='break-words'><span className='font-medium font-sans uppercase'>Title:</span> {todo.title}</h4>
                  <p className='break-words'><span className='font-medium font-sans uppercase'>Description:</span> {todo.description}</p>
                  <div className={btnBox}>
                    <button className={editBtn} onClick={() => openEditModal(todo)}>Edit</button>
                    <button className={delBtn}>Delete</button>
                  </div>
              </div>
              ))}
          </div>
        </div>
      </div>

      {/* Модальное окно для создания новой задачи */}
      <Modal isOpen={isModalOpen}>
        <div className='flex justify-between items-center'>
          <h3>{editTodoId ? "Edit Task" : "Add Task"}</h3>
          <button onClick={closeModal} className="text-xl">x</button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            className={input}
            required
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task description"
            className={input}
            required
          />
          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={input}
          >
            <option value="todo">To do</option>
            <option value="in process">In process</option>
            <option value="done">Done</option>
          </select>
          <label>Due date:</label>
          <input
            type="date"
            value={due_date}
            onChange={(e) => setDue_date(e.target.value)}
            className={input}
          />
          <div className='text-end'>
              <Button type="submit" className={btn}>Save</Button>
            </div>
        </form>
        {error && <p>{error}</p>}
      </Modal>
    </>
  );
}

export default Monthly;