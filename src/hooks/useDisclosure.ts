import { useState } from 'react'

export const useDisclosure = (
  initialState = false,
): [
  boolean,
  {
    onOpen: () => void
    onClose: () => void
    onToggle: () => void
  },
] => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)
  const onToggle = () => setIsOpen(!isOpen)
  return [
    isOpen,
    {
      onOpen,
      onClose,
      onToggle,
    },
  ]
}
