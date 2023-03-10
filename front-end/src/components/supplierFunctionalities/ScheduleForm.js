import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function ScheduleForm() {
  const [supplier_name, setSupplierName] = useState('')
  const [supplierID, setSupplierID] = useState('')
  const [product, setProduct] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [warehouse, setWarehouse] = useState('')
  const [weekly, setWeekly] = useState('true')
  const [monthly, setMonthly] = useState('false')
  const [yearly, setYearly] = useState('false')
  const [date, setDate] = useState('')
  const [dayOfTheWeek, setDayOfTheWeek] = useState('')
  const [dayOfTheMonth, setDayOfTheMonth] = useState('')
  // const [time, setTime] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const resp = {
      supplier_name,
      supplierID,
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
    }
    console.log(resp)
    const response = await fetch('http://localhost:3000/api/schedules/new', {
      method: 'POST',
      body: JSON.stringify(resp),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json()

    if (!response.ok) {
    }
    if (response.ok) {
      setSupplierName('')
      setSupplierID('')
      setProduct('')
      setQuantity('')
      setPrice('')
      setWarehouse('')
      setWeekly('')
      setMonthly('')
      setYearly('')
      setDate('')
      setDayOfTheWeek('')
      setDayOfTheMonth('')
      // setTime('')

      console.log('New schedule drop added', json)
    }
  }

  return (
    <div>
      <body class="bg-gray-100 border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500">
        <form
          class="px-4 my-32 max-w-3xl mx-auto space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <h1 class="text-3xl font-semibold">Schedule Supply Drops</h1>
            <p class="text-gray-600">
              Your Schedule will be automated and will be saved in our database
            </p>
          </div>
          <div>
            <label for="supplierID">Supplier ID </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="supplierID"
              id="supplierID"
              value={supplierID}
              onChange={(e) => setSupplierID(e.target.value)}
              required="required"
              placeholder="Input Supplier ID"
            ></input>
          </div>
          <div>
            <label for="supplier_name">Supplier Name </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="supplier_name"
              id="supplier_name"
              value={supplier_name}
              onChange={(e) => setSupplierName(e.target.value)}
              required="required"
              placeholder="Input Supplier Name"
            ></input>
          </div>
          <div>
            <label for="product">Product </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="product"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              required="required"
              placeholder="Input Product"
            ></input>
          </div>
          <div>
            <label for="quantity">Quantity </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required="required"
              placeholder="Input Quantity"
            ></input>
          </div>
          <div>
            <label for="price">Price </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required="required"
              min={0}
              placeholder="Input Price"
            ></input>
          </div>
          <div>
            <label for="warehouse">Warehouse </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="warehouse"
              id="warehouse"
              value={warehouse}
              onChange={(e) => setWarehouse(e.target.value)}
              required="required"
              placeholder="Input Warehouse Name"
            ></input>
          </div>
          <div>
            <p class="text-sm text-gray-600">
              Choose the time interval of your schedule{' '}
            </p>
            <label for="weekly"> Weekly </label>
            <input
              class=""
              type="radio"
              name="interval"
              id="weekly"
              checked="true"
              value={weekly}
              onChange={(e) => setWeekly(e.target.value)}
            ></input>
            <label for="monthly"> Monthly </label>
            <input
              class=""
              type="radio"
              name="interval"
              id="monthly"
              value={monthly}
              onChange={(e) => setMonthly(e.target.value)}
            ></input>
            <label for="yearly"> Yearly </label>
            <input
              class=""
              type="radio"
              name="interval"
              id="yearly"
              value={yearly}
              onChange={(e) => setYearly(e.target.value)}
            ></input>
          </div>
          <div class="">
            <label for="date">Date </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="date"
              name="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required="required"
              placeholder="Select Date"
            ></input>
          </div>
          <div>
            <label for="dayOfTheWeek">Day of the week </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="dayOfTheWeek"
              id="dayOfTheweek"
              value={dayOfTheWeek}
              onChange={(e) => setDayOfTheWeek(e.target.value)}
              placeholder="Input Day of the Week"
            ></input>
          </div>
          <div>
            <label for="dayOfTheMonth">Day of the month </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="number"
              name="dayOfTheMonth"
              id="dayOfTheMonth"
              value={dayOfTheMonth}
              onChange={(e) => setDayOfTheMonth(e.target.value)}
              min={0}
              max="31"
            ></input>
          </div>
          {/* <div>
            <label for="time">Time </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="time"
              name="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required="required"
              placeholder="Select Time"
            ></input>
          </div> */}
          <div>
            <input
              class="bg-teal-500 rounded text-white"
              type="submit"
              value=" Submit "
              name="submit"
            ></input>
          </div>
          <div>
            <nav>
              <div class="text-blue-600 text-xl">
                <Link to="/Viewschedules">View supply schedules</Link>
              </div>
            </nav>
          </div>
        </form>
      </body>
    </div>
  )
}
