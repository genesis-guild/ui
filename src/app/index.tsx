import { Routing } from 'pages'

import { Auth } from 'processes/auth'

import { Providers } from './providers'
import './styles/normilize.css'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Providers>
        <Auth>
          <Routing />
        </Auth>
      </Providers>
    </div>
  )
}

export default App
