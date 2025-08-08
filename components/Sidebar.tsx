import Link from "next/link"
import { Home, Store, Plus, LogOut, BarChart3 } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed left-0 top-16 border-r border-purple-100">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Panel de Usuario</h2>

        <nav className="space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/dashboard/emprendimientos"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
          >
            <Store className="h-5 w-5" />
            <span>Mis Emprendimientos</span>
          </Link>

          <Link
            href="/dashboard/new"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
          >
            <Plus className="h-5 w-5" />
            <span>Añadir Emprendimiento</span>
          </Link>

          <Link
            href="/stats"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
          >
            <BarChart3 className="h-5 w-5" />
            <span>Estadísticas</span>
          </Link>

          <div className="pt-4 border-t border-gray-200 mt-4">
            <button className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors w-full text-left">
              <LogOut className="h-5 w-5" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}
