import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";


let client;

if (!global._mongoClient) {
     client = new MongoClient(process.env.MONGODB_URI);
     global._mongoClient = client.connect();
}

const mongoClient = new MongoClient(process.env.MONGODB_URI);
const db = mongoClient.db();

export const auth = betterAuth({
     baseURL: process.env.BETTER_AUTH_URL,
     secret: process.env.BETTER_AUTH_SECRET,
     
     emailAndPassword: {
          enabled: true,
     },
     socialProviders: {
          google: {
               clientId: process.env.GOOGLE_CLIENT_ID,
               clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          },
     },
     database: mongodbAdapter(db, {
          // Optional: if you don't provide a client, database transactions won't be enabled.
          client: mongoClient
     }),
});