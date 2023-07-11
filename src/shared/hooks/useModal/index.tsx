import { useState } from 'react'
import { createPortal } from 'react-dom'
import { ModalCommonProps } from 'shared/types'

type ReturnType<P> = [
  React.ReactNode,
  (dataProps: Omit<P, keyof ModalCommonProps>) => void,
  () => void,
]

interface ConfigProps {
  onClose?: ModalCommonProps['onClose']
}

export const useModal = <P extends ModalCommonProps>(
  ModalComponent: React.FC<P>,
  configProps?: ConfigProps,
): ReturnType<P> => {
  const [dataProps, setDataProps] = useState<
    Omit<P, keyof ModalCommonProps> | undefined
  >()
  const [isOpen, setIsOpen] = useState(false)

  const onClose = (): void => {
    setIsOpen(false)

    if (configProps?.onClose) configProps.onClose()
  }

  const onOpen = (_dataProps: Omit<P, keyof ModalCommonProps>): void => {
    setIsOpen(true)
    setDataProps(_dataProps)
  }

  const getProps = (): P => {
    return {
      ...dataProps,
      isOpen,
      onClose,
    } as P
  }

  const Modal = isOpen
    ? createPortal(<ModalComponent {...getProps()} />, document.body)
    : null

  return [Modal, onOpen, onClose]
}
