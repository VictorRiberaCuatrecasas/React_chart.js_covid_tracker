import React from 'react';
import styles from './App.module.css';
// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Charts/Chart";
// import CountryPicker from "./components/CounrtryPicker/CountryPicker";
import {Cards, Chart, CountryPicker} from "./components";
import {fetchData} from "./api/index";
import mainImg from "./images/image.png";

class App extends React.Component {
    state ={
        data:{},
        country: ""
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData})
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);
        
        this.setState({data: fetchedData, country: country})
    }

    render(){
    const {data, country} = this.state;
    return (
        <div className={styles.container}>
            <img className={styles.image} src={mainImg} alt="logo"/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} />
        </div>
    );
    }
}

export default App;
