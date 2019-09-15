import React, { Component } from 'react'
import '../Legenda/Legenda.scss'

 class Legenda extends Component {
    render() {
        return (
            <div className="legenda">
                <h1>Legenda</h1>
                <table>
                   <thead>
                   <tr>
                        <td>JavaScript</td>
                        <td>Java </td>
                        <td>Python </td>
                        <td>PHP </td>
                        <td>UX Design </td>
                        <td>Tester manualny </td>
                        <td>Tester Automatyzujący</td>
                   </tr>
                   </thead>
                   <tbody>
                  
                   </tbody>
                </table>
            </div>
        )
    }
}

export default Legenda;