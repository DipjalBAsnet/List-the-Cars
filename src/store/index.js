import { configureStore } from "@reduxjs/toolkit";
import {
  CarsReducer,
  addCar,
  changeSearchTerm,
  removeCar,
} from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: CarsReducer,
    form: formReducer,
  },
});

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm };
