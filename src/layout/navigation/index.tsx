import { FileOutlined, GithubOutlined, HomeOutlined, LineChartOutlined, RadarChartOutlined, RocketOutlined, SearchOutlined, WalletOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import React from "react";
import useMediaQuery from "src/hooks/useMediaQuery";
import styled from "styled-components";
import { StyledPbContent } from "styles/theme";
import BottomNav from "./BottomNav";

export const arrNav = [
  {
    title: "pink",
    navs: [
      {
        title: "Search",
        icon: SearchOutlined
      },
      {
        title: "Rocket",
        icon: RocketOutlined
      },
      {
        title: "Wallet",
        icon: WalletOutlined
      },
      {
        title: "Files",
        icon: FileOutlined
      }
    ]
  },
  {
    title: "purple",
    navs: [
      {
        title: "Search",
        icon: SearchOutlined
      },
      {
        title: "Rocket",
        icon: RocketOutlined
      },
      {
        title: "Wallet",
        icon: WalletOutlined
      },
      {
        title: "Files",
        icon: FileOutlined
      }
    ]
  }
];

const Navigation: React.FC = () => {

  const screenSM = useMediaQuery("(max-width: 576px)");

  return screenSM ?
    <>
      <BottomNav />
    </>
    :
    <StyledWrapper>
      <StyledContainer>
        <HomeOutlined style={{
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: 'center'
        }} className="icon" />
        <StyledWrapGroupIcon>
          {
            arrNav.map((item, idx) => (
              <StyledWrapIcon key={idx} className={item.title}>
                {
                  item.navs.map((nav, keyNav) => (
                    <Tooltip placement="top" key={keyNav} title={nav.title}>
                      <nav.icon className={`icon ${keyNav === 0 ? 'active' : ""}`} />
                    </Tooltip>
                  ))
                }
              </StyledWrapIcon>
            ))
          }
        </StyledWrapGroupIcon>
        <StyledWrapGroupIcon className="chart-github">
          <Tooltip placement="top" title={"Chart"}>
            <LineChartOutlined className="icon" />
          </Tooltip>
          <Tooltip placement="top" title={"Chart"}>
            <RadarChartOutlined className="icon" />
          </Tooltip>
          <Tooltip placement="top" title={"Github"}>
            <GithubOutlined className="icon" />
          </Tooltip>
        </StyledWrapGroupIcon>

      </StyledContainer>

    </StyledWrapper>

}

const StyledWrapper = styled.div`
  width: 100px;
  position: relative;
`;

const StyledContainer = styled(StyledPbContent)`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: max-content;
  position: fixed;
  top: 0;
  left: 0;  
  .icon {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.text[300]};
    padding: 2px;
    border-radius: 50%;
    cursor: pointer;
  }
`

const StyledWrapGroupIcon = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  &.chart-github {
    .icon {
      margin: 16px 0;
    }
  }
`

const StyledWrapIcon = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  padding: 8px;
  margin: 0 0 8px;

  .icon {
    font-size: 18px !important;
    margin: 4px 0;
    color: #8E7389;
    padding: 8px;
  }

  &.pink {
    background-color: #432A49;
    .icon {
      &.active {
        color: white;
        background-color: #F43984;
      }
    }
  }

  &.purple {
    background-color: #332855;
    .icon {
      &.active {
        color: white;
        background-color: #793AFF;
      }
    }
  }

`
export default Navigation;