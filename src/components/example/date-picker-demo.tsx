"use client";

import {
  DatePicker,
  DatePickerCalendar,
  DatePickerInput,
  DatePickerLabel,
} from "@/components/ui/date-picker";

const DatePickerDemo = () => (
  <DatePicker selectionMode="range" className="w-64">
    <DatePickerLabel>Date</DatePickerLabel>
    <DatePickerInput placeholder="Select a date" />
    <DatePickerCalendar  />
  </DatePicker>
);

export default DatePickerDemo;
