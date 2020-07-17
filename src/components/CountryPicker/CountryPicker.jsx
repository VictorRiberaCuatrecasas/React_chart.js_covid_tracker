import React, {useEffect, useState} from "react";
import { NativeSelect, FormControl} from "@material-ui/core";
import {fetchCountries} from "../../api"

import styles from "./CountryPicker.module.css";

function CountryPicker({handleCountryChange}){

    const [fetchedCountries , setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchAPI()
    }, []);

    return(
       <FormControl className={styles.formControl}>
           <NativeSelect defaultValue="" onChange={(evt) => handleCountryChange(evt.target.value) }>
               <option value="">Gobal</option>
               {fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl> 
    )
}


export default CountryPicker