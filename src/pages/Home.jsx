import React from 'react';
import UserList from '../components/UserList';
import UserAddForm from '../components/UserAddForm';
import PostList from '../components/PostList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      color: 'black',
      users: [],
      posts: [],
      curentPrint: 'utilizatori'
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        let salariu = 1000;
        data.forEach(user => {
          user.isGoldClient = false;
          user.salariu      = salariu;
          user.avatar      = 'img_avatar.png';
          salariu += 500;
        });
        this.setState({users: data});
      });
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        data = data.filter(post => post.id < 4);
        this.setState({posts: data});
      });
  }

  changeBackgroundColor(event) {
    this.setState({background: event.target.value});
  }

  changeColor(event) {
    this.setState({color: event.target.value});
  }

  afiseazaUtilizatori(event) {
    this.setState({curentPrint: 'utilizatori'});
  }

  afiseazaPostari(event) {
    this.setState({curentPrint: 'postari'});
  }

  getMaxId(users) {
    let maxId = 0;
    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });
    return maxId;
  }

  validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  submitAddForm(event, name, email, isGoldClient, salariu) {
    event.preventDefault();
    if(
      name    === '' ||
      ( 
        email   === ''            && 
        this.validateEmail(email) 
      ) || 
      salariu === ''
    ) { 
      return null; 
    }
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient,
            salariu
          }
        ]
      }
    });
  }

  render() {
    return(
      <div className="app" style={{background: this.state.background, color:this.state.color}}>

        <div className="titlu">
          <h1>Admin panel - Proiectul 1</h1>
        </div>

        <div className="continut">
          <UserAddForm submitAddForm={(event, name, email, isGoldClient, salariu) => this.submitAddForm(event, name, email, isGoldClient, salariu)}/>
          { 
            this.state.curentPrint === 'utilizatori'
                ? <UserList users={this.state.users}/>
                : null
          }
          { 
            this.state.curentPrint === 'postari'
                ? <PostList posts={this.state.posts}/>
                : null
          }
        </div>

        <button onClick={(event) => this.afiseazaUtilizatori(event)}>Afiseaza utilizatorii</button>
        <button onClick={(event) => this.afiseazaPostari(event)}>Afiseaza postarile</button>
        <br/>
        <label htmlFor="background">Schimba background: </label>
        <input type="color" onChange={(event) => this.changeBackgroundColor(event)}  name="background" />
        <br/>
        <label htmlFor="culoare-text">Schimba culoarea textului: </label>
        <input type="color" onChange={(event) => this.changeColor(event)} name="culoare-text"/>
      </div>
    );
  }
}

export default Home;