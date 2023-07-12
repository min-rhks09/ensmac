import { CoinsType } from './marketcap';
import styled, { css } from 'styled-components';
// body {
//   background: #1E1930;
//   color: #D2D1D5;
// }
// Tr:nTh-child(even) {borderTd
//   background-color: #2e2649;
// }
// Tr:nTh-child(odd) {
//   background-color: #423b5b;
// }
// Th {
//   background-color: #342F44;
//   color: white;
// }

export let Td = styled.td`
  border:none;
  padding: 1vw 1vw 1vw 1vw;   
`
export let Th = styled.th`
  background-color: #342F44;
  color: white;
  padding: 1vw 1vw 1vw 1vw;   
`
export let Tr = styled.tr`
  background-color: ${props =>props.bg};
  color: white;
`

export let CoinsTable = styled.div`
  font-size: 2vw;
  justify-content: center;
  display: flex;
`

const CoinTable = ({ coins }) => {
    return (
      <CoinsTable>
        <table>
          <thead>
            <Tr bg='#2e2649'>
              <Th className="headCol rankCol">순위</Th>
              <Th className="headCol nameCol">종목</Th>
              <Th>기호</Th>
              <Th>가격(KRW)</Th>
              <Th>총 시가</Th>
              <Th>거래량(24H)</Th>
              <Th>변동(24H)</Th>
              <Th>변동(7D)</Th>
            </Tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <Tr bg='#423b5b' key={coin.id}>
                <Td className="headCol rankCol align-right">{coin.rank}</Td>
                <Td className="headCol nameCol">{coin.name}</Td>
                <Td>{coin.symbol}</Td>
                <Td className="align-right">
                  ₩{Number(coin.quotes.KRW.price.toFixed(1)).toLocaleString()}
                </Td>
                <Td className="align-right">
                  {(coin.quotes.KRW.market_cap / 1000000000000).toFixed(2)}T
                </Td>
                <Td className="align-right">
                  {(coin.quotes.KRW.volume_24h / 1000000000000).toFixed(2)}T
                </Td>
                <Td className="align-right">
                  {coin.quotes.KRW.percent_change_24h.toFixed(2)}%
                </Td>
                <Td className="align-right">
                  {coin.quotes.KRW.percent_change_7d.toFixed(2)}%
                </Td>
              </Tr>
            ))}
          </tbody>
        </table>
      </CoinsTable>
    );
  };
  
  export default CoinTable;
  