import React from 'react'
import { columns, Payment } from './columns'
import { DataTable } from './data-table'

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: '728ed521',
      amount: 134,
      status: 'pending',
      username: 'John Doe',
      email: 'johndoe@gmail.com',
    },
    {
      id: '728ed522',
      amount: 124,
      status: 'success',
      username: 'Jane Doe',
      email: 'janedoe@gmail.com',
    },
    {
      id: '728ed523',
      amount: 167,
      status: 'success',
      username: 'Mike Galloway',
      email: 'mikegalloway@gmail.com',
    },
    {
      id: '728ed524',
      amount: 210,
      status: 'pending',
      username: 'Alice Johnson',
      email: 'alicejohnson@gmail.com',
    },
    {
      id: '728ed525',
      amount: 98,
      status: 'failed',
      username: 'Bob Smith',
      email: 'bobsmith@gmail.com',
    },
    {
      id: '728ed526',
      amount: 150,
      status: 'pending',
      username: 'Charlie Brown',
      email: 'charliebrown@gmail.com',
    },
    {
      id: '728ed527',
      amount: 176,
      status: 'success',
      username: 'Diana Prince',
      email: 'dianaprince@gmail.com',
    },
    {
      id: '728ed528',
      amount: 200,
      status: 'success',
      username: 'Ethan Hunt',
      email: 'ethanhunt@gmail.com',
    },
    {
      id: '728ed529',
      amount: 110,
      status: 'pending',
      username: 'Fiona Gallagher',
      email: 'fionagallagher@gmail.com',
    },
    {
      id: '728ed530',
      amount: 140,
      status: 'success',
      username: 'George Clooney',
      email: 'georgeclooney@gmail.com',
    },
    {
      id: '728ed531',
      amount: 95,
      status: 'success',
      username: 'Hannah Montana',
      email: 'hannahmontana@gmail.com',
    },
    {
      id: '728ed532',
      amount: 187,
      status: 'pending',
      username: 'Ian Somerhalder',
      email: 'iansomerhalder@gmail.com',
    },
    {
      id: '728ed533',
      amount: 132,
      status: 'success',
      username: 'Jack Sparrow',
      email: 'jacksparrow@gmail.com',
    },
    {
      id: '728ed534',
      amount: 145,
      status: 'pending',
      username: 'Karen Page',
      email: 'karenpage@gmail.com',
    },
    {
      id: '728ed535',
      amount: 155,
      status: 'success',
      username: 'Leo Messi',
      email: 'leomessi@gmail.com',
    },
  ]
}

const PaymentPage = async () => {
  const data = await getData()
  return (
    <div>
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}

export default PaymentPage
