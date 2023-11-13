import express from 'express';
import router from './routes/index.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("Tá Pegando!");
  });

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => console.log('listening on port ' + PORT));