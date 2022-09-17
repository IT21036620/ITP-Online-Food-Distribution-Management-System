import express from 'express'

import {
  getABatch,
  singleBatchCreate,
  singleBatchDelete,
  singleBatchUpdate,
} from '../controllers/batchController.js'
const batchRouter = express.Router()

batchRouter.get('/', (req, res) => {
  res.json({ msg: 'GET all batches' })
})

batchRouter.get('/:id', getABatch)

batchRouter.post('/', singleBatchCreate)

batchRouter.delete('/:id', singleBatchDelete)
console.log('Route')

batchRouter.patch('/:id', singleBatchUpdate)

export default batchRouter
