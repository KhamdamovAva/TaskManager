import React, { useState } from 'react';
import moment from 'moment';

function MonthSlider() {
  const [currentYear, setCurrentYear] = useState(moment().startOf('year')); // Начало текущего года
  const [selectedMonth, setSelectedMonth] = useState(null); // Состояние для выбранного месяца

  // Функция для смены года
  const changeYear = (direction) => {
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

  // Разделяем на два ряда по 6 месяцев
  const firstHalfYear = monthsInYear.slice(0, 6);
  const secondHalfYear = monthsInYear.slice(6, 12);

  // Функция для выбора месяца
  const handleSelectMonth = (monthMoment) => {
    setSelectedMonth(monthMoment);
  };

  return (
    <div className="w-full relative">
      {/* Слайдер месяца */}
      <div className="flex justify-between w-full items-center mb-4">
        {/* Кнопка для перемещения на год назад */}
        <button
          onClick={() => changeYear(-1)}
          className="rounded-full absolute p-[5px] text-[25px]"
          aria-label="Previous year"
        >
          {'<'}
        </button>

        {/* Год */}
        <p className="text-xl font-semibold m-auto">
          {currentYear.format('YYYY')}
        </p>

        {/* Кнопка для перемещения на год вперед */}
        <button
          onClick={() => changeYear(1)}
          className="rounded-full absolute p-[5px] text-[25px] right-0"
          aria-label="Next year"
        >
          {'>'}
        </button>
      </div>

      {/* Отображаем месяцы в 2 ряда */}
      <div className="grid grid-cols-6 gap-4 w-full">
        {/* Первый ряд (январь - июнь) */}
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

      {/* Второй ряд (июль - декабрь) */}
      <div className="grid grid-cols-6 gap-4 w-full mt-4">
        {secondHalfYear.map((month, index) => (
          <button
            key={index}
            className={`flex flex-col items-center justify-center p-3 rounded-lg shadow-md ${
              selectedMonth && selectedMonth.isSame(month.monthMoment, 'month')
                ? 'bg-[#5200ff] text-white font-semibold' // Выбранный месяц
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

export default MonthSlider;
