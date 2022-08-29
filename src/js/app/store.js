import { configureStore } from "@reduxjs/toolkit";
import crewSlice from "../features/crew/crewSlice";
import destinationsSlice from "../features/destinations/destinationsSlice";
import technologySlice from "../features/technology/technologySlice";

export default configureStore({
    reducer: {
        crew: crewSlice,
        destinations: destinationsSlice,
        technology: technologySlice
    }
})