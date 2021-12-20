import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

const REQUEST_CREDIT = gql`
    mutation RequestCredit($creditRequest: CreditRequestInput!) {
        createCreditRequest(creditRequest: $creditRequest) {
            id
        }
    }
`;

const GET_USER = gql`
    query GetUser($id: ID!) {
        user(id: $id) {
            id
            name
            email
            clientInfo {
                id  
                identificationType
                identification
                documentDate
                birthDate
                revenueValue
                expensesValue
            }
        }
    }
`;


export const  GetCredit = () => {    
    const {data,loading, error}  = useQuery(GET_USER, {
        variables: {
            id: "5e9f9f9f8b2be5136280fb"
        }
    });
    
    const [amountReq, setAmountReq] = useState('');
    const [term, setTerm] = useState('');
 
    const [requestCredit] = useMutation(REQUEST_CREDIT);
    const handleSubmit = e => {
        e.preventDefault();
        let amount = parseInt(amountReq);
        let terms = parseInt(term); 
        let data2 = data;   
        requestCredit({
            variables: {
                creditRequest: {  
                    client:{ id: data2.user.clientInfo.id, name: data2.user.clientInfo.name, email: data2.user.email },           
                    amountReq:amount,
                    term:terms
                }
            }
        });

        setAmountReq('');
        setTerm('');
    }
    return (  
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <h1>Solicitar Crédito</h1>
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Monto</label>
                                    <input type="number" className="form-control" value={amountReq} onChange={e => setAmountReq(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Plazo</label> 
                                    <select className="form-control" value={term} onChange={e => setTerm(e.target.value)} >
                                        <option value="">Seleccione un plazo</option>
                                        <option value="3">3 meses</option>
                                        <option value="6">6 meses</option>
                                        <option value="12">12 meses</option>
                                    </select>
                                </div>
                               
                                    <br></br>
                                    <button className="btn btn-primary btn-block">Solicitar</button>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>      
    )
}
