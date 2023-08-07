import React, { createContext, useMemo } from 'react'
import { Socket } from 'socket.io-client'

import { useHandlers } from '../lib'

export const SocketsContext = createContext<{
  socket: Socket | undefined
}>({
  socket: undefined,
})

export const SocketsProvider: React.FC<{
  children: React.ReactNode
  socket: Socket
}> = ({ children, socket }) => {
  useHandlers(socket)

  const value = useMemo(
    () => ({
      socket,
    }),
    [socket],
  )

  return (
    <SocketsContext.Provider value={value}>{children}</SocketsContext.Provider>
  )
}
