import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  margin-bottom: 8px;
  border-radius: 1rem;

  > input {
    font-size: 1.6rem;
    height: 5.6rem;
    width: 100%;
    padding: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    background: transparent;
    border: none;
    font-family: "Roboto", sans-serif;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    &:focus {
      outline: none;
    }
  }
  
  > svg {
    margin-left: 1.6rem;
  }
`