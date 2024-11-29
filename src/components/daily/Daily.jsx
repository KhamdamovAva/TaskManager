import React, { useEffect, useState } from 'react'; 
import moment from 'moment';
import Modal from '../modal/Modal'; // Убедитесь, что путь правильный
import { createTodo, getTodos, updateTodo } from '../../api/todo'; // Не забудьте импортировать updateTodo
import Button from '../buttons/Button';

function Daily() {
  const input = "border border-[#ECE4E4] rounded-lg w-full p-[5px] my-[10px] font-mono";
  const btn = "m-auto border border-black py-[5px] px-[10px] rounded-lg text-white font-medium bg-[#5200ff]";
  const todoBox = "border border-[#F5F5F5] rounded-lg p-[10px] mb-[20px] bg-[#F5F5F5] shadow-[rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px]";
  const editBtn = 'border border-black text-black py-[2px] px-[10px] rounded-md font-mono text-[14px] transition-all ease-linear duration-300 hover:bg-[#007BFF] hover:border-[#007BFF] hover:text-white';
  const delBtn = 'border border-black text-black py-[2px] px-[10px] rounded-md font-mono text-[14px] transition-all ease-linear duration-300 hover:bg-[#DC3545] hover:border-[#DC3545] hover:text-white';
  const btnBox = "flex justify-end gap-[10px] text-white pt-[10px] pr-[5px]";
  const today = moment().format("DD.MM.YYYY");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('todo');
  const [due_date, setDue_date] = useState(moment().format('YYYY-MM-DD'));
  const [todos, setTodos] = useState([]);
  const [editTodoId, setEditTodoId] = useState(null); // Добавлено для редактирования

  const todo = {
    title,
    description,
    status,
    due_date,
  };

  // Открытие модального окна для добавления новой задачи
  const openModal = () => {
    setTitle('');
    setDescription('');
    setStatus('todo');
    setDue_date(moment().format('YYYY-MM-DD'));
    setEditTodoId(null); // Убедитесь, что для новой задачи id будет null
    setIsModalOpen(true);
  };

  // Открытие модального окна для редактирования задачи
  const openEditModal = (todo) => {
    setEditTodoId(todo.id); // Сохраняем id редактируемой задачи
    setTitle(todo.title);
    setDescription(todo.description);
    setStatus(todo.status);
    setDue_date(todo.due_date);
    setIsModalOpen(true);
  };

  // Закрытие модального окна
  const closeModal = () => setIsModalOpen(false);

  // Обработчик для отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const todoData = {
            title,
            description,
            status,
            due_date,
        };

        if (editTodoId) {
            console.log("Submitting updated data:", todoData); // Логируем данные перед отправкой
            const response = await updateTodo(editTodoId, todoData);
            setTodos((prevTodos) =>
                prevTodos.map((t) => (t.id === editTodoId ? response : t))
            );
        } else {
            const response = await createTodo(todoData);
            setTodos((prevTodos) => [...prevTodos, response]);
        }

        closeModal();
        await fetchTodos();
    } catch (error) {
        console.error("Error in submit handler:", error);
        setError(error.message || "An error occurred");
    }
};

  const fetchTodos = async () => {
    try {
      const data = await getTodos("daily"); // Получаем задачи с сервера
      if (Array.isArray(data)) {
        setTodos(data); // Обновляем состояние с задачами
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos(); // Загружаем задачи при монтировании компонента
  }, []);

  // Фильтруем задачи по статусу
  const todoTasks = Array.isArray(todos) ? todos.filter(todo => todo?.status === 'todo') : [];
  const inProgressTasks = Array.isArray(todos) ? todos.filter(todo => todo?.status === 'in process') : [];
  const doneTasks = Array.isArray(todos) ? todos.filter(todo => todo?.status === 'done') : [];


  return (
    <>
      <div className='w-full borderLines'>
        <div className='bg-[#5200FF] text-white text-center p-[10px]'>
          <p>Today {today}</p>
        </div>
        <div className="flex justify-between px-[10px] py-[10px]">
          {/* To do */}
          <div>
            <div className='w-[235px] min-h-[90px] rounded-[10px] borderLines py-[5px] px-[10px]'>
              <h4 className='text-[20px] font-medium mb-[10px]'>To do</h4>
              {todoTasks.length > 0 ? (
                todoTasks.map((todo) => (
                    <div className={todoBox} key={todo.id}>
                        <h4 className='break-words'><span className='font-medium font-sans uppercase'>Title:</span> {todo.title}</h4>
                        <p className='break-words'><span className='font-medium font-sans uppercase'>Description:</span> {todo.description}</p>
                        <div className={btnBox}>
                          <button className={editBtn} onClick={() => openEditModal(todo)}>Edit</button>
                          <button className={delBtn}>Delete</button>
                        </div>
                    </div>
                ))
                ) : (
                    <p></p>
                )}
              <button onClick={openModal} className={btn}>+ Add Task</button>
            </div>
          </div>

          {/* In process */}
          <div>
            <div className='w-[235px] min-h-[90px] rounded-[10px] borderLines py-[5px] px-[10px]'>
              <h4 className='text-[20px] font-medium mb-[10px]'>In process</h4>
              {inProgressTasks.length > 0 ? (
                inProgressTasks.map((todo) => (
                  <div className={todoBox} key={todo.id}>
                    <h4 className='break-words'><span className='font-medium font-sans uppercase'>Title:</span> {todo.title}</h4>
                    <p className='break-words'><span className='font-medium font-sans uppercase'>Description:</span> {todo.description}</p>
                    <div className={btnBox}>
                      <button className={editBtn} onClick={() => openEditModal(todo)}>Edit</button>
                      <button className={delBtn}>Delete</button>
                    </div>
                  </div>
                ))
                ) : (
                    <p></p>
                )}
            </div>
          </div>

          {/* Done */}
          <div>
            <div className='w-[235px] min-h-[90px] rounded-[10px] borderLines py-[5px] px-[10px]'>
              <h4 className='text-[20px] font-medium mb-[10px]'>Done</h4>
              {doneTasks.length > 0 ? (
                doneTasks.map((todo) => (
                  <div className={todoBox} key={todo.id}>
                    <h4 className='break-words'><span className='font-medium font-sans uppercase'>Title:</span> {todo.title}</h4>
                    <p className='break-words'><span className='font-medium font-sans uppercase'>Description:</span> {todo.description}</p>
                    <div className={btnBox}>
                      <button className={editBtn} onClick={() => openEditModal(todo)}>Edit</button>
                      <button className={delBtn}>Delete</button>
                    </div>
                  </div>
                ))
                ) : (
                    <p></p>
                )}
            </div>
          </div>

        </div>
      </div>

      {/* Модальное окно */}
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

export default Daily;
