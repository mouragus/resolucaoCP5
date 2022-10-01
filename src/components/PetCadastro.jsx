import React from "react";
import { useState } from "react"
import { DivPet, DivPets, Form } from '../style/styled'
import CardPet from "./CardPet";


function PetCadastro() {

    const [pets, setPets] = useState([])
    const [foto, setFoto] = useState('')


    function addPet(e) {
        e.preventDefault()

        let form = e.target

        let novoPet = {
            id: Date.now(),
            nome: form.querySelector('input[name=nome]').value,
            raca: form.querySelector('input[name=raca]').value,
            porte: form.querySelector('select[name=porte]').value,
            tutor: form.querySelector('input[name=tutor]').value,
            contatoTutor: form.querySelector('input[name=contatoTutor]').value,
            imagem: foto,
            observacao: form.querySelector('textarea[name=observacao]').value,
        }

        setPets([...pets, novoPet])

        form.reset()
    }

    function converteFoto(e){
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            setFoto(reader.result)
        }.bind(this)
    }

    return (
        <DivPet>
            <h1>Cadastro Do Pet</h1>
            <Form action="" onSubmit={addPet}>
                <div>
                    <label>Nome</label>
                    <input type="text" name='nome' required />
                </div>
                <div>
                    <label>Raça</label>
                    <input type="text" name='raca' required />
                </div>
                <div>
                    <label>Porte</label>
                    <select name="porte">
                        <option value="Pequeno">Pequeno</option>
                        <option value="Médio">Médio</option>
                        <option value="Grande">Grande</option>
                    </select>
                </div>
                <div>
                    <label>Tutor</label>
                    <input type="text" name='tutor' required />
                </div>
                <div>
                    <label>Contato Tutor</label>
                    <input type="tel" name='contatoTutor' required />
                </div>
                <div>
                    <label>Imagem Pet</label>
                    <input type="file" name='imagem' accept="image/png, image/gif, image/jpeg" required onChange={converteFoto}/>
                </div>
                <div>
                    <label>Observações</label>
                    <textarea name='observacao' cols="35" rows="15"></textarea>
                </div>
                <div>
                    <button type='submit'>Adicionar Pet</button>
                </div>
            </Form>

            <DivPets>
                {
                    pets.map(pet => (
                        <CardPet pet={pet} key={pet.id}/>
                    ))
                }
            </DivPets>

        </DivPet>
    )
}
export default PetCadastro;