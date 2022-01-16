import { merge } from "lodash";

const env = process.env.NODE_ENV;

const baseConfig = {
  env,
  isDev: env === "development",
  isTest: env === "testing",
  port: process.env.PORT,
  dbUrl: process.env.DB_URL,
  secrets: {
    newsApiKey: process.env.NEWS_API_KEY,
    jwt: process.env.JWT_SECRET,
    jwtExp: "100d",
  },
  defaultPageSize: 20,
  newsApiUrl: "https://newsapi.org/v2/everything",
};

let envConfig = {};

switch (env) {
  case "dev":
  case "development":
    envConfig = require("./dev").config;
    break;
  case "test":
  case "testing":
    envConfig = require("./testing").config;
    break;
  default:
    envConfig = require("./production").config;
}

export default merge(baseConfig, envConfig);
