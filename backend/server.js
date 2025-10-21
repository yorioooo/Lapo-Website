const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();

// CORS: Izinkan frontend
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

app.use(express.json());

// Test koneksi DB saat start
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('DB Connection Error:', err.message);
  } else {
    console.log('DB Connected Successfully!');
  }
});

// Route Products – Consume tabel products
app.get('/api/products', async (req, res) => {
  try {
    console.log('Fetching from DB table products...');
    const result = await pool.query('SELECT * FROM products');
    console.log('Consumed from DB:', result.rows.length, 'rows');
    res.json(result.rows);
  } catch (err) {
    console.error('Error consuming products table:', err.message);
    res.status(500).json({ error: 'Gagal consume tabel products: ' + err.message });
  }
});

// Route Articles
app.get('/api/articles', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM articles ORDER BY created_at DESC');
    console.log('Articles fetched:', result.rows.length);
    res.json(result.rows);
  } catch (err) {
    console.error('Articles error:', err.message);
    res.status(500).json({ error: 'Gagal mengambil data artikel: ' + err.message });
  }
});

// Route Contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Data form tidak lengkap' });
    }
    console.log('Contact form received:', { name, email, message });
    res.json({ message: 'Pesan terkirim! Terima kasih, ' + name });
  } catch (err) {
    console.error('Contact error:', err.message);
    res.status(500).json({ error: 'Gagal mengirim pesan: ' + err.message });
  }
});

// Root test
app.get('/', (req, res) => {
  res.json({ message: 'Lapo Batak API is running! Consume from DB ready.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}. Ready to consume DB.`));