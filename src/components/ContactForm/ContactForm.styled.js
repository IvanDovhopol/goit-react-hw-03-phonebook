import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const TextError = styled(ErrorMessage)`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.error};
`;

export const StyledForm = styled(Form)`
  max-width: 800px;
  font-weight: ${p => p.theme.fontWeights.extraBold};
  margin: ${p => p.theme.space[0]}px auto;
`;

export const Input = styled(Field)`
  display: block;
  font-family: ${p => p.theme.fonts.regular};
  width: 100%;
  border-radius: ${p => p.theme.radii.normal};
  border: transparent;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};

  :active {
    transition: 0.3s all;
    top: 2px;
  }
`;

export const Label = styled.label`
  display: block;
  line-height: ${p => p.theme.lineHeights.body};
  text-align: left;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Button = styled.button`
  position: relative;
  background: #ec5990;
  color: ${p => p.theme.colors.white};
  text-transform: uppercase;
  border: ${p => p.theme.borders.none};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  letter-spacing: 2px;
  display: block;
  appearance: none;
  border-radius: ${p => p.theme.radii.normal};
  width: 100%;
  font-weight: ${p => p.theme.fontWeights.normal};
  letter-spacing: 0.5rem;
  transition: 0.3s all;
  cursor: pointer;

  :hover {
    background: #bf1650;
    color: ${p => p.theme.colors.white};
  }

  :active {
    transition: 0.3s all;
    top: 2px;
  }
`;
