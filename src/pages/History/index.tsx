import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Simple Task</td>
              <td>40:00</td>
              <td>21:33</td>
              <td>23:13</td>
            </tr>
            <tr>
              <td>Simple Task</td>
              <td>40:00</td>
              <td>21:33</td>
              <td>23:13</td>
            </tr>
            <tr>
              <td>Simple Task</td>
              <td>40:00</td>
              <td>21:33</td>
              <td>23:13</td>
            </tr>
            <tr>
              <td>Simple Task</td>
              <td>40:00</td>
              <td>21:33</td>
              <td>23:13</td>
            </tr>
            <tr>
              <td>Simple Task</td>
              <td>40:00</td>
              <td>21:33</td>
              <td>23:13</td>
            </tr>
            <tr>
              <td>Simple Task</td>
              <td>40:00</td>
              <td>21:33</td>
              <td>23:13</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
