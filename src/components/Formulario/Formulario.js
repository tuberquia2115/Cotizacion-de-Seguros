import React, { useState } from 'react'
import { obtenerDiferenciaYear, calcularMarca, calcularPlan } from '../../Herpers/Herpers';
import {
    Campo,
    Label,
    Select,
    InputRadio,
    Buttom,
    Error
} from './style.js'
const Formulario = ({ guardarResumen, guardarCargando }) => {
    const [datos, guardarDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, guardarError] = useState(false);
    const { marca, year, plan } = datos;

    const obternerInformacion = e => {
        guardarDatos({
            ...datos, [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = e => {
        e.preventDefault();

        if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        // una base de 2000

        let resultado = 2000;

        // Obtener diferencia de año
        const diferencia = obtenerDiferenciaYear(year);

        // por cada año restar un 3%
        resultado -= ((diferencia * 3) * resultado / 100);
        // americano 15
        // asiatico 5
        // europeo 30
        resultado = calcularMarca(marca) * resultado;
        // Básico aumenta 20%
        // Completo aumenta 50%

        const incrementoPlan = calcularPlan(plan);

        // pasear el numero para que quede como
        //numero decimal y poner dos numeros de mas como decimales
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
        guardarCargando(true);
        setTimeout(() => {
            guardarCargando(false)
            guardarResumen({
                cotizacion: resultado,
                datos
            })
        }, 3000)

    }
    return (
        <form onSubmit={cotizarSeguro}>

            {error ? <Error>Todos los campos son obligatorios</Error> : null}
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obternerInformacion}
                >
                    <option value="">---Seleccione---</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiático</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obternerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === 'basico'}
                    onChange={obternerInformacion}
                /> Básico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === 'completo'}
                    onChange={obternerInformacion}
                /> Completo
            </Campo>
            <Buttom
                type="submit"
            >Cotizar</Buttom>
        </form>
    );
}

export default Formulario
