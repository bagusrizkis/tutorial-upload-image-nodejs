function check(_, res) {
    res.status(200).json({
        status: "Server Running",
        date: new Date(),
        env: process.env.NODE_ENV || "development",
    });
}

module.exports = {
    check,
};
