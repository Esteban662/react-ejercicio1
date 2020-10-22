import React from 'react';

class Form extends React.Component {
    render() {
        return (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Estado</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Valor</th>
                            <td>(Nombre)</td>
                            <td>(Apellido)</td>
                            <td>(Email)</td>
                        </tr>
                    </tbody>
                </table>
        );
    }
}

export default Form;
