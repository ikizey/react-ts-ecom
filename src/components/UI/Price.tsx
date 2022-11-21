import React from 'react';

type PriceProps = {
  value: number;
  currency?: string;
  className?: string;
};

const Price = ({ currency, value, className }: PriceProps) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency || 'EUR',
    minimumFractionDigits: 2,
  });
  const formattedPrice = formatter.format(value);
  return <span className={className}>{formattedPrice}</span>;
};

export default Price;
