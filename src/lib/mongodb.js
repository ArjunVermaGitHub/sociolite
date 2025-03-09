import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

if (!MONGODB_URI || !MONGODB_DB) {
  throw new Error("Please define MONGODB_URI and MONGODB_DB in .env.local");
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDB() {
  if (cachedClient && cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedClient = client;
  cachedDb = client.db(MONGODB_DB);

  return cachedDb;
}
