export const calculateTotalPrice = cartData => {
  const total = cartData.reduce((acc, item) => {
    const priceValue = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
    const subtotal = priceValue * item.quantity;
    return acc + subtotal;
  }, 0);

  return total;
};
