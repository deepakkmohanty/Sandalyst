export const formatPrice = (price: number) => `Rs. ${new Intl.NumberFormat('en-IN').format(price)}`;
