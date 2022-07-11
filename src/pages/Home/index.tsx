import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I will work at</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="My cool task"
          />

          <datalist id="task-suggestions">
            <option value="My cool task" />
            <option value="Just another task" />
            <option value="My cool task 3" />
          </datalist>

          <label htmlFor="amountMinutes">during</label>
          <MinutesAmountInput
            type="number"
            id="amountMinutes"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
