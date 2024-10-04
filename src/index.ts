import server from './app';
import connectMongo from './db/connector';

async function startServer() {

  await connectMongo();
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

startServer().catch(console.error);
