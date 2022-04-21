import express from "express"
import ScheduleController from "../controller/ScheduleController.js"

const scheduleController = new ScheduleController()
const router = express.Router()

router.get("/api/schedules", scheduleController.index)
router.get("/api/schedules/:id", scheduleController.getOne)
router.post("/api/schedules", scheduleController.store)
router.put("/api/schedules/:id", scheduleController.update)
router.delete("/api/schedules/:id", scheduleController.remove)

router.get("/api/schedules/date/:schedulingDate",scheduleController.getSchedulingDate)
router.get("/api/schedules/date/:schedulingDate/:schedulingTime",scheduleController.getSchedulingTime)

export default router