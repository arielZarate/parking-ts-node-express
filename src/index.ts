import app from "./app";
import ConnectDB from "./config/db.config";
const port = process.env.PORT || 3000;

app.listen(port, async () => {
  /**
 *   await ConnectDB().then((pool) => {
    pool.getConnection();
    console.log("Connected to the database successfully.");
  });
 * 
 */
  await ConnectDB();
  console.log(`Server running on port ${port}`);
});
