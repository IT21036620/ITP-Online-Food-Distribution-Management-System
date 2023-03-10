import { Joi } from 'celebrate'

export const addSupplierSchema = {
  business_name: Joi.string().required(),
  cred_id: Joi.string().hex().required(),
  address: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.required(),
  registered_products: Joi.required(),
  rating: Joi.number().default(0),
}

export const viewSupplierSchema = {
  supplier_id: Joi.string().hex().length(24).required(),
}
export const updateSupplierSchema = {
  supplier_id: Joi.string().hex().length(24).required(),
}
export const deleteSupplierSchema = {
  supplier_id: Joi.string().hex().length(24).required(),
}
