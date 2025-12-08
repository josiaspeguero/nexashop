export const formatMoney = (monto, local = "es-DO") => {
  return new Intl.NumberFormat(local, {
    style: "currency",
    currency: "DOP",
  }).format(monto);
};
