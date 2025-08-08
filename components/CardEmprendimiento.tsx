import { MapPin } from "lucide-react"

interface CardEmprendimientoProps {
  nombre: string
  descripcion: string
  imagen: string
  ubicacion: string
  categoria: string
}

export default function CardEmprendimiento({
  nombre,
  descripcion,
  imagen,
  ubicacion,
  categoria,
}: CardEmprendimientoProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105 border border-purple-100">
      {/* Imagen */}
      <div className="aspect-video overflow-hidden">
        <img
          src={imagen || "/placeholder.svg?height=200&width=300"}
          alt={nombre}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{nombre}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{descripcion}</p>

        {/* Footer de la card */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <MapPin className="h-4 w-4" />
            <span>{ubicacion}</span>
          </div>
          <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs font-medium rounded-full">
            {categoria}
          </span>
        </div>
      </div>
    </div>
  )
}
