import React from 'react';

const FilterButton = ({
  isPriceFilterApplied,
  setIsPriceFilterApplied,
  isPriceLowToHigh,
  setIsPriceLowToHigh,
  isRatingFourAndAbove,
  setIsRatingFourAndAbove
}) => {
  const handleToggleFilter = () => {
    setIsPriceFilterApplied(!isPriceFilterApplied);
  };

  const handleTogglePriceLowToHigh = () => {
    setIsPriceLowToHigh(!isPriceLowToHigh);
  };

  const handleToggleRatingFourAndAbove = () => {
    setIsRatingFourAndAbove(!isRatingFourAndAbove);
  };

  const handleRemoveAllFilters = () => {
    setIsPriceFilterApplied(false);
    setIsPriceLowToHigh(false);
    setIsRatingFourAndAbove(false);
  };

  return (
    <div className='filterButton'>
      <div> <h6> Apply filter </h6> </div>
      <button onClick={handleToggleFilter}>
        {isPriceFilterApplied ? 'Under 100₹ ❌' : 'Under 100₹'}
      </button>
      <button onClick={handleTogglePriceLowToHigh}>
        {isPriceLowToHigh ? 'Remove Low to high ❌' : 'Sort by Price Low to High'}
      </button>
      <button onClick={handleToggleRatingFourAndAbove}>
        {isRatingFourAndAbove ? 'Remove Rating Filter❌' : 'Rating 4 and Above'}
      </button>
      {isPriceFilterApplied || isPriceLowToHigh || isRatingFourAndAbove ? (
        <button onClick={handleRemoveAllFilters}>Remove All Filters ❌</button>
      ) : null}
    </div>
  );
};

export default FilterButton;
