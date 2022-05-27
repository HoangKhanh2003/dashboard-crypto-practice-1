import React from 'react';

import { CaretRightOutlined, HeartOutlined, LineChartOutlined, PlusOutlined, RiseOutlined, ShareAltOutlined, StarOutlined, ToTopOutlined } from '@ant-design/icons';
import { Image, Progress } from 'antd';

import { Doughnut } from 'react-chartjs-2';
import SelectDex, { Option } from 'src/components/SelectDex';
import { FlexCol, FlexRow, Shadow } from 'styles/theme';
import styled from 'styled-components';


const DetailToken: React.FC<{ hidden: boolean }> = ({ hidden }) => {

  return (
    <StyledWrapper>
      <StyledNameDexPair>
        <SelectDex defaultValue="pcs" onChange={() => { }}>
          <Option value="pcs">PancakeSwap Pair</Option>
          <Option value="joe">TradingJOE Pair</Option>
        </SelectDex>
      </StyledNameDexPair>
      <StyledWrapDetailToken>
        <StyledWrapNameIconAddress>
          <StyledWrapIcon src="https://assets.coingecko.com/coins/images/21953/small/BRZnDZMh.png?1640324332" alt="icon" />
          <StyledWrapNameIcon>
            <StyledWrapNamePair>
              BSC/<span className='token'>Cake</span>
            </StyledWrapNamePair>
            <StyledInfoAddress>
              PancakeSwap Token 0x24rA....4f2trla
            </StyledInfoAddress>
          </StyledWrapNameIcon>
          <PlusOutlined className="icon-plus" />
        </StyledWrapNameIconAddress>
        <StyledFlexRow>
          <StyledFlexRow>
            <StarOutlined className="icon" style={{ color: "yellow", }} />
            <ShareAltOutlined className="icon" />
            <ToTopOutlined className='icon rotate' />
          </StyledFlexRow>
          <StyledTrade>
            TRADE
          </StyledTrade>
        </StyledFlexRow>
      </StyledWrapDetailToken>
      <FlexRow>
        <StyledPriceToken>
          983.47 <span>$</span>
        </StyledPriceToken>
        <FlexCol>
          <StyledPriceToETH>
            <Image style={{ marginTop: "-2px" }} preview={false} src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880" alt="eth" />
            <span>0.2498488</span>
          </StyledPriceToETH>
          <StyledIncreaseInTime>
            24H: +5.74
            <RiseOutlined className='icon' />
          </StyledIncreaseInTime>

        </FlexCol>
      </FlexRow>
      <StyledWrapBoxShadownCard>
        <StyledWrapMoreInfoPool>

          {
            [...Array(10)].map((item, idx) => {
              const _pos = idx + 1;
              const className =
                _pos % 4 === 0
                  ? 'pool-cake'
                  : _pos % 3 === 0
                    ? 'pool'
                    : _pos % 2 === 0
                      ? 'volume'
                      : 'liquidity'
              return (
                <StyledWrapCardInfoMini key={idx}>
                  <FlexRow>
                    <StyledWrapIconCardInfo className={className}>
                      <LineChartOutlined />
                    </StyledWrapIconCardInfo>
                    <FlexCol>
                      <StyledWrapTitleCardInfo className='title'>
                        Total Liquidity
                      </StyledWrapTitleCardInfo>
                      <StyledWrapTitleCardInfo className='price'>
                        $ 1,123,123.12
                      </StyledWrapTitleCardInfo>
                    </FlexCol>
                  </FlexRow>
                </StyledWrapCardInfoMini>
              )
            })
          }
        </StyledWrapMoreInfoPool>
        <Shadow numberColorRps={200} />
      </StyledWrapBoxShadownCard>

      <FlexRow style={{ zIndex: 1 }} className="wrap-section-chart" >
        <FlexCol >
          <StyledScore className='title'>Score</StyledScore>
          <StyledScore className='score'>97</StyledScore>
        </FlexCol>
        <Doughnut className='chart' data={{
          labels: [],
          datasets: [{
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(86, 255, 120)',
              'rgb(183, 14, 221)',

            ],
            label: 'My First dataset',
            data: [20, 20, 20, 20, 20],
          }]
        }} />
      </FlexRow>

      <StyledWrapCommunityTrust>
        <FlexCol >
          <FlexRow style={{ justifyContent: 'space-between' }}>
            <StyledTextCommunity>
              Community Trust
            </StyledTextCommunity>
            <StyledTextCommunity>
              <HeartOutlined className='icon' />
              86%
            </StyledTextCommunity>
            <StyledTextCommunity>
              25 VOTE
            </StyledTextCommunity>
          </FlexRow>
          <Progress className="progress" percent={80} showInfo={false} />
        </FlexCol>
      </StyledWrapCommunityTrust>
    </StyledWrapper>
  )
}


