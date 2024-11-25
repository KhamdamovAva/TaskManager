import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css";

function Weekly() {
  // Структура для хранения информации по дням недели
  const [tasks, setTasks] = useState({
    Monday: "Task for Monday",
    Tuesday: "Task for Tuesday",
    Wednesday: "Task for Wednesday",
    Thursday: "Task for Thursday",
    Friday: "Task for Friday",
    Saturday: "Task for Saturday",
    Sunday: "Task for Sunday",
  });

  const [selectedDay, setSelectedDay] = useState('');

  // Обработчик клика по слайду
  const handleDayClick = (day) => {
    setSelectedDay(`${day}: ${tasks[day]}`);
  };

  return (
    <div>



      <div className="w-[76%] borderLines">
        <div className="bg-[#5200FF] text-black text-center p-[10px]">
          <div className="flex justify-between px-[10px] py-[10px]">

          </div>

          <Swiper 
            spaceBetween={10}
            slidesPerView={7}
            onSlideChange={(swiper) => {
              const days = Object.keys(tasks);
              const selected = days[swiper.activeIndex];
              setSelectedDay(`${selected}: ${tasks[selected]}`);
            }}
          >
            {Object.keys(tasks).map((day, index) => (
              <SwiperSlide key={index}>
                <div
                  className="day-block p-4 border rounded-lg cursor-pointer"
                  onClick={() => handleDayClick(day)} // Добавляем обработчик клика
                >
                  <div className="text-center">
                    <h3>{day}</h3>
                    <p>{tasks[day]}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-4 p-4 bg-gray-100 border rounded-lg">
            <h3>Selected Day Info:</h3>
            <p>{selectedDay || "Click on a day to see the task."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weekly;
