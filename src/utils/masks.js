
export const cpfMask = value => {
  if (!value) {
    return value
  }
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const valueMask = (value) => {
  let num = value
  if (!num && num !== 0) {
    return null
  }
  if (typeof num === 'number') {
    num = parseFloat(num).toFixed(2)
  }
  if (typeof num !== 'string') {
    num = String(num)
  }
  const newValue = Number(num.replace(/[^0-9]/g, '') / 100).toFixed(2).split('.')
  newValue[0] = newValue[0].split(/(?=(?:...)*$)/).join('.')
  return `${newValue.join(',')}`
}

export const unMask = (value) => {
  return value.replace(new RegExp(/[^\d]/, 'g'), '')
}
