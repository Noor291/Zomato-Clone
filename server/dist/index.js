"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PORT = 4000;
const zomato = (0, _express.default)();
zomato.use(_express.default.json());
zomato.get('/', (req, res) => {
  res.json({
    message: "Server is running"
  });
});
zomato.listen(PORT, () => {
  console.log("server is running");
});