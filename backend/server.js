const express = require('express');
const mongoose = require('mongoose');
const multer = require("multer");
const cors = require('cors');
require('dotenv').config();
const productRoutes = require('./routes/productRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// Middleware
app.use(express.json()); // for parsing application/json
app.use(cors()); // Enable CORS for cross-origin requests

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Basic route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        img_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

app.use('/images', express.static('upload/images'));

app.use('/api/products', productRoutes);
app.use('/api/blogs', blogRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
