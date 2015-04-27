module.exports = (fs, filePath, f) =>
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return console.error('cannot parse configuration:', err);
      process.exit(1);
    }
    f(data);
  });
