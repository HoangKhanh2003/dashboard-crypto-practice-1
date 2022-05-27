import { GithubOutlined, HomeOutlined, LineChartOutlined, MenuOutlined, MenuUnfoldOutlined, RadarChartOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import React, { useCallback, useState } from "react";
import ReDrawer from "src/components/Drawer";
import { actSetVisibleModalDetailToken } from "src/state/app";
import { useAppDispatch } from "src/state/store";
import styled from "styled-components";
import { StyledPbContent } from "styles/theme";
import { arrNav } from ".";


const BottomNav: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const handleOpenModalDetailToken = useCallback(() => dispatch(actSetVisibleModalDetailToken(true)), [dispatch])

  const openDrawer = useCallback(() => setVisible(true), [])
  const closeDrawer = useCallback(() => setVisible(false), [])

  return (
    <StyledWrapper>
      <StyledContainer>
        <MenuOutlined className="icon" onClick={openDrawer} />
        <HomeOutlined className="icon" />
        <MenuUnfoldOutlined className="icon" onClick={handleOpenModalDetailToken} />
      </StyledContainer>

      <ReDrawer title="Menu" visible={visible} onClose={closeDrawer}>
        <StyledWrapContentModal>
          <StyledWrapListMenu>
            {
              arrNav.map((item, idx) => item.navs.map((nav, idxNav) => (
                <StyledWrapItem key={idxNav}>
                  <nav.icon className="icon" />
                  <span className="text" >{nav.title}</span>
                </StyledWrapItem>
              )))
            }
          </StyledWrapListMenu>
          <StyledFlex>
            <StyledWrapIcon>
              <LineChartOutlined className="icon" />
            </StyledWrapIcon>
            <StyledWrapIcon>
              <RadarChartOutlined className="icon" />
            </StyledWrapIcon>
            <StyledWrapIcon>
              <GithubOutlined className="icon" />
            </StyledWrapIcon>
          </StyledFlex>
        </StyledWrapContentModal>
      </ReDrawer>
    </StyledWrapper >

  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  flex: 1;
`;

const StyledContainer = styled(StyledPbContent)`
  z-index: 100000000;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background[100]};
  .icon {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.text[300]};;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.rps.sm}) {
    padding: 12px 24px;
  }
`;

const StyledWrapItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: 8px 0;
  border-bottom:1px solid  #f0f0f0;

  .text {
    margin-left: 14px;
  }
`;

const StyledWrapContentModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  overflow: auto;

  .icon {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.text[300]};;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
  }
`

const StyledWrapListMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .icon {
    font-size: 30px;
  }
`;

const StyledWrapIcon = styled.span`
`;

export default BottomNav;