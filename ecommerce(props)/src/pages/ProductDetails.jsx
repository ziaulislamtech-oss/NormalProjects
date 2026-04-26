const ProductDetail = () => {
  const product = {
    name: "Laptop",
    price: 50000,
    image: "https://via.placeholder.com/400",
    description: "This is a great product.",
  };

  return (
    <div className="p-6 grid md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-xl"
      />

      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-600 mt-2">Rs. {product.price}</p>

        <p className="mt-4">{product.description}</p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;