import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

let sequelize;

// Support a single DATABASE_URL (common in PaaS) or individual env vars
if (process.env.DATABASE_URL) {
    // Example: mysql://user:pass@host:port/dbname
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'mysql',
        logging: false,
    });
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        logging: false,
    });
}

export default sequelize;
