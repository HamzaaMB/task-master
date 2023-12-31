// const { createProxyMiddleware } = require('http-proxy-middleware')
import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://localhost:3001",
      changeOrigin: true,
    }),
  );
};
