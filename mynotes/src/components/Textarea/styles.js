import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;
  
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  resize: none;
  margin-bottom: 8px;
  border-radius: 1rem;
  padding: 1.6rem;
  font-family: "Roboto", sans-serif;  

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  &:focus {
    outline: none;
  }
`