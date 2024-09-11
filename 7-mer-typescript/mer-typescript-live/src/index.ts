import express from 'express';
import connect from './connect';
import bookRoutes from './routes/bookRoutes';

const app = express();
app.use(express.json());
const port = 3000;

connect();

app.use("/", bookRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// 1. @types/express @types/mongoose nodemon tsx typescript dependencies express
// mongoose
// 2. Create the files index.ts that starts the app, connect.ts that connects to
// database and call it in index.ts
// 3. Create folders controllers, models, routes
// 4. Add bookController.ts , bookModels.ts and bookRoutes.ts
// 5. Create an interface Book with some properties and use it to define the schema in
// bookModels.ts
// 6. Add schema, database access and routes

