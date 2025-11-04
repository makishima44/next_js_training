"use client";

import * as React from "react";
import * as Select from "@radix-ui/react-select";
import s from "./select.module.scss";

type Option = {
  value: string;
  label: string;
};

interface SelectBoxProps {
  label?: string;
  options: Option[];
  defaultValue?: string;
  placeholder?: string;
  width?: string;
  disabled?: boolean;
}

export default function SelectBox({ label = "", options, defaultValue, placeholder = "Select-box", width = "210px", disabled }: SelectBoxProps) {
  return (
    <div className={s.wrapper} style={{ width }}>
      {label && <span className={s.label}>{label}</span>}

      <Select.Root defaultValue={defaultValue}>
        <Select.Trigger className={`${s.trigger} ${disabled ? s.disabled : ""}`} aria-label={placeholder} disabled={disabled}>
          <Select.Value placeholder={placeholder} />
          <Select.Icon>
            <span className={s.arrow}>▾</span>
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className={s.content} position='popper'>
            <Select.Viewport className={s.viewport}>
              {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}

const SelectItem = React.forwardRef<HTMLDivElement, { value: string; children: React.ReactNode }>(({ children, ...props }, ref) => (
  <Select.Item ref={ref} {...props} className={s.item}>
    <Select.ItemText>{children}</Select.ItemText>
  </Select.Item>
));
SelectItem.displayName = "SelectItem";
