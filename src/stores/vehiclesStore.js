import { action, makeAutoObservable, observable } from "mobx";

class VehiclesStore {
  state = {
    vehiclesList: [],
    vehicle: {}
  }
  loading = {
    list: false,
    update: false,
    delete: false,
    save: false,
  }

  constructor() {
    makeAutoObservable(this, {
      state: observable,
      setState: action,
    })
  }

  setState(key, value) {
    this.state[key] = value
  }

  setLoading(key, value) {
    this.loading[key] = value
  }
}

export default VehiclesStore