import React, { useState } from 'react';
import moment from 'moment';

function WeekSlider() {
  const [currentWeek, setCurrentWeek] = useState(moment().startOf('week')); // Начало текущей недели
  const [selectedDay, setSelectedDay] = useState(null); // Состояние для выбранного дня

  // Функция для смены недели
  const changeWeek = (direction) => {
    const newWeek = moment(currentWeek).add(direction, 'week');
    setCurrentWeek(newWeek);
  };

  // Создание массива дней недели
  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const day = moment(currentWeek).add(i, 'days');
    return {
      label: day.format('dddd'), // Название дня недели
      date: day.format('DD.MM'), // Дата
      isToday: day.isSame(moment(), 'day'), // Проверка: является ли день сегодняшним
      dayMoment: day, // Момент для работы с датой
    };
  });

  // Функция для выбора дня
  const handleSelectDay = (dayMoment) => {
    setSelectedDay(dayMoment);
  };

  return (
    <div className="w-full">
      {/* Слайдер недели */}
      <div className="flex items-center justify-between gap-2">
        {/* Кнопка для перемещения на неделю назад */}
        <button
          onClick={() => changeWeek(-1)}
          className="p-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full shadow-md"
          aria-label="Previous week"
        >
          {'<'}
        </button>

        {/* Кнопки для дней недели */}
        <div className="flex justify-between flex-grow">
          {daysOfWeek.map((day, index) => (
            <button
              key={index}
              className={`flex flex-col items-center justify-center px-[10px] text-cent shadow-md ${
                day.isToday
                  ? 'bg-blue-500 text-white font-semibold' // Активный (сегодняшний) день
                  : selectedDay && selectedDay.isSame(day.dayMoment, 'day')
                  ? 'bg-green-500 text-white font-semibold' // Выбранный день
                  : 'bg-white text-gray-700 border border-gray-200'
              }`}
              onClick={() => handleSelectDay(day.dayMoment)} // Выбор дня
              aria-label={`Select ${day.label}`}
            >
              <p className="text-sm uppercase">
                {day.label} {/* Понедельник → Пн */}
              </p>
              <p className="text-lg font-medium">{day.date}</p>
            </button>
          ))}
        </div>

        {/* Кнопка для перемещения на неделю вперед */}
        <button
          onClick={() => changeWeek(1)}
          className="p-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full shadow-md"
          aria-label="Next week"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
}

export default WeekSlider;
