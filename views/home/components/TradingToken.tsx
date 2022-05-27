import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import { Image, Input, Tooltip } from "antd";
import React, { useCallback } from "react";
import styled from "styled-components";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import SelectDex, { Option } from "src/components/SelectDex";
import { FlexCol, FlexRow, Shadow } from "styles/theme";
import useMediaQuery from "src/hooks/useMediaQuery";

const TradingToken: React.FC<{ openModalDetail: () => void, fullwill: boolean }> = ({ openModalDetail, fullwill }) => {


  const isSmScreen = useMediaQuery("(max-width: 576px)");

  const renderCardHistoryMobile = useCallback((idx: number) => (
    <StyledCardHistory key={idx}>
      <StyledWrapItemInfoCard>
        <span>
          Date
        </span>
        <span>
          21.05.10
        </span>
      </StyledWrapItemInfoCard>
      <StyledWrapItemInfoCard>
        <span>
          Price
        </span>
        <span>
          $ 918.47
        </span>
      </StyledWrapItemInfoCard>
      <StyledWrapItemInfoCard>
        <span>
          ETH
        </span>
        <span>
          0.24
        </span>
      </StyledWrapItemInfoCard>
      <StyledWrapItemInfoCard>
        <span>
          BNB
        </span>
        <span>
          1.12
        </span>
      </StyledWrapItemInfoCard>
      <StyledWrapItemInfoCard>
        <span>
          BUSD
        </span>
        <span>
          0.26
        </span>
      </StyledWrapItemInfoCard>
      <StyledWrapItemInfoCard>
        <span>
          address
        </span>
        <span>
          0XADA....6ADA6
        </span>
      </StyledWrapItemInfoCard>
    </StyledCardHistory>

  ), [])

  return (
    <StyledWrapper>
      <StyledWrapHeader>
        {
          fullwill && (
            <StyledIconToken onClick={openModalDetail}>
              <Image preview={false} src="https://assets.coingecko.com/coins/images/21953/small/BRZnDZMh.png?1640324332" alt="icon" />
            </StyledIconToken>
          )
        }


        <StyledInputSearch prefix={<SearchOutlined />} />
        <StyledWrapSwitchChain>
          <Image preview={false} src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880" alt="eth" />
          <span>
            Switch to ETH
          </span>
        </StyledWrapSwitchChain>
      </StyledWrapHeader>
      <StyledWrapChart>
        <AdvancedRealTimeChart theme="dark" autosize></AdvancedRealTimeChart>
      </StyledWrapChart>
      <StyledWrapTradingHistory>
        <FlexRow>
          <SelectDex defaultValue="Trading History" onChange={() => { }}>
            <Option value="pcs">PancakeSwap Pair</Option>
            <Option value="joe">TradingJOE Pair</Option>
          </SelectDex>
          <FlexRow style={{ marginLeft: 'auto' }}>
            <StyledIconText>
              <FilterOutlined className="icon" />
            </StyledIconText>
            <StyledIconText className="chain">
              BSC
            </StyledIconText>
            <StyledIconText className="number-trade">
              last 521 Trades
            </StyledIconText>
          </FlexRow>
        </FlexRow>

        <StyledWrapListCardShadow>

          <StyledWrapListCardHistory>

            {
              [...Array(10)].map((data, idx) => (
                isSmScreen
                  ? renderCardHistoryMobile(idx)
                  :
                  < StyledCardHistory key={idx} >
                    <span>
                      21.05.10
                    </span>
                    <span>
                      $ 918.47
                    </span>
                    <span>
                      0.24
                    </span>
                    <span>
                      1.12
                    </span>
                    <span>
                      0.26
                    </span>
                    <span>
                      0XADA....6ADA6
                    </span>
                  </StyledCardHistory>
              ))
            }
          </StyledWrapListCardHistory>
          <Shadow numberColorRps={100} />
        </StyledWrapListCardShadow>
      </StyledWrapTradingHistory>
    </StyledWrapper >
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledWrapHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;

const StyledInputSearch = styled(Input)`
  border-radius: 24px;
  width: 100%;
  background: ${({ theme }) => theme.colors.card[100]};
  border: none;
  max-width: 320px;
  padding: 6px 16px;
  color: ${({ theme }) => theme.colors.text[300]};
  font-size: 20px;
  .ant-input {
    padding: 0 8px !important;
    background: ${({ theme }) => theme.colors.card[100]};
    color: ${({ theme }) => theme.colors.text[300]};
    caret-color: ${({ theme }) => theme.colors.text[300]};
  }
`;


const StyledWrapSwitchChain = styled.div`
  display: flex;
  align-items: center;

  padding: 8px ;
  margin: 0 0 0 24px;
  background-color: #332855;
  border-radius: 30px;

  color: ${({ theme }) => theme.colors.text[200]};
  font-weight: bold;
  cursor: pointer;
  width: max-content;
  word-break: keep-all;
  span {
    width: max-content;
    word-break: keep-all;
    padding: 0 16px;
  }
  .ant-image {
    padding: 4px;
    width: max-content;
    border-radius: 30px;
    color: white;
    background-color: #793AFF;
    width: 30px;
    height: 30px;
  }

  @media(max-width: 490px) {
    span {
      display: none;
    }
  }
`;

const StyledIconToken = styled.div`
  @media(max-width: 576px) {
    display: none;
  }
  img {
    height: 45px;
    width: 45px;
    border-radius: 14px;
    margin-right: 16px;
  }
`
const StyledWrapChart = styled.div`
  height: 50vh;

`;

const StyledWrapTradingHistory = styled.div`
  padding: 60px 0 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media(min-width: 1600px) {
    padding: 60px 0 0;
  }
`;

const StyledIconText = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text[300]};
  margin-right: 16px;

  .icon {
    font-size: 24px;
    margin-top: 4px;
  }
  &.chain {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text[200]};
    font-weight: bold;
  }

  @media(max-width: ${({ theme }) => theme.rps.sm}) {
    &.number-trade {
      display: none;
    }
    font-size: 14px;
    .icon {
      font-size: 18px;
    }
  }
  
`;

const StyledWrapListCardShadow = styled.div`
  position: relative;
  padding: 24px 0 0;
`

const StyledWrapListCardHistory = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 120px;

  
  max-height: 35vh;

  overflow: auto;

  @media(max-width: ${({ theme }) => theme.rps.xxl} ) {
    max-height: 40vh;
  }
  @media(max-width: ${({ theme }) => theme.rps.sm} ) {
    max-height: 50vh;
  }
`;

const StyledCardHistory = styled.div`
  background: ${({ theme }) => theme.colors.card[100]};
  padding:  24px;
  margin-bottom: 24px;
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
  gap: 0px 0px; 

  color: ${({ theme }) => theme.colors.text[300]};
  font-size: 16px;
  border-radius: 24px;

  transition: .2s all ease;
  &:hover {
    background: ${({ theme }) => theme.colors.card[200]};
  }

  @media(max-width: ${({ theme }) => theme.rps.table}) {
    grid-template-columns: 1fr 1fr 10% 10% 10% 1fr;
  }

  @media(max-width: ${({ theme }) => theme.rps.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledWrapItemInfoCard = styled(FlexRow)`
  justify-content: space-between;
  margin: 4px 0;
`
export default TradingToken;