import { ChangeEventHandler } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { charCountState, textState } from './features/text'

export const CharacterCounter = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  )
}

const TextInput = () => {
  const [text, setText] = useRecoilState(textState)

  const onChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    setText(event.currentTarget.value)
  }

  return (
    <div>
      <input type='text' value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  )
}

const CharacterCount = () => {
  const charCount = useRecoilValue(charCountState)

  return <>Character Count: {charCount}</>
}
