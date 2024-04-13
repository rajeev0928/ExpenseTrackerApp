import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';

function History(props) {
    const caller = props.caller
    let head = ""
    if(caller === "Recent"){
        head ="Recent History"
    }
    const {transactionHistory} = useGlobalContext()
    let [...history] = []
if(props.caller === "Full"){
     [...history] = transactionHistory()}
    else{

     [...history] =transactionHistory().slice(0, 3)}
    return (
        
        <HistoryStyled>
       
           <h2> {head}</h2>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item "  >
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
`;

export default History