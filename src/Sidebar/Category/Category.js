import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div className="m1">
      <h2 className="sidebar-title">Category</h2>
     
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
    
        </label>
        <Input
          handleChange={handleChange}
          value="mobile"
          title="Mobile"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="camera"
          title="Camera"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="laptop"
          title="Laptop"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="watches"
          title="Watches"
          name="test"
        />
     
    </div>
  );
}

export default Category;