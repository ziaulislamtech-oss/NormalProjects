const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyStore</h1>
      <div className="flex gap-6">
        <button className="hover:underline">Home</button>
        <button className="hover:underline">Cart (0)</button>
      </div>
    </nav>
  );
};

export default Navbar;