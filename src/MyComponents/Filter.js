import { useEffect, useState } from 'react';
import FilterButton from './FilterButton';

const Filter = ({ products, setFilteredProducts }) => {
  const [isPriceFilterApplied, setIsPriceFilterApplied] = useState(false);
  const [isPriceLowToHigh, setIsPriceLowToHigh] = useState(false);
  const [isRatingFourAndAbove, setIsRatingFourAndAbove] = useState(false);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products, setFilteredProducts]);

  useEffect(() => {
    const applyFilter = () => {
      let filtered = [...products];
      if (isPriceFilterApplied) {
        filtered = filtered.filter((product) => product.price < 100);
      }
      if (isRatingFourAndAbove) {
        filtered = filtered.filter((product) => product.rating.rate >= 4);
      }
      if (isPriceLowToHigh) {
        filtered.sort((a, b) => a.price - b.price);
      }
      setFilteredProducts(filtered);
    };

    applyFilter();
  }, [isPriceFilterApplied, isPriceLowToHigh, isRatingFourAndAbove, products, setFilteredProducts]);

  return (
    <div>
      <FilterButton
        isPriceFilterApplied={isPriceFilterApplied}
        setIsPriceFilterApplied={setIsPriceFilterApplied}
        isPriceLowToHigh={isPriceLowToHigh}
        setIsPriceLowToHigh={setIsPriceLowToHigh}
        isRatingFourAndAbove={isRatingFourAndAbove}
        setIsRatingFourAndAbove={setIsRatingFourAndAbove}
      />
    </div>
  );
};

export default Filter;
