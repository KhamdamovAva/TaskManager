import React, { useState } from 'react';
import moment from 'moment';

function MonthSlider({ selectedMonth, onMonthSelect }) {
  const [currentYear, setCurrentYear] = useState(moment().startOf('year')); // Начало текущего года

  // Смена года
  const changeYear = (direction) => {
    setCurrentYear(moment(currentYear).add(direction, 'year'));
  };

  // Генерация массива месяцев для текущего года
  const monthsInYear = Array.from({ length: 12 }, (_, i) =>
    moment(currentYear).month(i)
  );

  // Обработчик выбора месяца
  const handleSelectMonth = (monthMoment) => {
    if (onMonthSelect) onMonthSelect(monthMoment);
  };

  // Функция для получения стиля кнопки
  const getButtonClass = (monthMoment) =>
    selectedMonth && selectedMonth.isSame(monthMoment, 'month')
      ? 'bg-[#5200ff] text-white font-semibold' // Активный месяц
      : 'bg-white text-gray-700 border border-gray-200';

  return (
    <div className="w-full relative">
      {/* Заголовок с переключением года */}
      <div className="flex justify-between w-full items-center mb-4">
        <button
          onClick={() => changeYear(-1)}
          className="rounded-full absolute p-[5px] text-[25px]"
          aria-label="Previous year"
        >
          {'<'}
        </button>
        <p className="text-xl font-semibold m-auto">{currentYear.format('YYYY')}</p>
        <button
          onClick={() => changeYear(1)}
          className="rounded-full absolute p-[5px] text-[25px] right-0"
          aria-label="Next year"
        >
          {'>'}
        </button>
      </div>

      {/* Сетка месяцев */}
      <div className="grid grid-cols-6 gap-4 w-full">
        {monthsInYear.map((monthMoment, index) => (
          <button
            key={index}
            className={`flex flex-col items-center justify-center p-3 rounded-lg shadow-md ${getButtonClass(
              monthMoment
            )}`}
            onClick={() => handleSelectMonth(monthMoment)}
            aria-label={`Select ${monthMoment.format('MMMM')}`}
          >
            <p className="text-sm uppercase">{monthMoment.format('MMMM')}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default MonthSlider;
