export default function formatCurrency(amount) {
  // Formatear el número con separadores de 
  const parsedAmount = parseFloat(amount);
  let formattedAmount = parsedAmount?.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
      // minimumFractionDigits: 0,
      // maximumFractionDigits: 0
  });
  
  return formattedAmount ?? '0';
}