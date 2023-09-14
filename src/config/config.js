require("dotenv").config();

const config = {
  port: process.env.PORT || 8000,
  dbUser: process.env.DB_USER || "postgres",
  dbPassword: process.env.DB_PASSWORD || "admin",
  dbHost: process.env.DB_HOST || "localhost",
  dbName: process.env.DB_NAME || "verodb",
  dbPort: process.env.DB_PORT || 5432,
};

module.exports = { config };
