"use client";

import CalendarIcon from "@/component/DatPicker/CalendarIcon";
import { DatePicker } from "@/component/DatPicker/DatePicker";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function Home() {
  const [selected, setSelected] = useState<Date | DateRange | undefined>();

  const handleDateChange = (value: Date | DateRange | undefined) => {
    setSelected(value);
  };

  return (
    <div>
      <DatePicker
        label='Выбери дату'
        mode='single'
        value={selected}
        onChange={handleDateChange}
        minDate={new Date(2025, 0, 1)}
        maxDate={new Date(2025, 11, 31)}
      />
      <div>
        <DatePicker
          label='Выбери дату'
          mode='range'
          value={selected}
          onChange={handleDateChange}
          minDate={new Date(2025, 0, 1)}
          maxDate={new Date(2025, 11, 31)}
        />
      </div>

  
    </div>
  );
}
