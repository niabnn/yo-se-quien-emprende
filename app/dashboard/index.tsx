import Sidebar from "../../components/Sidebar"
import { Edit, Trash2, Plus } from "lucide-react"
import Link from "next/link"

const emprendimientosUsuario = [
  {
    id: 1,
    nombre: "Café Artesanal Luna",
    categoria: "Gastronomía",
    ubicacion: "Centro Histórico",
    estado: "Activo",
  },
  {
    id: 2,
    nombre: "Textiles Andinos",
    categoria: "Artesanías",
    ubicacion: "Zona Norte",
    estado: "Activo",
  },
  {
    id: 3,
    nombre: "EcoVerde Plantas",
    categoria: "Agricultura",
    ubicacion: "Zona Sur",
    estado: "Pendiente",
  },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <div className="pt-16">
        <Sidebar />

        <div className="ml-64 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Hola María, bienvenida a tu panel</h1>
            <p className="text-gray-600">Gestiona tus emprendimientos y revisa el rendimiento de tu negocio.</p>
          </div>

          {/* Estadísticas rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Emprendimientos</h3>
              <p className="text-3xl font-bold text-purple-600">3</p>
              <p className="text-sm text-gray-600">Total registrados</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-green-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visualizaciones</h3>
              <p className="text-3xl font-bold text-green-600">1,247</p>
              <p className="text-sm text-gray-600">Este mes</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Calificación</h3>
              <p className="text-3xl font-bold text-blue-600">4.8</p>
              <p className="text-sm text-gray-600">Promedio</p>
            </div>
          </div>

          {/* Tabla de emprendimientos */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">Mis Emprendimientos</h2>
                <Link
                  href="/dashboard/new"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Añadir nuevo emprendimiento
                </Link>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nombre
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categoría
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ubicación
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {emprendimientosUsuario.map((emprendimiento) => (
                    <tr key={emprendimiento.id} className="hover:bg-purple-50/50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{emprendimiento.nombre}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{emprendimiento.categoria}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{emprendimiento.ubicacion}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            emprendimiento.estado === "Activo"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {emprendimiento.estado}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-purple-600 hover:text-purple-900 p-1 hover:bg-purple-50 rounded">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900 p-1 hover:bg-red-50 rounded">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
