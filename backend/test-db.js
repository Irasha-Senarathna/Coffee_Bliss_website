import sequelize from './config/db.js';

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected');
  } catch (err) {
    console.error('DB_ERROR', err);
    if (err && err.original) console.error('ORIGINAL:', err.original);
    process.exit(1);
  }
})();
