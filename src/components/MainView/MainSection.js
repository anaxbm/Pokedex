import './Mainsection.scss'
import axios from 'axios'
import { useState } from 'react'
import Card from '../Cards/Card'

const MainSection = () =>{

    const [names, setNames] = useState([])
    
    
    
    
    async function gettingApi (){
        const apiResponse =  await axios.get('https://pokeapi.co/api/v2/pokemon')
        const pokemonNames= apiResponse.data.results

        pokemonNames.map( (object)=>{
            return 
            <Card/>
            
        }

        )

    }
    gettingApi()



    return (
        <section className='main-section'>



        </section>
    )
}

export default MainSection