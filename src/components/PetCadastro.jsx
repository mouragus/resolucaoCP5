import React from "react";
import { useState } from "react"
import { StyledDivPet, StyledDivPets } from "../style/PetCadastro";
import CardPet from "./CardPet";
import FormPet from "./FormPet";


function PetCadastro() {

    const [pets, setPets] = useState([])

    return (
        <StyledDivPet>
            <h1>Cadastro Do Pet</h1>
            
            <FormPet pets={pets} setPets={setPets}/>

            <StyledDivPets>
                {
                    pets.map(pet => (
                        <CardPet pet={pet} key={pet.id}/>
                    ))
                }
            </StyledDivPets>

        </StyledDivPet>
    )
}
export default PetCadastro;