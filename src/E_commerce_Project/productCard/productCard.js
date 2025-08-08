import React from "react";
import Select from "react-select";
import "./productCard.css";
import {
  LuShoppingCart,
  LuBan,
  LuLoader2,
  LuPalette,
  LuRuler,
  LuAlertTriangle,
  LuXCircle,
} from "react-icons/lu";
import {
  clamp,
  deriveQty,
  findSelected,
  formatMoney,
  formatOptionLabel,
  isOptionDisabled,
  priceAdjustments,
  selectMenuProps,
  toOptions,
} from "../Utils/utils";
import QuantityInput from "./QuantityInput";

export default function ProductCard({
  imageUrl,
  name,
  price,
  currency = "EUR",
  sizes = [],
  colors = [],
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
  onAddToCart,
  inStock = true,
  loading = false,
  sizeLabel = "Choose size:",
  colorLabel = "Choose color:",
  quantity: quantityProp = 1,
  onQuantityChange,
  minQuantity = 1,
  maxQuantity = 10,
  locale = "fi-FI",
}) {
  // Options
  const sizeOptions = React.useMemo(() => toOptions(sizes), [sizes]);
  const colorOptions = React.useMemo(() => toOptions(colors), [colors]);

  // Selected options
  const selectedSizeOption = findSelected(sizeOptions, selectedSize);
  const selectedColorOption = findSelected(colorOptions, selectedColor);

  // Pricing
  const { unitPrice } = priceAdjustments(
    price,
    selectedSizeOption,
    selectedColorOption
  );

  // Quantity (controlled/uncontrolled)
  const isControlled = typeof onQuantityChange === "function";
  const derived = deriveQty(
    isControlled,
    quantityProp,
    minQuantity,
    maxQuantity
  );
  const [qtyInternal, setQtyInternal] = React.useState(
    clamp(quantityProp || minQuantity, minQuantity, maxQuantity)
  );
  React.useEffect(() => {
    if (!isControlled) {
      setQtyInternal(
        clamp(quantityProp || minQuantity, minQuantity, maxQuantity)
      );
    }
  }, [isControlled, quantityProp, minQuantity, maxQuantity]);

  const qty = isControlled ? derived : qtyInternal;
  const setQty = (next) => {
    const c = clamp(next, minQuantity, maxQuantity);
    isControlled ? onQuantityChange?.(c) : setQtyInternal(c);
  };

  // Money
  const unitPriceFmt = formatMoney(unitPrice, currency, locale);
  const totalPriceFmt = formatMoney(unitPrice * qty, currency, locale);
  const basePriceFmt = formatMoney(price, currency, locale);

  // State helpers
  const requireSize = sizeOptions.length > 0;
  const requireColor = colorOptions.length > 0;
  const missingSize = requireSize && !selectedSize;
  const missingColor = requireColor && !selectedColor;
  const sizeUnavailable = !!selectedSizeOption?.isDisabled;
  const colorUnavailable = !!selectedColorOption?.isDisabled;

  let priceClass = "";
  if (unitPrice < price) priceClass = "price--discount";
  else if (unitPrice > price) priceClass = "price--increase";

  const canAdd =
    inStock &&
    !loading &&
    !missingSize &&
    !missingColor &&
    !sizeUnavailable &&
    !colorUnavailable &&
    qty >= minQuantity;

  // CTA label + icon
  let ctaLabel = "Add to Cart";
  let ctaIcon = <LuShoppingCart size={18} />;

  if (!inStock) {
    ctaLabel = "Out of Stock";
    ctaIcon = <LuBan />;
  } else if (loading) {
    ctaLabel = "Loading…";
    ctaIcon = <LuLoader2 className="spin" />;
  } else if (missingColor) {
    ctaLabel = "Choose color";
    ctaIcon = <LuPalette />;
  } else if (missingSize) {
    ctaLabel = "Choose size";
    ctaIcon = <LuRuler />;
  } else if (colorUnavailable || sizeUnavailable) {
    ctaLabel = "Option unavailable";
    ctaIcon = <LuAlertTriangle />;
  } else if (qty < minQuantity) {
    ctaLabel = "Invalid quantity";
    ctaIcon = <LuXCircle />;
  }

  const [justAdded, setJustAdded] = React.useState(false);
  const handleAdd = () => {
    if (!canAdd) return;
    onAddToCart?.({ unitPrice, quantity: qty, total: unitPrice * qty });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1000);
  };

  return (
    <article className={`product-card ${!inStock ? "card--oos" : ""}`}>
      <div className="product-image-wrapper">
        <img
          src={imageUrl}
          alt={name}
          className={`product-image ${!inStock ? "img--blur" : ""}`}
          loading="lazy"
        />
        {!inStock && <span className="out-of-stock">Out of Stock</span>}
        {justAdded && <span className="added-to-cart">✓ Added!</span>}
      </div>

      <div className="product-info">
        <h3 className="product-name">{name}</h3>

        <div className="variant-row">
          <div className="variant-select">
            <label className="dropdown-label">{colorLabel}</label>
            <Select
              classNamePrefix="rs"
              options={colorOptions}
              value={selectedColorOption}
              onChange={(opt) => onColorChange?.(opt?.value)}
              placeholder="Select color"
              isDisabled={!inStock || loading}
              isSearchable={false}
              isOptionDisabled={isOptionDisabled}
              formatOptionLabel={formatOptionLabel}
              {...selectMenuProps}
            />
          </div>

          <div className="variant-select">
            <label className="dropdown-label">{sizeLabel}</label>
            <Select
              classNamePrefix="rs"
              options={sizeOptions}
              value={selectedSizeOption}
              onChange={(opt) => onSizeChange?.(opt?.value)}
              placeholder="Select size"
              isDisabled={!inStock || loading}
              isSearchable={false}
              isOptionDisabled={isOptionDisabled}
              formatOptionLabel={formatOptionLabel}
              {...selectMenuProps}
            />
          </div>
        </div>

        <div className="qty-row">
          <label className="qty-label">Quantity</label>
          <QuantityInput
            value={qty}
            onChange={setQty}
            min={minQuantity}
            max={maxQuantity}
            disabled={!inStock || loading}
          />
        </div>

        {(selectedSizeOption?.isDisabled ||
          selectedColorOption?.isDisabled) && (
          <div className="stock-hint">Selected option is unavailable.</div>
        )}

        <p className={`product-price ${priceClass}`} aria-live="polite">
          {totalPriceFmt}
          {qty !== 1 && (
            <span className="product-price--unit">
              {" "}
              ({unitPriceFmt} / item × {qty})
            </span>
          )}
          {unitPrice !== price && (
            <span className="product-price--old">{basePriceFmt}</span>
          )}
        </p>

        <button
          type="button"
          disabled={!canAdd}
          onClick={handleAdd}
          className={`btn btn-gradient btn-block ${!canAdd ? "disabled" : ""}`}
        >
          <span
            className="cta-icon"
            style={{
              marginRight: ".4rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            {ctaIcon}
          </span>
          <span>{ctaLabel}</span>
        </button>
      </div>
    </article>
  );
}
