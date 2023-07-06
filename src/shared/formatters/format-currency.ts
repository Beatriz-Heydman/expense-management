export function formatCurrency(numberValue: number) {
  return numberValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
