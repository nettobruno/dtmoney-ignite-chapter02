import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(()=> {
    api.get('/transactions')
    .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className='deposit'>R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$ 1.000,00</td>
            <td>Moradia</td>
            <td>25/02/2022</td>
          </tr>

          <tr>
            <td>Comida</td>
            <td className='withdraw'>- R$ 800,00</td>
            <td>Alimentação</td>
            <td>02/03/2022</td>
          </tr>

          <tr>
            <td>Formatação de computador</td>
            <td className='deposit'>R$ 150,00</td>
            <td>Hardware</td>
            <td>07/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}