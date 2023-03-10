import {
  createSchedule,
  getScheduleDrops,
  updateScheduleDrops,
  deleteScheduleDrops,
  getAllScheduleDrops,
} from '../repository/Schedules.js'

//Add schedules
export const addSchedules = async ({
  supplierID,
  supplier_name,
  product,
  quantity,
  price,
  warehouse,
  weekly,
  monthly,
  yearly,
  date,
  dayOfTheWeek,
  dayOfTheMonth,
  // time,
}) => {
  const data = {
    supplierID,
    supplier_name,
    product,
    quantity,
    price: Number(price),
    warehouse,
    weekly: Boolean(weekly),
    monthly: Boolean(monthly),
    yearly: Boolean(yearly),
    date: Date(date),
    dayOfTheWeek,
    dayOfTheMonth: Number(dayOfTheMonth),
    // time: Date(time),
  }
  const x = await createSchedule(data)
  //console.log('Service test', x)
  return x.msg
}

//Get Schedules
export const getSchedulesByID = async (id) => {
  return await getScheduleDrops(id)
}

//Get All Schedules
export const getAllSches = async () => {
  return await getAllScheduleDrops()
}

//Update schedules
export const updateSchedulesByID = async (id, ob) => {
  const y = await updateScheduleDrops(id, ob)
  return y
}

//Delete schedules
export const deleteSchedulesByID = async (id) => {
  return await deleteScheduleDrops(id)
}
