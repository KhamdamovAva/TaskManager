import React, { useState } from 'react';
import moment from 'moment';

function WeekSlider({ onDaySelect }) {
  const [currentWeek, setCurrentWeek] = useState(moment().startOf('isoWeek')); // Начало недели с понедельника
  const [selectedDay, setSelectedDay] = useState(moment()); // Начальное состояние — текущий день

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
      dayMoment: day, // Объект moment.js для работы с датой
    };
  });

  // Функция для выбора дня
  const handleSelectDay = (dayMoment) => {
    setSelectedDay(dayMoment); // Обновляем локальное состояние
    if (onDaySelect) {
      onDaySelect(dayMoment); // Передаём выбранный день в родительский компонент
    }
  };

  return (
    <div className="w-full relative">
      <div className="flex justify-between w-full">
        {/* Кнопка для перемещения на неделю назад */}
        <button
          onClick={() => changeWeek(-1)}
          className="rounded-full absolute p-[5px] top-[5px] text-[25px]"
          aria-label="Previous week"
        >
          {'<'}
        </button>

        {daysOfWeek.map((day, index) => (
          <button
            key={index}
            className={`flex flex-col items-center justify-center px-[10px] py-[5px] text-center w-full ${
              day.isToday
                ? 'bg-blue-500 text-white font-semibold' // Сегодняшний день
                : selectedDay && selectedDay.isSame(day.dayMoment, 'day')
                ? 'bg-[#5200ff] text-white font-semibold' // Выбранный день
                : 'bg-white text-gray-700 border border-gray-200'
            }`}
            onClick={() => handleSelectDay(day.dayMoment)} // Выбор дня
            aria-label={`Select ${day.label}`}
          >
            <p className="text-sm uppercase">
              {day.label} {/* Например: Понедельник */}
            </p>
            <p className="text-lg font-medium">{day.date}</p>
          </button>
        ))}

        {/* Кнопка для перемещения на неделю вперёд */}
        <button
          onClick={() => changeWeek(1)}
          className="rounded-full absolute p-[5px] top-[5px] left-[757px] text-[25px]"
          aria-label="Next week"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
}

export default WeekSlider;
