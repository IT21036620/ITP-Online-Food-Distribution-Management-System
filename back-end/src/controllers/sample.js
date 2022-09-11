import asyncHandler from '../middleware/async.js'
import { add, view } from '../services/sample.js'

export const supplierAdd = asyncHandler(async (req, res) => {
  await add(req.body)

  res.status(200).json({ msg: 'Supplier inserted' })
})

export const supplierGet = asyncHandler(async (req, res) => {
  const ans = await view(req.body)

  res.status(200).json(ans)
})
