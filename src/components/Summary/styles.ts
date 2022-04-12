import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: ${(props) => props.theme.colors.shape};
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: ${(props) => props.theme.colors.textTitle};
    transition: all .4s;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: ${(props) => props.theme.colors.green};
      color: ${(props) => props.theme.colors.shape}
    }
  }

  div:hover {
    transform: scale(1.1);
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);

    .highlight-background {
      grid-column: 1 / 3;
    }
  } 

  @media (max-width: 455px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    
    .highlight-background {
      grid-column: 1 ;
    }
  } 
`;