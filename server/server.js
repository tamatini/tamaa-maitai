const app = require('./app');
const server = require('./src/DB/index');
const PORT = 5000

const listen = app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});

const main = async () => {
  try {
    await server.connect();
    return listen;
  } catch (err) {
    console.log(err);
  }
};

if (require.main === module) {
  return main();
}
