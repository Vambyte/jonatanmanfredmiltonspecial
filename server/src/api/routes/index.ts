export {};

module.exports = function (app: any) {
    app.use("/main", require("./main"));
}