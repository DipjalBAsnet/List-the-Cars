import { createSlice, nanoid } from "@reduxjs/toolkit";

const CarsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    list: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // eg:
      // action.payload === {name: 'ab', cost:140  }
      state.list.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      // eg:
      // action.payload === id of the card we want to remove
      const updated = state.list.filter((car) => {
        return car.id !== action.payload;
      });
      state.list = updated;
    },
  },
});
export const { changeSearchTerm, addCar, removeCar } = CarsSlice.actions;
export const CarsReducer = CarsSlice.reducer;
