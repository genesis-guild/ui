import { createContext, useCallback, useState } from 'react'
import { MODAL_NAMES } from './types'
import { SelectWalletModal } from 'widgets/modals'

const defaultState = {
  [MODAL_NAMES.SELECT_WALLET]: false,
  closeModal: (name: MODAL_NAMES) => {},
  openModal: (name: MODAL_NAMES) => {},
}

export const ModalsContext = createContext(defaultState)

interface ModalsProviderProps {
  children: React.ReactNode
}

export const ModalsProvider: React.FC<ModalsProviderProps> = ({ children }) => {
  const [modalsState, setModalsState] = useState(defaultState)

  const closeModal = useCallback((name: MODAL_NAMES) => {
    setModalsState({ ...modalsState, [name]: false })
  }, [])

  const openModal = useCallback((name: MODAL_NAMES) => {
    setModalsState({ ...modalsState, [name]: true })
  }, [])

  return (
    <ModalsContext.Provider value={{ ...modalsState, closeModal, openModal }}>
      <SelectWalletModal
        isOpen={modalsState[MODAL_NAMES.SELECT_WALLET]}
        onClose={() => closeModal(MODAL_NAMES.SELECT_WALLET)}
      />
      {children}
    </ModalsContext.Provider>
  )
}
