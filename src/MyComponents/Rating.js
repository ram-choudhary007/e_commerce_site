import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rate, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => {
          // This is the function that will be called when the user clicks on the star.
        }} style={style}>
          {rate > i ? (
            <AiFillStar fontSize="15px" color="#FFA41C" />
          ) : (
            <AiOutlineStar fontSize="15px" color="#FFA41C" />
          )}
        </span>
      ))}
    </>
  );
};


export default Rating;