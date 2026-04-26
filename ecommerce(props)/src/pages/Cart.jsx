import CartItem from "../components/CartItem";

const Cart = () => {
  const dummyCart = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="flex flex-col gap-4">
        {dummyCart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-6 text-right">
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;