import React, { createContext, useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

import { initHandlers } from 'shared/sockets'

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
    const _socket = io(import.meta.env.VITE_API_URL!)

    if (!_socket) {
      console.log('socket not connected')

      return
    }

    setSocket(_socket)
  }, [])

  useEffect(() => {
    if (socket) {
      console.log('socket connected', socket)
      initHandlers(socket)
    }
  }, [socket])

  return (
    <SocketsContext.Provider value={{ socket }}>
      {children}
    </SocketsContext.Provider>
  )
}
