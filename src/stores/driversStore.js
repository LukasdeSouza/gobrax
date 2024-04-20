import { action, makeAutoObservable, observable } from "mobx";

class DriversStore {
  state = {
    driversList: [],
    driver: {}
  }
  loading = {
    list: false,
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

export default DriversStore