import mongoose from 'mongoose'
import Supplier from '../models/supplier.js'
//Insert A New Supplier
export const insertSupplier = async (details) => {
  //Check if Supplier business_name Already exists
  const userWithsamename = await Supplier.exists({
    business_name: details.business_name,
  })

  if (userWithsamename) {
    return { msg: 'Suppler Already exist with the same business_name' }
  }

  const supplier = new Supplier({
    business_name: details.business_name,
    cred_id: details.cred_id,
    address: details.address,
    email: details.email,
    phone: details.phone,
    registered_products: details.registered_products,
    rating: details.rating,
  })
  await supplier.save()
  return { msg: 'Supplier Inserted Successfully' }
}

//Get Data Of One Supplier
export const getSupplier = async (id) => {
  //check for valid objectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return { msg: 'No supplier is available with this id' }
  }
  try {
    //Check if Supplier exists
    if ((await Supplier.findById(mongoose.Types.ObjectId(id))) == null) {
      return { msg: 'No supplier is available with this id' }
    }

    return await Supplier.findById(mongoose.Types.ObjectId(id))
  } catch (error) {
    return { msg: 'Search Supplier by id failed' }
  }
}

//Get Data Of All Suppliers
export const getSuppliers = async () => {
  try {
    return await Supplier.find({}).sort({ createdAt: -1 })
  } catch (error) {
    return { msg: 'no suppliers found' }
  }
}

//Update Supplier Data
export const updateSupplierusingId = async (id, ob) => {
  //check for valid objectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return { msg: 'No supplier is available with this id' }
  }
  //Check if Supplier exists
  if ((await Supplier.findById(mongoose.Types.ObjectId(id))) == null) {
    return { msg: 'No supplier is available with this id' }
  }

  try {
    const res = await Supplier.findById(id)
    Object.assign(res, ob)
    await res.save()
    return { msg: 'Supplier updated successfully' }
  } catch (error) {
    return { msg: 'Supplier update failed' }
  }
}

//Delete A Supplier
export const deleteSupplierusingId = async (id) => {
  //check for valid objectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return { msg: 'No supplier is available with this id' }
  }
  //Check if Supplier exists
  if ((await Supplier.findById(mongoose.Types.ObjectId(id))) == null) {
    return { msg: 'No supplier is available with this id' }
  }

  try {
    await Supplier.findByIdAndDelete(id)
    return { msg: 'Supplier deleted successfully' }
  } catch (error) {
    return { msg: 'Supplier deletion failed' }
  }
}
