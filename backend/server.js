const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const path = require('path');
const blogRoutes = require("./routes/blogRoutes");
const socialRoutes = require("./routes/socialRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({ origin: 'https://smart-yoga-products-one.vercel.app/' }));

app.use('/api/products', productRoutes);

app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.path}`);
  next();
});


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api/blogs", blogRoutes);
app.use("/api/social", socialRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
