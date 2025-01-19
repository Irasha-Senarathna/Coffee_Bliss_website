/*
import express from 'express';
import mysql from 'mysql2';

const app = express();

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Isenarathne@2001',
  database: 'Coffee_Shop',
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('error connectiong mysql:' , err.message);
  }else{
    console.log('Connected to the database');
  }
});

app.post('/about', (req, res) => {
  res.send('post method');
})

app.get('/user', (req, res) => {
    const query = 'SELECT * FROM user';
    
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data: ' + err.stack);
            res.status(500).send('Error fetching data from the database');
        } else {
            res.json(results); // Send the fetched data as JSON response
        }
    });
});

app.get('/', (req, res) => {
  res.send('Server is ready');
})

app.listen(5330, () => {
  console.log('Server is running on http://localhost:5330');
})
  */
import express from 'express';
import cors from 'cors';
import sequelize from './config/db.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config';


// App Config
const app = express();
const port = 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// DB connection
sequelize.authenticate()
  .then(() => {
    console.log('Connected to the MySQL database!');
    return sequelize.sync({alter: true}); // Sync all models
  })
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Error connecting to the database:', err.message);
});




// API Endpoints
app.use('/api/user', userRouter);
app.use('/images', express.static('uploads'));




app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
