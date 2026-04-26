const CartItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between border p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div>
          <h2 className="font-semibold">{item.name}</h2>
          <p className="text-gray-600">Rs. {item.price}</p>
        </div>
      </div>

      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
        Remove
      </button>
    </div>
  );
};

export default CartItem;