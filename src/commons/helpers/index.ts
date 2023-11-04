export const setByteValue = (arreglo, fila, columna, indice, nuevoValor) => {
  if (
    fila >= 0 &&
    fila < arreglo.length &&
    columna >= 0 &&
    columna < arreglo[fila].length &&
    indice >= 0 &&
    indice < arreglo[fila][columna].length
  ) {
    arreglo[fila][columna][indice] = nuevoValor;
    return arreglo; // Indica que la modificación se realizó con éxito
  }
  return []; // Indica que los índices están fuera de rango
};

//setByteValue(stringArray, 2, 3, 1, '0');
//setByteValue(stringArray, 2, 3, 1, '1');
