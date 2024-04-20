import { validateBr } from "js-brasil"

const validateDocument = (document) => {
  const validateDoc = validateBr.cpfcnpj(document);
  return validateDoc ? validateDoc : 'Documento Inválido!';
}


export { validateDocument }