import { BarChart3, PieChart } from "lucide-react"

interface ChartPlaceholderProps {
  title: string
  type: "bar" | "pie"
  description?: string
}

export default function ChartPlaceholder({ title, type, description }: ChartPlaceholderProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
      </div>

      <div className="h-64 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center">
        <div className="text-center">
          {type === "bar" ? (
            <BarChart3 className="h-16 w-16 text-purple-400 mx-auto mb-4" />
          ) : (
            <PieChart className="h-16 w-16 text-purple-400 mx-auto mb-4" />
          )}
          <p className="text-gray-500 text-sm">Gráfico de {type === "bar" ? "barras" : "pastel"}</p>
          <p className="text-gray-400 text-xs mt-1">Los datos se cargarán aquí</p>
        </div>
      </div>
    </div>
  )
}
