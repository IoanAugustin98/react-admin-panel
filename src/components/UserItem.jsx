import React from 'react';


class UserItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display:        true,
            name:           props.name,
            email:          props.email,
            isGoldClient:   props.isGoldClient,
            salariu:        props.salariu,
            avatar:         props.avatar
        };
    }
    stergeUtilizator(event) {
        this.setState({display: false});
    }
    render(){
        if(this.state.display) {
            return (
                <div>
                    <h3>{ this.state.name }</h3>
                    <p>{  this.state.email }</p>
                    { 
                        this.state.isGoldClient
                            ? <h4>Client GOLD</h4>
                            : null
                    }
                    { 
                        this.state.salariu
                            ? <p>Salariu: {  this.state.salariu }</p>
                            : null
                    }
                    { 
                        this.state.avatar
                            ?  <img src={  this.state.avatar } width="50px" alt="avatar"/>
                            : null
                    }
                    <button onClick={(event) => this.stergeUtilizator(event)}>Sterge utilizatorul</button>           
                </div>
            );
        } else {
            return null;
        }
    }
}

export default UserItem;