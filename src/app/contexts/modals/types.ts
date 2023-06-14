export enum ModalNames {
  SELECT_WALLET,
}

export type ModalStateType = Record<ModalNames, boolean> & {
  closeModal: (name: ModalNames) => void
  openModal: (name: ModalNames) => void
}
