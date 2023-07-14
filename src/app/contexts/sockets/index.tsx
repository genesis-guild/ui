import React, { createContext, useEffect, useMemo, useState } from 'react'
import { Socket, io } from 'socket.io-client'

import { useHandlers } from 'shared/hooks/useSockets'
import { log } from 'shared/utils/log'

export const SocketsContext = createContext<{
  socket: Socket | undefined
}>({
  socket: undefined,
})

export const SocketsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { init } = useHandlers()
  const [socket, setSocket] = useState<Socket>()

  useEffect(() => {
    const socketLocal = io(import.meta.env.VITE_API_URL)

    setSocket(socketLocal)
  }, [])

  useEffect(() => {
    if (socket) {
      log('info', 'socket initialized')

      init(socket)
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
