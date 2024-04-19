function createData(id, brand, model, plate, bound) {
  return {
    id,
    brand,
    model,
    plate,
    bound,
  };
}

export const rowsVehicles = [
  createData(1, 'Volvo', 'XC60', 'AXC-4512', true),
  createData(2, 'Scania', 'Y1250', 'AXC-9572', false),
  createData(3, 'Volvo', 'XZ5032', 'AXC-5512', true),
  createData(4, 'Scania 2', 'XC945', 'AXC-1152', true),
];