import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/slices";

const CarList = () => {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) =>
      car?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleCarDelete = (carId) => {
    dispatch(removeCar(carId));
  };

  const displayCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car?.id} className={`panel ${bold && "bold"}`}>
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
