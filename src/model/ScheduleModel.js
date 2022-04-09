import mongoose from "mongoose"

const ScheduleSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        email: { type: String, required: true },
        password: String,
        birthDate: Date,
        schedulingDate: Date,
    },
    {
        timestamps: true
    }
)

const ScheduleModel = mongoose.model("scheduling", ScheduleSchema)

export default ScheduleModel
