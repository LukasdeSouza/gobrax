import { createContext } from "react"
import DriversStore from "../stores/driversStore"
import VehiclesStore from "../stores/vehiclesStore";

class RootStore {
  constructor() {
    this.driversStore = new DriversStore();
    this.vehiclesStore = new VehiclesStore();
  }
}

export {RootStore}

const RootStoreContext = createContext(new RootStore())

export default RootStoreContext