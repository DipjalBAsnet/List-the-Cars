import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ cars: { list, searchTerm } }) => {
    const filteredcars = list.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    let cost = 0;
    for (let car of filteredcars) {
      cost += car.cost;
    }
    return cost;
  });
  return <div className="car-value">Total Cost: ${totalCost}</div>;
};
export default CarValue;
