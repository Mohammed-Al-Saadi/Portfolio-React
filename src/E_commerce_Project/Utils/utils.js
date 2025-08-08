// Currency formatting (stable locale everywhere)
export const formatMoney = (amount, currency = "EUR", locale = "fi-FI") =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
// Normalize sizes/colors arrays into objects your Select expects
export const toOptions = (arr) =>
  (arr || []).map((item) =>
    typeof item === "string"
      ? { label: item, value: item, isDisabled: false, priceDiff: 0 }
      : {
          label: item.label,
          value: item.value,
          isDisabled: !!item.disabled,
          priceDiff: item.priceDiff || 0,
        }
  );

// Find selected option by value (or fallback to null)
export const findSelected = (options, value) =>
  options.find((o) => o.value === value) ?? null;
// Compute adjustments and totals
export const priceAdjustments = (base, sizeOpt, colorOpt) => {
  const sizeAdj = sizeOpt?.priceDiff || 0;
  const colorAdj = colorOpt?.priceDiff || 0;
  const unitPrice = base + sizeAdj + colorAdj;
  return { sizeAdj, colorAdj, unitPrice };
};
// Shared react-select config (z-index + disabled styling)
export const selectMenuProps = {
  menuPortalTarget: typeof document !== "undefined" ? document.body : null,
  menuPosition: "fixed",
  styles: {
    menuPortal: (base) => ({ ...base, zIndex: 2000 }),
    menu: (base) => ({ ...base, zIndex: 2000 }),
  },
};

export const isOptionDisabled = (opt) => !!opt.isDisabled;

export const formatOptionLabel = (opt, { context }) =>
  context === "menu" && opt.isDisabled ? (
    <span
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <span>{opt.label}</span>
      <span style={{ opacity: 0.65 }}> (Unavailable)</span>
    </span>
  ) : (
    opt.label
  );
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const deriveQty = (
  controlled,
  quantityProp,
  minQuantity,
  maxQuantity
) =>
  controlled
    ? clamp(quantityProp || minQuantity, minQuantity, maxQuantity)
    : undefined;

// Pure helpers so they're easy to test
export const addItem = (
  prev,
  products,
  { id, size, color, unitPrice, qty }
) => {
  const existing = prev.find(
    (it) => it.id === id && it.size === size && it.color === color
  );
  if (existing) {
    return prev.map((it) =>
      it.id === id && it.size === size && it.color === color
        ? { ...it, qty: it.qty + qty, price: unitPrice }
        : it
    );
  }
  const product = products.find((p) => p.id === id);
  if (!product) return prev;
  return [
    ...prev,
    {
      id,
      name: product.name,
      price: unitPrice,
      currency: product.currency,
      imageUrl: product.imageUrl,
      size,
      color,
      qty,
    },
  ];
};

export const removeItem = (prev, { id, size, color }) =>
  prev.filter(
    (it) => !(it.id === id && it.size === size && it.color === color)
  );

export const bumpQty = (prev, { id, size, color, amount }) =>
  prev.map((it) =>
    it.id === id && it.size === size && it.color === color
      ? { ...it, qty: Math.max(1, it.qty + amount) }
      : it
  );

export const totalItems = (cart) => cart.reduce((sum, it) => sum + it.qty, 0);
