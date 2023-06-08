import { Routing } from 'pages'
import { withProviders } from './providers'

import './styles/normilize.css'
import './styles/fonts.css'

const App = () => {
  return (
    <div className='app'>
      <Routing />
    </div>
  )
}

export default withProviders(App)
