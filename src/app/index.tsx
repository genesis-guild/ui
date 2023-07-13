import { Routing } from 'pages'

import { Providers } from './providers'
import './styles/normilize.css'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Providers>
        <Routing />
      </Providers>
    </div>
  )
}

export default App
