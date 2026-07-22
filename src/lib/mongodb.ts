import mongoose from "mongoose";

interface MongooseGlobal {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongooseGlobal: MongooseGlobal | undefined;
}

let cached = global.mongooseGlobal || { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) return cached.conn;

  // Checked lazily (inside the function) rather than at module load time so
  // that simply *importing* this file — which Next.js does for every route
  // during the build's "Collecting page data" step — can never crash the
  // build. The error now only surfaces when a request actually tries to
  // touch the database without MONGODB_URI configured.
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false });
  }
  cached.conn = await cached.promise;
  global.mongooseGlobal = cached;
  return cached.conn;
}

export default dbConnect;
