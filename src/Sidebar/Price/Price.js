import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
        </label>

        <Input
          handleChange={handleChange}
          value={100}
          title="$100 - $500"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$150 - $1000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={1000}
          title="$1000 - $5000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={10000}
          title="Over $10000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;