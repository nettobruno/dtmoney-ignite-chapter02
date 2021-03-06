import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de Website',
          amount: 12000.00,
          category: 'Desenvolvimento',
          type: 'deposit',
          createdAt: new Date('2022-03-21 22:10:00')
        },
        {
          id: 2,
          title: 'Pagamento do Aluguel',
          amount: 1000.00,
          category: 'Moradia',
          type: 'withdraw',
          createdAt: new Date('2022-03-21 22:30:00')
        },
        {
          id: 3,
          title: 'Supermercado',
          amount: 400.00,
          category: 'Compras',
          type: 'withdraw',
          createdAt: new Date('2022-04-12 09:30:00')
        }
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions',() => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);