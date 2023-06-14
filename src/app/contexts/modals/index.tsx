import { createContext, useCallback, useMemo, useState } from 'react'
import { SelectWalletModal } from 'widgets/modals'

import { ModalNames, ModalStateType } from './types'

const defaultState: Record<ModalNames, boolean> = {
  [ModalNames.SELECT_WALLET]: false,
}

export const ModalsContext = createContext<ModalStateType>({
  ...defaultState,
  closeModal: () => {},
  openModal: () => {},
})

interface ModalsProviderProps {
  children: React.ReactNode
}

export const ModalsProvider: React.FC<ModalsProviderProps> = ({ children }) => {
  const [modalsState, setModalsState] = useState(defaultState)

  const closeModal = useCallback((name: ModalNames) => {
    setModalsState({ ...modalsState, [name]: false })
  }, [])

  const openModal = useCallback((name: ModalNames) => {
    setModalsState({ ...modalsState, [name]: true })
  }, [])

  const value = useMemo(
    () => ({
      ...modalsState,
      closeModal,
      openModal,
    }),
    [modalsState],
  )

  return (
    <ModalsContext.Provider value={value}>
      <SelectWalletModal
        isOpen={modalsState[ModalNames.SELECT_WALLET]}
        onClose={() => closeModal(ModalNames.SELECT_WALLET)}
      />
      {children}
    </ModalsContext.Provider>
  )
}
