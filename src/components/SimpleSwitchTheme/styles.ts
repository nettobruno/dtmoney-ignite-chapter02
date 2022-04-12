import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 20px;

  button {
    border: none;
    border-radius: 20px;
    background-color: ${(props) => props.theme.name === 'light' ? '#ccc' : '#282828'};
    font-size: 16px;

    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
