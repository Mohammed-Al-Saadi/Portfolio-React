import React from "react";
import { clamp } from "../Utils/utils";

export default function QuantityInput({
  value,
  onChange,
  min = 1,
  max = 10,
  disabled = false,
}) {
  const set = (v) => onChange?.(clamp(v, min, max));
  return (
    <div className="qty-control">
      <button
        type="button"
        className="btn-qty"
        onClick={() => set(value - 1)}
        disabled={value <= min || disabled}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <input
        className="qty-input"
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => set(Number(e.target.value || min))}
        disabled={disabled}
        inputMode="numeric"
        pattern="[0-9]*"
        aria-label="Quantity"
      />
      <button
        type="button"
        className="btn-qty"
        onClick={() => set(value + 1)}
        disabled={value >= max || disabled}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
