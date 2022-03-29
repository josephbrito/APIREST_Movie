const user = process.env.USER;
const pass = process.env.PASSWORD;

export default {
  PORT: 5000,
  Uri: `mongodb+srv://${user}:${pass}@apirests.yxb9p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  env: "development",
};
