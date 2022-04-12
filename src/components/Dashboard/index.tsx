import { Summary } from '../Summary';
import { ToggleSwitchTheme } from '../ToggleSwitchTheme';
import { TransactionsTable } from '../TransactionsTable';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
      <ToggleSwitchTheme />
    </Container>
  );
}