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
        const { name, email, password, birthDate, schedulingDate } = request.body

        const schedule = await ScheduleModel.create({
            name,
            email,
            password,
            birthDate,
            schedulingDate,
        })
        response.json({ message: "Schedule created!", schedule })
    }

    async update(request, response) {

        const { id } = request.params
        const { name, email, password, birthDate, schedulingDate } = request.body

        const schedule = await ScheduleModel.findByIdAndUpdate(id,
            {
                name,
                email,
                password,
                birthDate,
                schedulingDate,
            },
            {
                new: true,
            })

        return response.json({ message: "Schedule updated!", schedule })
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
}

export default ScheduleController