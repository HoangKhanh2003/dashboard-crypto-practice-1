
import { Image } from 'antd';
import React, { useCallback, useState } from 'react';
import ReDrawer from 'src/components/Drawer';
import useMediaQuery from 'src/hooks/useMediaQuery';
import { actSetVisibleModalDetailToken } from 'src/state/app';
import { useAppDispatch, useAppSelector } from 'src/state/store';
import styled from 'styled-components';
import DetailToken from './components/DetailToken';
import TradingToken from './components/TradingToken';


const Home = () => {
  const isXlScreen = useMediaQuery("(max-width: 1200px");
  const { visibleModalDetailToken = false } = useAppSelector(state => state.app)
  const dispatch = useAppDispatch();

  const handleCloseModalDetailToken = useCallback(() => dispatch(actSetVisibleModalDetailToken(false)), [dispatch])
  const handleOpenModalDetailToken = useCallback(() => dispatch(actSetVisibleModalDetailToken(true)), [dispatch])

  return (
    <StyledWrapper>
      <StyledWrapInfoToken>
        {
          isXlScreen
            ? (
              <ReDrawer title="Detail Token" visible={visibleModalDetailToken} onClose={handleCloseModalDetailToken} >
                <DetailToken hidden={isXlScreen} />
              </ReDrawer>

            ) :
            <DetailToken hidden={isXlScreen} />
        }

      </StyledWrapInfoToken>
      <StyledWrapTradingToken>
        <TradingToken fullwill={isXlScreen} openModalDetail={handleOpenModalDetailToken} />
      </StyledWrapTradingToken>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: grid; 
  grid-template-columns: 30% 70%; 
  gap: 0px 0px; 

  @media(max-width: ${({ theme }) => theme.rps.xl}) {
    grid-template-columns: 1fr;
  }
`;
const StyledWrapInfoToken = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledWrapTradingToken = styled.div`
  flex: 1;
  padding: 0 0 0 40px;
  overflow: hidden;
  @media(max-width: ${({ theme }) => theme.rps.xl}) {
    padding: 0;
  }
`;

export default Home;