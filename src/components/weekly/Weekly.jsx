import React, { useState } from 'react';
import moment from 'moment';
import Modal from '../modal/Modal';
import { createTodo } from '../../api/todo';
import Button from '../buttons/Button';
import WeekSlider from './WeeklySlider';

function Weekly() {
  const input = "border border-[#ECE4E4] rounded-lg w-full p-[5px] my-[10px] font-mono";
  const btn = "m-auto border border-black py-[5px] px-[10px] rounded-lg text-white font-medium bg-[#5200ff]";


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('todo');
  const [due_date, setDue_date] = useState(moment().format('YYYY-MM-DD'));

  const todo = {
    title,
    description,
    status,
    due_date,
  };

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createTodo(todo);
      console.log(response);
      setTitle('');
      setDescription('');
      setStatus('todo');
      setDue_date(moment().format('YYYY-MM-DD'));
      closeModal();
    } catch (error) {
      setError(error.message || 'An error occurred');
    }
  };


  return (
    <>
      {/* Week Navigation */}
      <div className='w-full borderLines'>
        <div className='borderLines text-center'>
          <WeekSlider />
        </div>
        <div className='flex justify-between px-[10px] py-[10px]'>
          <div>
            <div className='w-[235px] min-h-[90px] rounded-[10px] borderLines py-[5px] px-[10px]'>
              <h4 className='text-[20px] font-medium mb-[10px]'>To do</h4>
              <button onClick={openModal} className={btn}>+ add task</button>
            </div>
          </div>
          <div>
            <div className='w-[235px] min-h-[90px] rounded-[10px] borderLines py-[5px] px-[10px]'>
              <h4 className='text-[20px] font-medium mb-[10px]'>In process</h4>
            </div>
          </div>
          <div>
            <div className='w-[235px] min-h-[90px] rounded-[10px] borderLines py-[5px] px-[10px]'>
              <h4 className='text-[20px] font-medium mb-[10px]'>Done</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Creating Todo */}
      <Modal isOpen={isModalOpen}>
        <div className='flex justify-between items-center'>
          <h3>Add Task</h3>
          <button onClick={closeModal} className='w-[10%]'>×</button>
        </div>
        <form className='mt-[20px]' onSubmit={handleSubmit}>
          <input type="text" placeholder='Title' className={input} value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea placeholder='Description' className={`${input} resize-none`} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <label className='font-mono mb-[10px]' htmlFor="status">Status:</label><br />
          <select className={input} name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="todo">Todo</option>
            <option value="in process">In process</option>
            <option value="done">Done</option>
          </select>
          <input type="date" className={input} value={due_date} onChange={(e) => setDue_date(e.target.value)} />
          <div className='text-end pt-[40px]'>
            <Button className={btn} type='submit'>Submit</Button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default Weekly;
