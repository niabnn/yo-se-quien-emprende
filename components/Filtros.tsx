import { Search } from "lucide-react";

interface FiltrosProps {
  categoriaFiltro: string;
  setCategoriaFiltro: (value: string) => void;
  ubicacionFiltro: string;
  setUbicacionFiltro: (value: string) => void;
}

export default function Filtros({
  categoriaFiltro,
  setCategoriaFiltro,
  ubicacionFiltro,
  setUbicacionFiltro,
}: FiltrosProps) {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700 font-medium">Filtrar por:</span>
          </div>
          <select
            value={categoriaFiltro}
            onChange={(e) => setCategoriaFiltro(e.target.value)}
            className="px-4 py-2 border border-purple-200 rounded-lg bg-white focus:border-purple-400 focus:outline-none"
          >
            <option value="all">Todas las categorías</option>
            <option value="Gastronomía">Gastronomía</option>
            <option value="Artesanías">Artesanías</option>
            <option value="Tecnología">Tecnología</option>
            <option value="Moda">Moda</option>
            <option value="Agricultura">Agricultura</option>
          </select>
          <select
            value={ubicacionFiltro}
            onChange={(e) => setUbicacionFiltro(e.target.value)}
            className="px-4 py-2 border border-purple-200 rounded-lg bg-white focus:border-purple-400 focus:outline-none"
          >
            <option value="all">Todas las ubicaciones</option>
            <option value="Centro Histórico">Centro Histórico</option>
            <option value="Zona Norte">Zona Norte</option>
            <option value="Zona Sur">Zona Sur</option>
            <option value="Zona Empresarial">Zona Empresarial</option>
          </select>
        </div>
      </div>
    </section>
  );
}
