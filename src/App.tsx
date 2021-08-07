import { RecoilRoot } from 'recoil'

import { CharacterCounter } from './CharacterCounter'

const App = () => {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  )
}

export default App
