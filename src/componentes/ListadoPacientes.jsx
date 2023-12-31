import Pacientes from "./Pacientes"


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {''}
              <span className="font-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map( paciente => (

            <Pacientes 
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
            />

          ))}
        </>


      ) : (
        
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando pacientes {''}
              <span className="font-indigo-600 font-bold">y se mostraran en este lugar</span>
          </p>
        </>
      
      )}


    </div>
  )
}

export default ListadoPacientes
