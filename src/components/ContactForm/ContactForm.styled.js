import { Form } from 'formik';
import styled from 'styled-components';

export const FormThumb = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 320px;
  margin: auto;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  padding: 20px 28px;
  margin-bottom: 28px;

  button {
    font-weight: bold;
    margin-bottom: 24px;
    padding: 4px 8px;
    border: 1px solid #bcbcbc;
    border-radius: 4px;
    text-transform: uppercase;
    background-color: #d9ead3;
  }

  button:hover,
  button:focus {
    background-color: #93c47d;
    color: white;
  }

  label {
    font-style: oblique;
    font-weight: 500;
    margin-bottom: 12px;

    b {
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      color: #bcbcbc;
      text-transform: lowercase;
    }

    input {
      margin-top: 8px;
      width: 100%;
      padding: 2px 12px;
      border: 1px solid #bcbcbc;
      border-radius: 4px;
      outline: none;
      text-align: center;
    }
  }
`;
