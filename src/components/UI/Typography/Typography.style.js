import styled from "styled-components"
import { colors } from "../colors"

const H2 = styled.h2`
  font-size: 2.25rem;
  line-height: 1.3;
  margin: 0;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-weight: 400;
`
const H3 = styled.h3`
  font-size: 1.5rem;
  line-height: 1.3;
  margin: 0;
  display: flex;
  align-items: center;
  /* margin-top: 1em;
  margin-left: 0.5em; */
  color: ${colors.text.light};
`

const P = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`

const A = styled.a`
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 600;
  text-decoration: none;
  margin-left: 0.25em;
  &:hover {
    text-decoration: underline;
  }
`

export const Typography = () => null

Typography.H2 = H2
Typography.H3 = H3
Typography.P = P
Typography.A = A