const StyledNameDexPair = styled.div`
  font-size: 30px;
  line-height: 45px;
  color: ${({ theme }) => theme.colors.text[200]};
  font-weight: bold;
`;
const StyledWrapper = styled(FlexCol)`
  width: 100%;

  @media(max-width: ${({ theme }) => theme.rps.sm}) {
    .wrap-section-chart {
      text-align: center;
      justify-content: center;
    }
    .chart {
      margin-left: 24px !important;
      
    }
  }
  .chart {
    margin-left: auto;
    max-width: 130px;
    max-height: 130px;
  }

`;

const StyledWrapNameIconAddress = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  .icon-plus {
    color: #FFFFFF;
    border: 1px solid  #53515e;
    padding: 16px;
    border-radius: 18px;
    cursor: pointer;
  }
`;

const StyledWrapIcon = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 14px;
  margin-right: 16px;
`;

const StyledWrapDetailToken = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin: 40px 0 24px;

`;

const StyledWrapNameIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

const StyledWrapNamePair = styled.div`
  font-size: 24px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text[200]};

  span.token {
    font-weight: bold;
  }
`;

const StyledInfoAddress = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.text[300]};
`;
const StyledFlexRow = styled.div`
  display: flex;
  align-items: center;

  .icon {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.text[300]};
    border: 1px solid #53515e;

    padding: 8px;
    margin-right: 12px;

    border-radius: 12px;
    cursor: pointer;
  }
`;

const StyledTrade = styled.div`
  padding: 5px 24px;
  border: 1px solid orange;
  color: ${({ theme }) => theme.colors.text[200]};
  font-size: 18px;
  border-radius: 14px;
  margin-left: auto;
  cursor: pointer;
`;

const StyledPriceToken = styled.div`
  color: ${({ theme }) => theme.colors.text[200]};
  font-size: 42px;
  line-height: 34px;
  font-weight: bold;
  margin-bottom: 4px;
  flex: 1;
  span {
    font-size: 28px;
    margin-left: -4px;
  }
`;

const StyledPriceToETH = styled.div`
  font-size: 12px;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.text[300]};
  flex: 1;
  img {
    max-width: 14px;
    margin-right: 4px;
  }
`;


const StyledIncreaseInTime = styled(StyledPriceToETH)`
  flex: none;
  .icon {
    margin-left: 4px;
    color: green; 
  }
`;

const StyledWrapBoxShadownCard = styled.div`
  position: relative;
  z-index: 0;
  overflow: hidden;
  
  @media(min-width: 1800px) {
    height: 45vh;
  }
  height: 30vh;
  min-height:350px;
`

const StyledWrapMoreInfoPool = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 24px 24px; 
  margin: 24px 0 0; 
  padding-right: 4px;
  
  padding-bottom: 80px;
  height: 100%;
  overflow: scroll;

  @media(max-width: 420px) {
    grid-template-columns: 1fr ; 
  }


`
const StyledWrapCardInfoMini = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.card[200]};
  padding: 24px 8px;
  border-radius: 16px;
`;

const StyledWrapIconCardInfo = styled.div<{ className: "liquidity" | "pool-cake" | "pool" | "volume" }>`
  height: 100%;
  margin-right: 8px;
  span {
    padding: 20px 10px;
    border-radius: 16px;
  }

  &.liquidity {
    span {
      background: ${({ theme }) => theme.colors.cardInfo.bg[100]};
      color: ${({ theme }) => theme.colors.cardInfo.icon[100]};
      font-size: 18px;
    }
  }

  &.volume {
    span {
      background: ${({ theme }) => theme.colors.cardInfo.bg[200]};
      color: ${({ theme }) => theme.colors.cardInfo.icon[200]};
      font-size: 18px;
    }
  }

  &.pool {
    span {
      background: ${({ theme }) => theme.colors.cardInfo.bg[300]};
      color: ${({ theme }) => theme.colors.cardInfo.icon[300]};
      font-size: 18px;
    }
  }

  &.pool-cake {
    span {
      background: ${({ theme }) => theme.colors.cardInfo.bg[400]};
      color: ${({ theme }) => theme.colors.cardInfo.icon[400]};
      font-size: 18px;
    }
  }
`;


const StyledWrapTitleCardInfo = styled.div<{ className: "title" | "price" }>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
  &.title {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text[300]};
  }
  
  &.price {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text[200]};
    font-weight: bold;

  }
`;

const StyledScore = styled.div<{ className: "title" | "score" }>`

  color: ${({ theme }) => theme.colors.text[200]};
  font-weight: bold;

  &.title {
    font-size: 20px;
  }

  &.score {
    font-size: 24px;
  }
`;
const StyledWrapCommunityTrust = styled.div`
  margin: 40px 0 24px;
  
  .progress {
    margin-top: 8px;
    .ant-progress-inner {
      background-color: ${({ theme }) => theme.colors.card[100]};
    }
  }
`

const StyledTextCommunity = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text[300]};
  font-weight: bold;
  .icon {
    color: ${({ theme }) => theme.colors.cardInfo.icon[400]};
    margin-right: 4px;
  }

`

export default DetailToken;