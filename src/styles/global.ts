import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --shape: #FFFFFF;

    --red: #E52E4D;
    --green: #33CC95;
    --blue: #5429cc;
    --blue-light: #6933ff;

    --text-title: #363F5F;
    --text-body: #969CB3;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Padrão de fonte da aplicação é 16px, o que é ideal para desktop. */

  /* É interessante utilizar % para definir os tamanhos de fonte, pois quando o usuário tem problemas de vista, e utiliza fontes maiores em seu dispositivo, as fontes que usam % vão adaptar de acordo com o tamanho de fonte que aquele usuário está usando naquele momento.  */
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // é igual a 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // é igual a 14px
    }
  }           

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; 
  }

  /* É necessário colocar no input, textarea e button, pois por padrão eles não importam das tags body e html */
  body,
  input,
  textarea,
  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  /* tudo que estiver como desabilitado na aplicação, vai ter uma opacidade menor */
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;