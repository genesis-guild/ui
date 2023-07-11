export interface SelectOption<T> {
  label: React.ReactNode
  value: T
}

export enum ModalNames {
  SELECT_WALLET = 'SELECT_WALLET',
  LINK_WALLET = 'LINK_WALLET',
}

export interface ModalCommonProps {
  isOpen: boolean
  onClose: () => void
}
