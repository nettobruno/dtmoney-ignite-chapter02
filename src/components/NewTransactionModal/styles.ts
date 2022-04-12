import styled from 'styled-components';
import { transparentize } from 'polished';

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

export const Container = styled.form`
  h2 {
    color: ${(props) => props.theme.colors.textTitle};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: none;
    background: ${(props) => props.theme.colors.shape};
    color: ${(props) => props.theme.colors.textBody};


    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme.colors.textBody};
    }

    /* Isso vai fazer com que todo input, que antes dele tenha um outro input, fique com margin top */
    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    background-color: ${(props) => props.theme.colors.blue};
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: none;
  border-radius: 0.25rem;

  background: ${(props) => props.isActive 
    ? transparentize(0.8, colors[props.activeColor]) 
    : 'transparent'
  };

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.textTitle};
  }
`;