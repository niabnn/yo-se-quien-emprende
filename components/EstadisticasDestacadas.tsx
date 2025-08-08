import { Users, TrendingUp, Star } from "lucide-react";

export default function EstadisticasDestacadas() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">168</div>
            <div className="text-gray-600">Emprendimientos Activos</div>
          </div>
          <div className="text-center bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
            <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">$440K</div>
            <div className="text-gray-600">Ingresos Generados</div>
          </div>
          <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
            <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">4.8</div>
            <div className="text-gray-600">Calificación Promedio</div>
          </div>
        </div>
      </div>
    </section>
  );
}
