import CarForm from "./component/CarForm";
import CarValue from "./component/CarValue";
import CarSearch from "./component/CarSearch";
import CarList from "./component/CarList";

const App = () => {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
};
export default App;
