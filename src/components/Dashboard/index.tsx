import { Summary } from '../Summary';
import ToggleSwitch from '../ToggleSwitch';
import { TransactionsTable } from '../TransactionsTable';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
      <ToggleSwitch />
    </Container>
  );
}