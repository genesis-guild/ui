export enum ModalNames {
  SELECT_WALLET = 'SELECT_WALLET',
  LINK_WALLET = 'LINK_WALLET',
}

export interface ModalCommonProps {
  isOpen: boolean
  onClose: () => void
}
