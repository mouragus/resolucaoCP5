import React from "react";
import {useState} from "react"
import {DivPet} from '../style/styled'
import FormPet from "./FormPet";


function PetCadastro() {

    const[nmPet, setNmPet] = useState({ 
        Nome : "",
        Raça : "",
        Porte : "",
        Tutor : "",
        ContatoTutor : "",
        ImagemPet : "",
        Observacoes : ""
    })


    const addPet = (e)=>{
        e.preventDefault()
    
        setNmPet([...nmPet])
    }

    const capturaDados =(e) =>{
        
        e.preventDefault()

        const {name, value} = e.target
        
        if(name == "nome"){
            setNmPet({ 
                'nome' : value,
                'raca' : nmPet.Raca,
                'porte' : nmPet.Porte,
                'tutor' : nmPet.Tutor,
                'conato tutor' : nmPet.ContatoTutor,
                'imagem pet' : nmPet.ImagemPet,
                'observacao' : nmPet.Observacoes
            })
        }
        if(name == "raca"){
            setNmPet({ 
                'nome' : nmPet.Nome,
                'raca' : value,
                'porte' : nmPet.Porte,
                'tutor' : nmPet.Tutor,
                'contato tutor' : nmPet.ContatoTutor,
                'imagem pet' : nmPet.ImagemPet,
                'observacao' : nmPet.Observacoes
            })
        }
        if(name == "porte"){
            setNmPet({ 
                'nome' : nmPet.Nome,
                'raca' : nmPet.Raca,
                'porte' : value,
                'tutor' : nmPet.Tutor,
                'conato tutor' : nmPet.ContatoTutor,
                'imagem pet' : nmPet.ImagemPet,
                'observacao' : nmPet.Observacoes
            })
        }
        if(name == "tutor"){
            setNmPet({ 
                'nome' : nmPet.Nome,
                'raca' : nmPet.Raca,
                'porte' : nmPet.Porte,
                'tutor' : value,
                'contato tutor' : nmPet.ContatoTutor,
                'imagem pet' : nmPet.ImagemPet,
                'observacao' : nmPet.Observacoes
            })
        }
        if(name == "contato tutor"){
            setNmPet({ 
                'nome' : nmPet.Nome,
                'raca' : nmPet.Raca,
                'porte' : nmPet.Porte,
                'tutor' : nmPet.Tutor,
                'contato tutor' : value,
                'imagem pet' : nmPet.ImagemPet,
                'observacao' : nmPet.Observacoes
            })
        }
        if(name == "imagem pet"){
            setNmPet({ 
                'nome' : nmPet.Nome,
                'raca' : nmPet.Raca,
                'porte' : nmPet.Porte,
                'tutor' : nmPet.Tutor,
                'contato tutor' : nmPet.ContatoTutor,
                'imagem pet' : value,
                'observacao' : nmPet.Observacoes
            })
        }
        if(name == "obsevacao"){
            setNmPet({ 
                'nome' : nmPet.Nome,
                'raca' : nmPet.Raca,
                'porte' : nmPet.Porte,
                'tutor' : nmPet.Tutor,
                'contato tutor' : nmPet.ContatoTutor,
                'imagem pet' : nmPet.ImagemPet,
                'observacao' :value
            })
        }
    }
   
    return(
        <DivPet>
    
            <FormPet
             capt={capturaDados}
            />
    
            {<button onClick={addPet}>Adicionar um Pet</button>}
    
            {nmPet.map((tar, i)=>(
                <PetCadastro
                    key={i}
                    pet= {tar}
                />
            ))}
            
        </DivPet>
      )
}

export default PetCadastro;