import { serviceApi } from "../service"

class DriversController {
  
  constructor(store, endPoint) {
    this.store = store
    this.endPoint = endPoint
  }

  async getAllDrivers() {
    this.store.setLoading('list', true)
    const data = await serviceApi(this.endPoint, 'GET')

    if(data) {
      this.store.setState('driversList', data)
    } else {
      alert('Não foi possível carregador os Dados!')
    }
    this.store.setLoading('list', false)
  }

  async addNewDriver(newDriver) {
    this.store.setLoading('save', true)
    const stringify = JSON.stringify(newDriver)

    const data = await serviceApi(this.endPoint, 'POST', stringify)
    if (data) {
      alert('Motorista Adicionado com Sucesso!')
      this.getAllDrivers()
    } else {
      alert('Erro ao Criar Motorista!')
    }
    this.store.setLoading('save', false)
  }

  async updateDriver(driverId, driver) {
    this.store.setLoading('update', true)
    const stringify = JSON.stringify(driver)
    const data = await serviceApi(`${this.endPoint}/${driverId}`, 'PATCH', stringify)

    if(data) {
      alert('Motorista Atualizado com Sucesso!')
      this.getAllDrivers()
    } else {
      alert('Erro ao Atualizar Motorista!')
    }
    this.store.setLoading('update', false)
  }

  async deleteDriver(driverId) {
    this.store.setLoading('delete', true)
    const data = await serviceApi(`${this.endPoint}/${driverId}`, 'DELETE')

    if(data) {
      alert('Motorista Deletado com Sucesso!')
      this.getAllDrivers()
    } else {
      alert('Erro ao Deletar Motorista!')
    }
    this.store.setLoading('delete', false)
  }


}

export default DriversController