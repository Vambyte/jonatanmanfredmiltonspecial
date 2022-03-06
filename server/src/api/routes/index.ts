export {};

module.exports = function (app: any) {
    app.use("/main", require("./main"));
    app.use("/user", require("./user"));
}