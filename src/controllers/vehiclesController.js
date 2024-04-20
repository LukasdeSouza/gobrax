import { toastError, toastSuccess } from "../components/toast/toastAlert"
import { serviceApi } from "../service"

class VehiclesController {
  
  constructor(store, endPoint) {
    this.store = store
    this.endPoint = endPoint
  }

  async getAllVehicles() {
    this.store.setLoading('list', true)
    const data = await serviceApi(this.endPoint, 'GET')

    if(data) {
      this.store.setState('vehiclesList', data)
    } else {
      alert('Não foi possível carregador os Dados!')
    }
    this.store.setLoading('list', false)
  }

  async addNewVehicle(newDriver) {
    this.store.setLoading('save', true)
    const stringify = JSON.stringify(newDriver)

    const data = await serviceApi(this.endPoint, 'POST', stringify)
    if (data) {
      toastSuccess({message: 'Veículo Adicionado com Sucesso!'})
      this.getAllDrivers()
    } else {
      toastError({message: 'Erro ao Criar Veículo!'})
    }
    this.store.setLoading('save', false)
  }

  async updateVehicle(driverId, driver) {
    this.store.setLoading('update', true)
    const stringify = JSON.stringify(driver)
    const data = await serviceApi(`${this.endPoint}/${driverId}`, 'PATCH', stringify)

    if(data) {
      toastSuccess({message: 'Veículo Atualizado com Sucesso!'})
      this.getAllDrivers()
    } else {
      toastError({message: 'Erro ao Atualizar Veículo!'})
    }
    this.store.setLoading('update', false)
  }

  async deleteVehicle(driverId) {
    this.store.setLoading('delete', true)
    const data = await serviceApi(`${this.endPoint}/${driverId}`, 'DELETE')

    if(data) {
      toastSuccess({message: 'Veículo Deletado com Sucesso!'})
      this.getAllDrivers()
    } else {
      toastError({message: 'Erro ao Deletar Veículo!'})
    }
    this.store.setLoading('delete', false)
  }


}

export default VehiclesController