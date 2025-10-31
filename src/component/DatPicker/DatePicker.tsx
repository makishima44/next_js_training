import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";

import "react-day-picker/dist/style.css";
import styles from "./DatePicker.module.scss";

export type DatePickerMode = "single" | "range";

export type Props = {
  mode?: DatePickerMode;
  value?: Date | DateRange;
  onChange?: (value: Date | DateRange | undefined) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  format?: string;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
};

export const DatePicker = ({
  mode = "single",
  value,
  onChange,
  placeholder = "Select date",
  label,
  error,
  disabled = false,
  format: dateFormat = "dd/MM/yyyy",
  minDate,
  maxDate,
  className,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<Date | DateRange | undefined>(value);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const isRange = mode === "range";
  const selected = value ?? internalValue;

  const handleSelect = (val: Date | DateRange | undefined) => {
    if (!val) return;
    setInternalValue(val);
    onChange?.(val);
    if (mode === "single") setOpen(false);
  };

  const displayValue = (() => {
    if (!selected) return "";

    if (isRange) {
      const { from, to } = selected as DateRange;
      if (from && to) return `${format(from, dateFormat)} - ${format(to, dateFormat)}`;
      if (from && !to) return format(from, dateFormat);
      return "";
    }

    if (!isRange && selected instanceof Date) {
      return format(selected, dateFormat);
    }

    return "";
  })();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className={`${styles.wrapper} ${className ?? ""}`}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={`${styles.inputWrapper} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""}`}>
        <input
          readOnly
          disabled={disabled}
          placeholder={placeholder}
          value={displayValue}
          className={styles.input}
          onClick={() => !disabled && setOpen((prev) => !prev)}
        />
        <span className={styles.icon}>📅</span>
      </div>

      {error && <p className={styles.errorText}>{error}</p>}

      {open && !disabled && (
        <div className={styles.calendarWrapper}>
          {isRange ? (
            <DayPicker
              mode='range'
              selected={selected as DateRange | undefined}
              onSelect={handleSelect}
              weekStartsOn={1}
              modifiers={{
                weekend: (date) => {
                  const day = date.getDay();
                  return day === 0 || day === 6;
                },
              }}
              modifiersClassNames={{
                range_start: styles.rangeStart,
                range_end: styles.rangeEnd,
                range_middle: styles.rangeMiddle,
                selected: styles.selected,
                today: styles.today,
                disabled: styles.disabled,
                weekend: styles.weekend,
              }}
            />
          ) : (
            <DayPicker
              mode='single'
              selected={selected as Date | undefined}
              weekStartsOn={1}
              onSelect={(val: Date | undefined) => {
                if (!val) return;
                setInternalValue(val);
                onChange?.(val);
                setOpen(false);
              }}
              modifiers={{
                disabled: [(date) => (minDate ? date < minDate : false), (date) => (maxDate ? date > maxDate : false)],
                weekend: (date) => {
                  const day = date.getDay();
                  return day === 0 || day === 6;
                },
              }}
              modifiersClassNames={{
                weekend: styles.weekend,
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};
