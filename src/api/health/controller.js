async function health(req, res, next) {
    return res.status(200).send("Restaurants API is Online");
}

module.exports = {
  health
};