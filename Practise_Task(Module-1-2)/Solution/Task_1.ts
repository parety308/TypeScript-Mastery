
type TCartItem = {
    name: string;
    price: number;
    quantity?: number;
};

const item1: TCartItem = {
    name: "Potato",
    price: 10,
    quantity: 2
};
function calculateTotal(prices: number, quantity: number = 1): number {
    return prices * quantity;
}

const { price, quantity } = item1;
const totalPrice = calculateTotal(price);
console.log(totalPrice)