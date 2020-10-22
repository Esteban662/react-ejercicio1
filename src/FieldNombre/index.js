import React from 'react';

class Field extends React.Component {
    changeNombre = (event)=>{
    }
    render() {
        return (
            <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="nombre">Nombre:</label>
            <div className="col-sm-10">
                <input onchange={this.changeNombre} type="text" className="form-control" id="nombre" placeholder="Ingresar Nombre" name="nombre" />
            </div>
        </div>
        );
    }
}

export default Field;
