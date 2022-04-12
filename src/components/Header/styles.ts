import styled  from 'styled-components';

export const Container = styled.header`
  background: ${(props) => props.theme.colors.blue};
`;

export const Content = styled.header`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.shape};
    background: ${(props) => props.theme.colors.green};
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;