import mongoose from "mongoose"

const ScheduleSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        password: { type: String, required: true },
        birthDate: Date,
        schedulingDate: Date,
        schedulingTime: Date,
        status: 
        {
            type: String,
            enum: ["SERVED","NOT_SERVED"],
            default:"NOT_SERVED"
        },
    },
    {
        timestamps: true
    }
)

const ScheduleModel = mongoose.model("scheduling", ScheduleSchema)

export default ScheduleModel
