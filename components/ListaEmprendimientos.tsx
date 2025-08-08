import CardEmprendimiento from "./CardEmprendimiento";

interface ListaEmprendimientosProps {
  emprendimientosFiltrados: {
    id: string;
    nombre: string;
    descripcion: string;
    imagen: string;
    ubicacion: string;
    categoria: string;
  }[];
}

export default function ListaEmprendimientos({ emprendimientosFiltrados }: ListaEmprendimientosProps) {
  return (
    <section id="emprendimientos" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Emprendimientos Destacados</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce los negocios locales que están transformando nuestra comunidad con innovación y pasión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {emprendimientosFiltrados.map((emprendimiento) => (
            <CardEmprendimiento
              key={emprendimiento.id}
              nombre={emprendimiento.nombre}
              descripcion={emprendimiento.descripcion}
              imagen={emprendimiento.imagen}
              ubicacion={emprendimiento.ubicacion}
              categoria={emprendimiento.categoria}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
