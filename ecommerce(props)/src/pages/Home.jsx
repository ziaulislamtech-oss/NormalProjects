import ProductCard from "../components/ProductsCard";

const Home = () => {
  const dummyProducts = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Phone",
      price: 20000,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {dummyProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
        
      ))}
    </div>
  );
};

export default Home;