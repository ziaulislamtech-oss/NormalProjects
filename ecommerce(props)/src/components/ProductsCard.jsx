const ProductCard = ({ product }) => {


    return (
        <div className="border rounded-xl shadow-md p-4 hover:shadow-lg transition">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg"
            />

            <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
            <p className="text-gray-600">Rs. {product.price}</p>

            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;