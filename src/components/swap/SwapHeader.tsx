import { Trans } from '@lingui/macro'
import { Percent } from '@uniswap/sdk-core'
import { useFiatOnRampButtonEnabled } from 'featureFlags/flags/fiatOnRampButton'
import { subhead } from 'nft/css/common.css'
import styled from 'styled-components/macro'

import { RowBetween, RowFixed } from '../Row'
import SettingsTab from '../Settings'

const StyledSwapHeader = styled.div`
  padding: 8px 12px;
  margin-bottom: 8px;
  width: 100%;
  color: ${({ theme }) => theme.textSecondary};

  height: 35px;
  left: 746px;
  top: 333px;

  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 144.02%;
  /* or 26px */

  display: flex;
  align-items: center;

  color: #ffffff;
`

const TextHeader = styled.div`
  color: #ffffff;
  margin-right: 8px;
  display: flex;
  line-height: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default function SwapHeader({ allowedSlippage }: { allowedSlippage: Percent }) {
  const fiatOnRampButtonEnabled = useFiatOnRampButtonEnabled()

  return (
    <StyledSwapHeader>
      <RowBetween>
        <RowFixed style={{ gap: '8px' }}>
          <TextHeader className={subhead}>
            <Trans>Swap</Trans>
          </TextHeader>
          {/* {fiatOnRampButtonEnabled && <SwapBuyFiatButton />} */}
        </RowFixed>
        <RowFixed>
          <SettingsTab placeholderSlippage={allowedSlippage} />
        </RowFixed>
      </RowBetween>
    </StyledSwapHeader>
  )
}
