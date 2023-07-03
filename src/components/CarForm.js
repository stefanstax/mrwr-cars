import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store/slices";

const CarForm = () => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleChangeName = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleChangeCost = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleChangeName}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleChangeCost}
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
