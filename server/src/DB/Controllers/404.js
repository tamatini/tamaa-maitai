send404 = async (req, res) => {
  try {
    await res.sendStatus(404);
  } catch (err) {
    console.log(err);
  }
};

module.exports = send404;
