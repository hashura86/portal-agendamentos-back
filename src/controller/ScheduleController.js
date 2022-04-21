import ScheduleModel from "../model/ScheduleModel.js"
class ScheduleController {

    async getOne(request, response) {
        const { id } = request.params

        try {
            const schedule = await ScheduleModel.findById(id)

            if (schedule) {
                return response.json(schedule)
            }
            response.json({ message: "Schedule not found!" })
        } catch (error) {
            response.status(400).json({ message: "Unexpected error!" })
        }
    }

    async index(request, response) {
        const schedule = await ScheduleModel.find()
        response.json({ items: schedule })
    }

    async store(request, response) {
        const { name, password, birthDate, schedulingDate, schedulingTime, status } = request.body
        
        try {
            const schedule = await ScheduleModel.create({
                name,
                password,
                birthDate,
                schedulingDate,
                schedulingTime,
                status,
            })
            response.json({ message: "Schedule created!", schedule })
        } catch (error) {
            response.status(400).json({ message: error.message })
        }
    }

    async update(request, response) {

        const { id } = request.params
        const { name, password, birthDate, schedulingDate, schedulingTime, status } = request.body

        try {

            const schedule = await ScheduleModel.findByIdAndUpdate(id,
                {
                    name,
                    password,
                    birthDate,
                    schedulingDate,
                    schedulingTime,
                    status,
                },
                {
                    new: true,
                })

            return response.json({ message: "Schedule updated!", schedule })

        } catch (error) {
            response.status(400).json({ message: error.message })
        }
    }

    async remove(request, response) {
        const { id } = request.params

        const schedule = await ScheduleModel.findById(id)

        if (schedule) {
            await schedule.remove()
            return response.json({ message: "Schedule deleted!" })
        }
        response.status(404).json({ message: "Schedule not found!" })

    }

    async getSchedulingDate(request, response) {
        const { schedulingDate } = request.params

        const countDate = await ScheduleModel.find({ schedulingDate: schedulingDate }).count()
        
        response.json({ item: countDate })
    }

    async getSchedulingTime(request, response) {
        const { schedulingDate, schedulingTime } = request.params

        const countTime = await ScheduleModel.find(
            {
                schedulingDate: schedulingDate,
                schedulingTime: schedulingTime,
            }
        ).count()

        response.json({ item: countTime })
    }


}

export default ScheduleController