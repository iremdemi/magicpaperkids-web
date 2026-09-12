const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Serve static assets from root directory with automatic .html extension resolution
app.use(express.static(path.join(__dirname), {
  extensions: ['html', 'htm']
}));

// Route handler for clean URLs and fallbacks
app.get('*', (req, res, next) => {
  if (req.path === '/' || req.path === '') {
    return res.sendFile(path.join(__dirname, 'index.html'));
  }

  const safePath = path.normalize(req.path).replace(/^(\.\.[\/\\])+/, '');
  const htmlFile = path.join(__dirname, `${safePath}.html`);

  if (fs.existsSync(htmlFile)) {
    return res.sendFile(htmlFile);
  }

  const indexPath = path.join(__dirname, 'index.html');
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }

  next();
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
