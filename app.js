const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('/images', express.static('images'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const imageDir = path.join(__dirname, 'images');
  fs.readdir(imageDir, (err, files) => {
    if (err) return res.status(500).send('Lỗi đọc thư mục ảnh');
    const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    res.render('index', { images });
  });
});

app.listen(PORT, () => {
  console.log(`Server chạy ở http://localhost:${PORT}`);
});
