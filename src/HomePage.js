import React from 'react';


class Home extends React.Component {
    
    constructor() {
        super()
        this.state = {
            heroID: null,
            name: null,
            fullName: null,
            race: null,
            gender: null,
            occupation: null,
            image: null,
            errorStatus: 'alert'
        }
    }

    getRandomSuperhero() {
        console.log('Button was clicked!')
        const rndNum = Math.ceil(Math.random() * 731)
        const url = `https://akabab.github.io/superhero-api/api/id/${rndNum}.json`
        console.log('My random number is: ', rndNum)
        fetch(url)
          .then((response) => {
              if (response.status >= 200 && response.status <= 299) {
                 return response.json();
              } else {
                throw Error(response.statusText);
              }
           })
          .then((data) => {
          // do whatever you want with the JSON response
            this.setState({
                heroID: data.id,
                name: data.name,
                fullName: data.biography.fullName,
                race: data.appearance.race,
                gender: data.appearance.gender,
                occupation: data.work.occupation,
                image: data.images.lg,
                errorStatus: 'alert'
            })
           }).catch((error) => {
            // Handle the error
            this.setState({
                heroID: rndNum,
                name: null,
                fullName: null,
                race: null,
                gender: null,
                occupation: null,
                image: null,
                errorStatus: 'alert Error-msg'
            })

          });
    }

    render() {
        return (
            <div className="Home">
                <div className="Results-container">
                    <div className="Info-wrapper">
                        <h2 className="Info-heading">Super Heros</h2>
                        <div className="Fields-wrapper">
                            <div className="Field-group">
                                <span>Name:</span>
                                <p>{this.state.name}</p>
                            </div>
                            <div className="Field-group">
                                <span>Race:</span>
                                <p>{this.state.race}</p>
                            </div>
                            <div className="Field-group">
                                <span>Gender:</span>
                                <p>{this.state.gender}</p>
                            </div>
                            <div className="Field-group">
                                <span>Occupation:</span>
                                <div>{this.state.occupation}</div>
                            </div>
                        </div>
                        <button 
                          type="button" 
                          className="Btn"
                          onClick={()=> this.getRandomSuperhero()}
                          >
                          Get Random Super Hero
                          </button>
                          <div className={this.state.errorStatus}>Superhero of id {this.state.heroID} does not exists. Try again!</div>
                    </div>
                    <div className="Img-wrapper">
                        <img src={this.state.image} alt={this.state.name}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;