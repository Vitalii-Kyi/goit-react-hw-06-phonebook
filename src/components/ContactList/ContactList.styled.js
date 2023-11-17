import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: auto;
  font-weight: 500;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
    padding: 2px;
    padding-left: 8px;
    
    span {
      font-size: 16px;
      font-weight: 600;
      margin-left: 12px;
      font-style: normal;
      margin-right: auto;
      margin-bottom: 4px;
      
    }

    div {
      display: flex;
      align-items: center;
    }

    div span {
    color: #000000;
    }

    button {
      height: 24px;
      font-size: 12px;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
      margin-left: 36px;
      padding: 2px 8px;
      color: #000000;
      background-color: #f4cccc;
      border: none;
      border-radius: 4px;

      &:hover {
        background-color: #ff7e6b;
        color: white;
        transform: scale(1.2);
        }
      }
    }
  }
`;
