import ScheduleRouter from "./router/ScheduleRouter.js"
import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import mongoose from "mongoose"
import cors from "cors"

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
app.use(cors())
app.use(morgan("dev"))
app.use(ScheduleRouter)

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})