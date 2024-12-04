import { useState, useEffect } from "react";
import axios from "axios";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: null,
  });

  // Fetch all products from the backend
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("https://smart-yoga-products-backend.onrender.com/api/products");
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProduct((prevState) => ({
        ...prevState,
        image: file, // File object directly
      }));
    }
  };


  // Add a new product
  const addProduct = async () => {
    const formData = new FormData();
    formData.append('name', newProduct.name);
    formData.append('price', newProduct.price);
    formData.append('description', newProduct.description);
    formData.append('image', newProduct.image); // File object

    try {
      const { data } = await axios.post("https://smart-yoga-products-backend.onrender.com/api/products", formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setProducts([...products, data]);
      setNewProduct({ name: "", price: 0, description: "", image: null });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://smart-yoga-products-backend.onrender.com/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  



  return (
    <div>
      <h1>Manage Products</h1>

      {/* Add Product Form */}
      <div>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          placeholder="Product Price"
        />
        <textarea
          name="description"
          value={newProduct.description}
          onChange={handleChange}
          placeholder="Product Description"
        />
        <input type="file" onChange={handleFileChange} />
        <button onClick={addProduct}>Add Product</button>
      </div>

      {/* Product List */}
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <img
              src={product.image}
              alt={product.name}
              width="100"
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button style={{ marginLeft: "1rem" }} onClick={() => deleteProduct(product._id)}>
  Delete
</button>


          </li>
        ))}
      </ul>
    </div>
  );
}
