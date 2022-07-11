import { HistoryContainer, HistoryList, Status } from './styles'

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
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Simple Task</td>
              <td>40:00</td>
              <td>21:33</td>
              <td>
                <Status statusColor="yellow">Concluded</Status>
              </td>
            </tr>
            <tr>
              <td>Simple Task</td>
              <td>40:00</td>
              <td>21:33</td>
              <td>
                <Status statusColor="yellow">Concluded</Status>
              </td>
            </tr>
            <tr>
              <td>Simple Task</td>
              <td>40:00</td>
              <td>21:33</td>
              <td>
                <Status statusColor="yellow">Concluded</Status>
              </td>
            </tr>
            <tr>
              <td>Simple Task</td>
              <td>40:00</td>
              <td>21:33</td>
              <td>
                <Status statusColor="yellow">Concluded</Status>
              </td>
            </tr>
            <tr>
              <td>Simple Task</td>
              <td>40:00</td>
              <td>21:33</td>
              <td>
                <Status statusColor="yellow">Concluded</Status>
              </td>
            </tr>
            <tr>
              <td>Simple Task</td>
              <td>40:00</td>
              <td>21:33</td>
              <td>
                <Status statusColor="yellow">Concluded</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
