// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');

const app = express();
app.use(helmet());
app.use(compression());
const DIST_DIR = './dist';

app.use(express.static(DIST_DIR));

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3002;

app.get('/api/v1/endpoint', (req, res) => {
    res.json({ success: true });
});

app.listen(PORT, () =>
    console.log(
        `Server started: http://${HOST}:${PORT}/`
    )
);
