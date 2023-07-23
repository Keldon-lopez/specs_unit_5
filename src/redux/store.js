import { configureStore } from "@reduxjs/toolkit"
import potentialCountriesReducer from "./slices/potentialCountriesSlice";
import displayCountryReducer from "./slices/displayCountrySlice";

export default configureStore({
    reducer:{ 
        potentialCountries: potentialCountriesReducer,
        displayCountry: displayCountryReducer,
    },
});