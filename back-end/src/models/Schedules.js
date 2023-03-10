import mongoose from 'mongoose'

const schedulesSchema = mongoose.Schema(
  {
    supplierID: {
      type: String,
      required: true,
      unique: true,
    },
    supplier_name: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    warehouse: {
      type: String,
      required: true,
    },
    weekly: {
      type: Boolean,
      required: false,
    },
    monthly: {
      type: Boolean,
      required: false,
    },
    yearly: {
      type: Boolean,
      required: false,
    },
    date: {
      type: Date,
      required: true,
    },
    dayOfTheWeek: {
      type: String,
      required: false,
    },
    dayOfTheMonth: {
      type: Number,
      required: false,
    },
    // time: {
    //   type: Date,
    //   required: true,
    // },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const dropSchedule = mongoose.model('schedules', schedulesSchema)
export default dropSchedule
