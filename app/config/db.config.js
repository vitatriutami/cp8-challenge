// setup database here, change the values to suit your environment
module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "23456",
  DB: "db_cp8",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
