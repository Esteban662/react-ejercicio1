/** 
 * 1- Modificar el State para que esté correcto
 * 2- Colocar correctamente los eventos en los Fields
 * 3- Modificar El llamado al componente Table (En Mayusculas!!)
 * 4- En FieldNombre llamar a this.props.changeNombre en el handler del evento change Enviandole el event.target.value. Recordar enviar por props la funcion changeNombre={this.changeNombre}
 * 5- En FieldApellido llamar a this.props.changeApellido en el handler del evento change Enviandole el event.target.value  Recordar enviar por props la funcion changeApellido={this.changeApellido}
 * 6- En FieldEmail llamar a this.props.changeEmail en el handler del evento change Enviandole el event.target.value.  Recordar enviar por props la funcion changeEmail={this.changeEmail}
 * 7- Modificar las funciones changeNombre | changeApellido | changeEmail para que modifiquen al estado correctamente,
 *      Siendo que reciben el VALOR del evento del hijo
 * 8- Enviar por parametro el apellido, nombre y email al Table.
 * 9- Colocar los valores del estado del padre en el jsx. Por ejemplo: {this.props.apellido} en la tabla. 
 */
import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:this.nombre,
            apellido=that.apellido,
            email:email;
        };
    }
    changeNombre = (valor)=>{
        this.setState({name:valor});
    }
    changeApellido = ()=>{
        this.setState({apellido:valor});
    }
    changeEmail = ()=>{
        this.setState({email:value});
    }
    render() {
        return (
            <>
                <form className="form-horizontal" action="#">
                   <fieldNombre></fieldNombre>
                   <fieldApellido></fieldApellido>
                   <fieldEmail></fieldEmail>
                </form>
                <br/>
                <br/>
                <table></table>

            </>
        );
    }
}

export default Form;
