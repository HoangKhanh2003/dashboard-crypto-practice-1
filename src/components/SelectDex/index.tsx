import React from 'react';

import { Select, SelectProps } from 'antd';
import { valueType } from 'antd/lib/statistic/utils';
import { BaseSelectRef } from 'rc-select';
import styled from 'styled-components';

const { Option, OptGroup } = Select;
export { Option, OptGroup };

const SelectDex = (props: SelectProps<valueType> & {
  children?: React.ReactNode;
} & {
  ref?: React.Ref<BaseSelectRef> | undefined;
}) => {


  return (
    <StyledSeclect>
      <Select
        dropdownClassName='select-dex-dropdown'
        dropdownStyle={{
          background: '#332855',
        }}
        className='select-dex'
        {...props} />
    </StyledSeclect>
  )
}

const StyledSeclect = styled.div`
  .select-dex {
    width: max-content;
    font-size: 26px;
    line-height: 30px;
    .ant-select-selector {
      background : transparent;
      border:none;
      color: ${({ theme }) => theme.colors.text[200]};
      padding-right: 40px;
      padding-left: 0;
      outline: none;

      &:focus {
        outline: none;
        border: none;
      }

    }

    .ant-select-selection-item {
    font-weight: bold;
    }

    .ant-select-arrow {
      color: ${({ theme }) => theme.colors.text[100]};
      font-size: 20px;
      margin-top: -4px;
    }

  }
  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border:none;
    outline: none;
    box-shadow: none;
  }
  @media(max-width: ${({ theme }) => theme.rps.sm}) {
    .select-dex {
      width: max-content;
      font-size: 22px;
      line-height: 24px;
    }
    .ant-select-selection-item {
      padding-right: 0 !important;;

    }
  }

`
export default SelectDex;