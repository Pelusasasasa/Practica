import type { Size } from '@/src/interface'
import clsx from 'clsx'

interface Props {
  selectedSize: Size | undefined
  availableSizes: Size[]

  onSizeChange: (size: Size) => void
}

export const SizeSelector = ({ selectedSize, availableSizes = [], onSizeChange }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas Disponibles</h3>

      <div className="flex ">
        {availableSizes.map(size => (
          <button
            onClick={() => onSizeChange(size)}
            key={size}
            className={clsx('mx-2 hover:underline cursor-pointer', { underline: size === selectedSize })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}
