import express from 'express';
import cors from 'cors';
import AppDataSource from './data-source';
import plantRouter from './routes/PlantRoutes';
import categoryRouter from './routes/CategoryRoutes';
import userRouter from './routes/UserRoutes';
AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(
      cors({
        origin: "*", // 'http://localhost:3000'
        methods: ["GET", "POST", "PUT", "DELETE"],
      })
    ); 

    app.use("/api/plants", plantRouter);
    app.use("/api/categories", categoryRouter);
    app.use("/api/users", userRouter);

    app.listen(process.env.PORT, () => {
      console.log(
        `L'api est en route sur l'adresse localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(`Une erreur s'est produite :`, err);
  });