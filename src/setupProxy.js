// // Note:
// //Imports from other files are no needed.
// //This file is automatically registered when dev server starts.
// //Only suporst Node's JS syntax. No ES modules, Flow, etc...
// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: "http://172.31.7.42:8085/",
//       // target: "http://localhost:3000/",
//       changeOrigin: true,
//     })
//   );
// };

// // Info:  So, in simple terms, this code sets up a proxy middleware
// // for our application. Whenever our application receives a request
// // that starts with '/api', it forwards that request to another server
// // located at 'http://172.31.7.42:8085/'. This is useful when we want to
// // hide the backend server's details from the client or when we're
// // developing locally and need to communicate with a backend server
// // running on a different port.
// This line goes inside the dependencies package json
// //"proxy": "http://172.31.7.clear42:8085",

//TODO uncomment and add the proxy into the package.json
