import React from "react";

class TempConverter extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            celcius: 0, 
            farenheit: 32,
        };

        this.handleChangeC = this.handleChangeC.bind(this);
        this.handleChangeF = this.handleChangeF.bind(this);
    }

    handleChangeC(event) {
        const celcius = event.currentTarget.value; // get value from input (needs to be first otherwise using stale data)

        this.setState({celcius: celcius}) // set state
        
        let farenheit = (celcius * 1.8) + 32; // formula
        
        this.setState({farenheit: farenheit}) // set other state
    }

    handleChangeF(event) {
        const farenheit = event.currentTarget.value;

        this.setState({farenheit: farenheit})
        
        let celcius = (farenheit - 32) / 1.8;
        
        this.setState({celcius: celcius})
    }

    render() {

        const { celcius, farenheit } = this.state;

        return(
            <section>
                <form>
                    <label for="celcius">Celcius</label>
                    <input onChange={this.handleChangeC} value={ celcius } id="celcius" type="number"/>
                    <label for="farenheit">Farenheit</label>
                    <input onChange={this.handleChangeF} value={ farenheit } id="farenheit" type="number"/>
                </form>
            </section>
        )
    }
}

export default TempConverter;