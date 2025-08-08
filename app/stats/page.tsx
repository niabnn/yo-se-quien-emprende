import Navbar from "@components/Navbar"
import Footer from "@components/Footer"
import ChartPlaceholder from "@components/ChartPlaceholder"

const estadisticasTabla = [
  { region: "Centro Histórico", emprendimientos: 45, categoria_principal: "Gastronomía", ingresos: "$120,000" },
  { region: "Zona Norte", emprendimientos: 32, categoria_principal: "Artesanías", ingresos: "$85,000" },
  { region: "Zona Sur", emprendimientos: 28, categoria_principal: "Agricultura", ingresos: "$75,000" },
  { region: "Zona Este", emprendimientos: 38, categoria_principal: "Tecnología", ingresos: "$95,000" },
  { region: "Zona Oeste", emprendimientos: 25, categoria_principal: "Moda", ingresos: "$65,000" },
]

export default function Stats() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <Navbar />

      <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Estadísticas de{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Emprendimientos
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Datos y métricas que reflejan el crecimiento y impacto de los emprendimientos en nuestra región.
            </p>
          </div>

          {/* Métricas destacadas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">168</div>
              <div className="text-gray-600">Emprendimientos Totales</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">$440K</div>
              <div className="text-gray-600">Ingresos Generados</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Regiones Activas</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-orange-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
              <div className="text-gray-600">Categorías</div>
            </div>
          </div>

          {/* Gráficas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <ChartPlaceholder
              title="Emprendimientos por Región"
              type="bar"
              description="Distribución geográfica de los negocios registrados"
            />
            <ChartPlaceholder
              title="Distribución por Categoría"
              type="pie"
              description="Porcentaje de emprendimientos por sector"
            />
          </div>

          {/* Tabla de datos */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">Resumen por Región</h2>
              <p className="text-gray-600 mt-1">
                Datos detallados de emprendimientos, categorías principales e ingresos por región
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Región
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Emprendimientos
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categoría Principal
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ingresos Estimados
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Promedio por Negocio
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {estadisticasTabla.map((fila, index) => (
                    <tr key={index} className="hover:bg-purple-50/50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{fila.region}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{fila.emprendimientos}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                          {fila.categoria_principal}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{fila.ingresos}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          $
                          {Math.round(
                            Number.parseInt(fila.ingresos.replace(/[$,]/g, "")) / fila.emprendimientos,
                          ).toLocaleString()}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Insights adicionales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tendencias de Crecimiento</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Nuevos emprendimientos (mes)</span>
                  <span className="font-semibold text-green-600">+12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Crecimiento mensual</span>
                  <span className="font-semibold text-green-600">+7.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Categoría en crecimiento</span>
                  <span className="font-semibold text-purple-600">Tecnología</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Datos Destacados</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Región más activa</span>
                  <span className="font-semibold text-blue-600">Centro Histórico</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Promedio de calificación</span>
                  <span className="font-semibold text-blue-600">4.8/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Empleos generados</span>
                  <span className="font-semibold text-blue-600">~420</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
