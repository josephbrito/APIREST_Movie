import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

export async function connectdb() {
  const Uri = config.get<string>("Uri");

  try {
    await mongoose.connect(Uri);
    Logger.info("Banco de dados rodando perfeitamente");
  } catch (e: any) {
    Logger.error(`Ocorreu um erro na conexão ${e}`);
    process.exit(1);
  }
}
