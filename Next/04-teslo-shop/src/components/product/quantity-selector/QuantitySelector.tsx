'use client'
import { useState } from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

interface Props {
  quantity: number
}

export const QuantitySelector = ({ quantity = 3 }: Props) => {
  const [counter, setCounter] = useState(quantity)

  const onQunatityChange = (value: number) => {
    if (counter + value < 1) return

    setCounter(counter + value)
  }

  return (
    <div className="flex">
      <button onClick={() => onQunatityChange(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>
      <span className="w-20 mx-3 px-5 bg-gray-100 text-center rounded-lg">{counter}</span>
      <button onClick={() => onQunatityChange(1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  )
}
