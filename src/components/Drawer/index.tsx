import React from "react";
import { Drawer, DrawerProps } from 'antd';
import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ReDrawer: React.FC<DrawerProps> = ({ onClose, visible, children, title, placement = "left" }) => {
  return (
    <StyledDrawer
      title={title}
      placement={placement}
      closable={true}
      onClose={onClose}
      visible={visible}
      key={placement}
      closeIcon={<CloseOutlined style={{
        position: "absolute",
        top: "18px",
        right: "22px",
        color: "white",
        fontSize: "18px",
      }} />}
    >
      <StyledWrapContent>
        {children}
      </StyledWrapContent>
    </StyledDrawer >
  )
}

const StyledDrawer = styled(Drawer)`
 .ant-drawer-body { 
    background: ${({ theme }) => theme.colors.background[200]};
    color: #FFFFFF;
    padding-bottom: 70px;
    display: flex;
    flex-direction: column;
    flex: 1;
 }

 .ant-drawer-header {
    background: ${({ theme }) => theme.colors.background[200]};
    border-bottom-color: #16151e;
    color: #FFFFFF;
    font-size: 24px;
 }

 .ant-drawer-title {
    color: #FFFFFF;
    background: ${({ theme }) => theme.colors.background[200]};
    font-size: 24px;
  }

  .ant-drawer-close {
    margin-right: 0;
    padding: 0;
    font-size: 0;
  }
`;

const StyledWrapContent = styled.div`
  height: max-content;
  width: 100%;
`

export default ReDrawer