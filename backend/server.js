import express from 'express';
import cors from 'cors';
import sequelize from './config/db.js';
import itemRouter from './routes/itemRoute.js';
import userRouter from './routes/userRoute.js';
import deliveryRouter from './routes/deliveryRoute.js';
import cart_itemRouter from './routes/cart_itemRoute.js';
import cartRouter from './routes/cartRoute.js';
import employeeRouter from './routes/employeeRoute.js';
import 'dotenv/config';


// App Config
const app = express();
const port = 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// DB connection with retries (helpful when DB is provisioning on PaaS)
const startServer = async () => {
  const maxRetries = parseInt(process.env.DB_CONNECT_RETRIES || '10', 10);
  const retryDelay = parseInt(process.env.DB_CONNECT_DELAY_MS || '5000', 10);

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await sequelize.authenticate();
      console.log('Connected to the MySQL database!');
      await sequelize.sync({ alter: true }); // Sync all models
      console.log('Database synchronized');
      break;
    } catch (err) {
      const msg = err && err.message ? err.message : err;
      console.error(`DB connect attempt ${attempt} failed:`, msg);
      if (attempt === maxRetries) {
        console.error('Exceeded max DB connection attempts. Exiting.');
        process.exit(1);
      }
      console.log(`Retrying DB connection in ${retryDelay}ms...`);
      await new Promise(res => setTimeout(res, retryDelay));
    }
  }

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};




// API Endpoints
app.use('/api/item', itemRouter);
app.use('/api/user', userRouter);
app.use('/api/delivery', deliveryRouter);
app.use('/api/cart', cartRouter);
app.use('/api/cart_item', cart_itemRouter);
app.use('/api/employee', employeeRouter);
app.use('/images', express.static('uploads'));




app.get("/", (req, res) => {
  res.send("API Working");
});

// Start server after routes are registered and DB is ready
startServer();
