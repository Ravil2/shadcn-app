import { cn } from '@/lib/utils'
import React from 'react'

interface IProps {
  disabled: boolean
  isRounded: boolean
}

const CustomButton = ({ disabled, isRounded }: IProps) => {
  return (
    <div
      className={cn(
        'text-sm',
        disabled ? 'bg-red-400' : 'bg-black',
        isRounded && 'rounded-full',
      )}
    >
      CustomButton
    </div>
  )
}

export default CustomButton
