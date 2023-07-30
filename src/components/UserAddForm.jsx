import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:           '',
            email:          '',
            isGoldClient:   false,
            salariu:        1000
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }
    updateSalariu(event) {
        this.setState({salariu: event.target.value});
    }

    render() {
        const {name, email, isGoldClient, salariu} = this.state;

        return (
            <div className="adauga-utilizatori">
                <form
                    className="user-add-form"
                    onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient, salariu)}
                >
                    <h2>Adauga utilizatori:</h2>
                    <label htmlFor="name">Nume:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={(event) => this.updateName(event)}
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        onChange={(event) => this.updateEmail(event)}
                    />
                    <label htmlFor="is-gold-client">Client GOLD</label>
                    <input
                        type="checkbox"
                        name="is-gold-client"
                        value="true"
                        onChange={(event) => this.updateIsGoldClient(event)}
                    />
                    <label htmlFor="salariu">Salariu:</label>
                    <input
                        type="number"
                        name="salariu"
                        onChange={(event) => this.updateSalariu(event)}
                    />

                    <input type="submit" value="Introdu utilizatorul"/>
                </form>
            </div>
        )
    }
}

export default UserAddForm;