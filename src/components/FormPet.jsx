import React from 'react';

export default function FormPet(props){
    return(
        <div>
            <form action="">
                <div>
                    <label>Nome</label>
                    <input type="text" name='nome' onChange={props.capt}/>
                </div>
                <div>
                    <label>Raça</label>
                    <input type="text" name='raca' onChange={props.capt}/>
                </div>
                <div>
                    <label>Porte</label>
                    <input type="text" name='porte' onChange={props.capt}/>
                </div>
                <div>
                    <label>Tutor</label>
                    <input type="text" name='tutor' onChange={props.capt}/>
                </div>
                <div>
                    <label>Contato Tutor</label>
                    <input type="tel" name='contato tutor' onChange={props.capt}/>
                </div>
                <div>
                    <label>Imagem Pet</label>
                    <input type="url" name='imagem pet' onChange={props.capt}/>
                </div>
                <div>
                    <label>Observações</label>
                    <textarea name='observacao' cols="35" rows="15" onChange={props.capt}></textarea>
                </div>
                <div>
                    <button type='submit'>Adicionar um Pet</button>
                </div>
            </form>
        </div>
    )
}