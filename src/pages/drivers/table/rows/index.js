function createData(id, name, document, bound) {
  return {
    id,
    name,
    document,
    bound,
  };
}

export const rowsDrivers = [
  createData(1, 'Fernando', '102.131.115-64', true),
  createData(2, 'Donut', '102.131.115-64', false),
  createData(3, 'Gabriel', '102.131.115-64', true),
  createData(4, 'Gabriel 2', '102.131.115-64', true),
];