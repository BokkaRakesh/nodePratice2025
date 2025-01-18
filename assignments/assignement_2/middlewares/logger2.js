module.exports = (req, res, next) => {
    console.log(`[Logger2]: Request received - ${req.method} ${req.url}`);
    next(); // Allows the request to continue to the next middleware in line
}