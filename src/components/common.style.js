import styled from "styled-components"

export const colors = {
  primary: "#1269F7",
  accent: "#053E9C",
  text: {
    dark: "#20274E",
    light: "#939CBE",
    grey: "#A4A7CA",
    error: "#DB00FD",
  },
  bg: {
    dark: "#0F1D51",
    light: "#ECEFFE",
    grey: "#818BB1",
    yellow: "#F19105",
    disabled: "#545B77",
    hover: "#c5cbe6",
  },
}

export const H2 = styled.h2`
  font-size: 2.25rem;
  line-height: 1.3;
  margin: 0;
`
export const H3 = styled.h3`
  font-size: 1.5rem;
  line-height: 1.3;
  margin: 0;
  margin-top: 1em;
  margin-left: 0.5em;
  color: ${colors.text.light};
`

export const P = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`

export const A = styled.a`
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 600;
  text-decoration: none;
  margin-left: 0.25em;
  &:hover {
    text-decoration: underline;
  }
`
