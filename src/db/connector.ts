import mongoose from 'mongoose';

export default async function connectMongo() {
  const mongodbHost = process.env.MONGODB_HOST;
  const mongodbUser = process.env.MONGODB_USER;
  const mongodbPwd = process.env.MONGODB_PWD;
  const mongodbBase = process.env.MONGODB_BASE;

  if (!mongodbHost || !mongodbUser || !mongodbPwd || !mongodbBase)
    throw new Error('DB parameter missing.');

  const mongoUri = `mongodb+srv://${mongodbUser}:${mongodbPwd}@${mongodbHost}/${mongodbBase}`;
  try {
    const db = await mongoose.connect(mongoUri, {});
    console.log('Connected to MongoDB');
    return db;
  } catch (error) {
    console.error('DB Connection error', error);
    process.exit(1);
  }
}
