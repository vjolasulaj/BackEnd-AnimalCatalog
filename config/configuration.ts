export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    connection_string: process.env.DB_CONN_STRING,
  },
});
