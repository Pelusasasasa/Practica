export const currencyFormat = (value: number) => {
  return new Intl.NumberFormat('es-Es', {
    style: 'currency',
    currency: 'ARS',
  }).format(value)
}
