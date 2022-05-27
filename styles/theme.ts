import styled, { css } from "styled-components";
// const screenSizes = {
//   xs: "320px",
//   sm: "576px",
//   md: "600px",
//   lg: "992px",
//   xl: "1200px",
//   xxl: "1600px",
// };

// const media = Object.keys(screenSizes).reduce((acc: any, label: any) => {
//   acc[label] = (...args: any) => css`
//     @media (max-width: ${(screenSizes as any)[label]}) {
//       ${css({ ...args })}
//     }
//   `;
//   return acc;
// }, {} as typeof screenSizes);

export const theme = {
  colors: {
    text: {
      100: "#8B889D",
      200: "#E0DEF1",
      300: "#8E89AD",
    },

    card: {
      100: "#2E2B43",
      200: "#3B3854",
    },

    background: {
      100: "#232032", // body
      200: "#322f43", // drawer
    },

    cardInfo: {
      bg: {
        100: "#4D3E59",
        200: "#374465",
        300: "#ee64f71f",
        400: "#4D3959",
      },
      icon: {
        100: "#f55d85",
        200: "#009eff",
        300: "#f13efd",
        400: "#ff0079",
      },
    },
  },

  rps: {
    xs: "320px",
    s: "420px",
    sm: "576px",
    md: "600px",
    table: "767px",
    lg: "992px",
    xl: "1200px",
    xxl: "1600px",
  },
};

export const StyledPbContent = styled.div`
  padding: 24px;
  width: 100%;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Shadow = styled.div<{ numberColorRps: number }>`
  position: absolute;
  bottom: 0;
  height: 10px;
  width: 100%;
  padding: 2px 0;
  background: ${({ theme }) => theme.colors.background[100]};
  box-shadow: 0px 0 60px 60px ${({ theme }) => theme.colors.background[100]};
  border: none;
  @media (max-width: ${({ theme }) => theme.rps.xl}) {
    background: ${({ theme, numberColorRps }) =>
      theme.colors.background[numberColorRps]};
    box-shadow: 0px 0 60px 60px
      ${({ theme, numberColorRps }) => theme.colors.background[numberColorRps]};
  }
`;
