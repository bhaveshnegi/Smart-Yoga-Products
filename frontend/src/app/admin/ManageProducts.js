import { useState } from "react";

export default function ManageProducts() {
  const [products, setProducts] = useState([
    { id: 1, name: "Smart Yoga Mat", price: 79.99, image: "data:image/jpeg;base64,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" },
    { id: 2, name: "Yoga Block", price: 19.99, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTFycx8K-0t-BS79zRv4-iXkrSqDE-bFqraDS1lJp3sV30PE8-T9zZgpurWDcmvJRmac5QI8EgqSdT3vCYpIZNDbgWu0-nETWpj8Bn4kA3xZDlTgHCD-U3l" },
  ]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", image: null });

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    const newId = products.length + 1;
    setProducts([...products, { ...newProduct, id: newId }]);
    setNewProduct({ name: "", price: "", image: null });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a URL for the uploaded image to display it locally
      const imageUrl = URL.createObjectURL(file);
      setNewProduct({ ...newProduct, image: imageUrl });
    }
  };

  return (
    <div>
      <h3>Manage Products</h3>
      <div>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "1rem" }}
            />
            <div>
              {product.name} - ${product.price}
            </div>
            <button style={{ marginLeft: "1rem" }} onClick={() => deleteProduct(product.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
