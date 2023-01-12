import { keyframes } from "styled-components";

export const Colors = {
  Light: "#FFFFFF",
  Primary300: "#FFCC21",
  Primary400: "#FF963C",
  Primary700: "#EA6C00",
  Primary300400: "linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)",
  Secondary300: "#8FE9D0",
  Dark600: "#2E2E2E",
  Dark500: "#414141",
  Gray400: "#777777",
  Gray200: "#f0ecec",
};

export const Devices = {
  UpMobile: "@media (max-width: 575px)",
  UpTablet: "@media (max-width: 767px)",
  UpTabletLandscape: "@media (max-width: 991px)",
  UpDesktop: "@media (max-width: 1199px)",
  MinExtraLargeDesktop: "@media (min-width: 1700px)",
  UpMaxDesktop: "@media (max-width: 1500px)",
  UpLargeDesktop: "@media (max-width: 1366px)",
  MinLargeDesktop: "@media (min-width: 1366px)",
  MinDesktop: "@media (min-width: 1200px)",
  MinTabletLandscape: "@media (min-width: 992px)",
  MinTablet: "@media (min-width: 768px)",
  MinMobile: "@media (min-width: 576px)",
};

export const Mixins = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  absoluteFullWidthAndHeight: `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  stripText(line: number) {
    return `
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
    display: -webkit-box;
    `;
  },

  drawProgress(progress: number, color: string) {
    return `
  .pie {
    .half-circle {
      border-color: ${color};
    }

    .left-side {
      transform: rotate(${progress} * 3.6deg);
    }

    @if ${progress} <= 50 {
      .right-side {
        display: none;
      }
    } @else {
      clip: rect(auto, auto, auto, auto);

      .right-side {
        transform: rotate(180deg);
      }
    }
  }
  `;
  },
  size(width: string, height: string) {
    return `
  height: ${height};
  width: ${width}; `;
  },
  drawProgresSolid(progress: number, color: string, bgColor: string) {
    return `
  background: linear-gradient(to right, ${color} 50%, ${bgColor} 50%);
  &:before {
    @if ${progress} <= 50 {
      background: ${bgColor};
      transform: rotate((100 - (50 - ${progress})) / 100 * 360deg * -1);
    } @else {
      background: ${color};
      transform: rotate((100 - ${progress}) / 100 * 360deg);
    }
  }
  `;
  },
};

export const rotateAnimation = keyframes`
 from {
   transform: rotate(0);
 }
  to {
    transform: rotate(360deg);
  }
`;
