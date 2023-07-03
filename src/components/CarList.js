import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/slices";

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => {
    return state.cars.data;
  });

  const handleCarDelete = (carId) => {
    dispatch(removeCar(carId));
  };

  const displayCars = cars.map((car) => {
    return (
      <div key={car?.id} className="panel">
        <p>
          {car?.name || "Name wasn't provided"} - ${car?.cost || "0"}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car?.id)}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {displayCars}
      <hr />
    </div>
  );
};

export default CarList;
