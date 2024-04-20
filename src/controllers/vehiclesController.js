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
      toastError({message: 'Não foi possível carregador os Dados!'})
    }
    this.store.setLoading('list', false)
  }

  async addNewVehicle(newDriver) {
    const stringify = JSON.stringify(newDriver)

    const data = await serviceApi(this.endPoint, 'POST', stringify)
    if (data) {
      toastSuccess({message: 'Veículo Adicionado com Sucesso!'})
      this.getAllVehicles()
    } else {
      toastError({message: 'Erro ao Criar Veículo!'})
    }
  }

  async updateVehicle(driverId, driver) {
    const stringify = JSON.stringify(driver)
    const data = await serviceApi(`${this.endPoint}/${driverId}`, 'PATCH', stringify)

    if(data) {
      toastSuccess({message: 'Veículo Atualizado com Sucesso!'})
      this.getAllVehicles()
    } else {
      toastError({message: 'Erro ao Atualizar Veículo!'})
    }
  }

  async deleteVehicle(driverId) {
    const data = await serviceApi(`${this.endPoint}/${driverId}`, 'DELETE')

    if(data) {
      toastSuccess({message: 'Veículo Deletado com Sucesso!'})
      this.getAllVehicles()
    } else {
      toastError({message: 'Erro ao Deletar Veículo!'})
    }
  }


}

export default VehiclesController