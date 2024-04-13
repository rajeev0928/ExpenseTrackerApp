import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Transactions() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()
    let net ="green"
    if(totalBalance()<0){
        net = "red"
    }
    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="balance" >
                                <h2>Total Balance</h2>
                                <p className={net}>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                    <div >
                        <History caller ="Full" />
                        
                        
                    </div>
             
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    
       
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center; 
                justify-content: space-between;
            }
            .balance{
                font-weight:bold;
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .green{
                        color: green;
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                    .red{
                    color: red; 
                    opacity: 0.6;
                        font-size: 4.5rem;
                     }
                }
        
    
`;

export default Transactions