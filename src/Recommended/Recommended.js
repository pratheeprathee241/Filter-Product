import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Products</h2>
        <div className="recommended-flex d-flex justify-conent-center">
          <Button onClickHandler={handleClick} value="" title="All Products" id="m1" />
          <Button onClickHandler={handleClick} value="Dell" title="Dell" id="m1" />
          <Button onClickHandler={handleClick} value="Samsung" title="Samsung" id="m1" />
          <Button onClickHandler={handleClick} value="Apple" title="Apple" id="m1" />
          <Button onClickHandler={handleClick} value="Sony" title="Sony" id="m1" />
        </div>
      </div>
    </>
  );
};

export default Recommended;