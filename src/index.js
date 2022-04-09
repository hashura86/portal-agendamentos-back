import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import mongoose from "mongoose"
import ScheduleRouter from "./router/ScheduleRouter.js"

dotenv.config()

const { PORT,DATABASE_URL } = process.env

mongoose
    .connect(DATABASE_URL)
    .then(() => {
        console.log("Database connected!");
    })
    .catch((error) => {
        console.error(error.message)
    })


const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.get("/", (request,response) => response.json({message: "schedule!"}))
app.use(ScheduleRouter)

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})