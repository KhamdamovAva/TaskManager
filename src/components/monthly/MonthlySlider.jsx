import React, { useState } from 'react';
import moment from 'moment';

function MonthlySlider() {
  const [currentYear, setCurrentYear] = useState(moment().startOf('year')); // Начало текущего года
  const [selectedMonth, setSelectedMonth] = useState(null); // Состояние для выбранного месяца

  // Функция для смены полугодия
  const changeHalfYear = (direction) => {
    const newYear = moment(currentYear).add(direction, 'year');
    setCurrentYear(newYear);
  };

  // Получаем месяцы для текущего года
  const monthsInYear = Array.from({ length: 12 }, (_, i) => {
    const month = moment(currentYear).month(i); // Генерация месяцев
    return {
      label: month.format('MMMM'), // Название месяца
      monthMoment: month, // Момент для работы с датой
    };
  });

  // Разделяем на две половины года
  const firstHalfYear = monthsInYear.slice(0, 6);
  const secondHalfYear = monthsInYear.slice(6, 12);

  // Функция для выбора месяца
  const handleSelectMonth = (monthMoment) => {
    setSelectedMonth(monthMoment);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Слайдер года */}
      <div className="flex items-center justify-between gap-2">
        {/* Кнопка для перемещения на год назад */}
        <button
          onClick={() => changeHalfYear(-1)}
          className="p-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full shadow-md"
          aria-label="Previous year"
        >
          {'<'}
        </button>

        {/* Год */}
        <p className="text-xl font-semibold">
          {currentYear.format('YYYY')} {/* Название текущего года */}
        </p>

        {/* Кнопка для перемещения на год вперед */}
        <button
          onClick={() => changeHalfYear(1)}
          className="p-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full shadow-md"
          aria-label="Next year"
        >
          {'>'}
        </button>
      </div>

      {/* Отображаем 1-е полугодие */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {firstHalfYear.map((month, index) => (
          <button
            key={index}
            className={`flex flex-col items-center justify-center p-3 rounded-lg shadow-md ${
              selectedMonth && selectedMonth.isSame(month.monthMoment, 'month')
                ? 'bg-green-500 text-white font-semibold' // Выбранный месяц
                : 'bg-white text-gray-700 border border-gray-200'
            }`}
            onClick={() => handleSelectMonth(month.monthMoment)} // Выбор месяца
            aria-label={`Select ${month.label}`}
          >
            <p className="text-sm uppercase">{month.label}</p>
          </button>
        ))}
      </div>

      {/* Отображаем 2-е полугодие */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {secondHalfYear.map((month, index) => (
          <button
            key={index}
            className={`flex flex-col items-center justify-center p-3 rounded-lg shadow-md ${
              selectedMonth && selectedMonth.isSame(month.monthMoment, 'month')
                ? 'bg-green-500 text-white font-semibold' // Выбранный месяц
                : 'bg-white text-gray-700 border border-gray-200'
            }`}
            onClick={() => handleSelectMonth(month.monthMoment)} // Выбор месяца
            aria-label={`Select ${month.label}`}
          >
            <p className="text-sm uppercase">{month.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default MonthlySlider;
