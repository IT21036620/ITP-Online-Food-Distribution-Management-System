const makeResponse = ({ res, status = 200, data, message }) => {
  const responseData = { data, message }
  if (!data) delete responseData.data
  res.status(status).json(responseData)
}

export default makeResponse