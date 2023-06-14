import React, { createContext, useEffect, useMemo, useState } from 'react'
import { initHandlers } from 'shared/sockets'
import { Socket, io } from 'socket.io-client'

export const SocketsContext = createContext<{
  socket: Socket | undefined
}>({
  socket: undefined,
})

export const SocketsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [socket, setSocket] = useState<Socket>()

  useEffect(() => {
    const socketLocal = io(import.meta.env.VITE_API_URL)

    setSocket(socketLocal)
  }, [])

  useEffect(() => {
    if (socket) {
      initHandlers(socket)
    }
  }, [socket])

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
