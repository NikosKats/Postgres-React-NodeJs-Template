const { Pool } = require('pg');
const retryInterval = 5000; // Retry every 5 seconds

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // PostgreSQL URL in the correct format
});

const connectWithRetry = () => {
  pool.connect()
    .then(() => {
      console.log('Connected to PostgreSQL!');
    })
    .catch(err => {
      console.error('Error connecting to PostgreSQL', err);
      setTimeout(connectWithRetry, retryInterval); // Retry after a delay
    });
};

connectWithRetry();
