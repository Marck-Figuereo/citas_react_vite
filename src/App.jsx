
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import ListadoPacientes from "./componentes/ListadoPacientes";
import { useState, useEffect } from "react";


function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(()=>{

    const obtenerLS = ()=>{
      //sino existe nada agrega el objeto vacio
      console.log(localStorage.getItem('pacientes'))
      const pacienteLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      console.log(pacienteLS)
      setPacientes(pacienteLS)
    }
    obtenerLS()

  },[])



  useEffect(()=>{

      localStorage.setItem('pacientes', JSON.stringify(pacientes))

  },[pacientes])

  const eliminarPaciente = id =>{

    const pacienteActualizados = pacientes.filter(paciente => paciente.id !== id)

    setPacientes(pacienteActualizados)

  }

  return (    
          <div className="container mx-auto mt-20">
            <Header/>
            <div className="mt-12 md:flex">
              <Formulario 
                pacientes={pacientes}         
                setPacientes={setPacientes}
                paciente={paciente}
                setPaciente={setPaciente}
              
              />
              <ListadoPacientes
                pacientes={pacientes}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            </div>
          </div>
          )
}

export default App
