import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT= process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON bodies

app.use('/api/products', productRoutes);

app.listen(3000, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});
