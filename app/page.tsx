"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EstadisticasDestacadas from "@/components/EstadisticasDestacadas";
import Filtros from "@/components/Filtros";
import ListaEmprendimientos from "@/components/ListaEmprendimientos";

type Emprendimiento = {
  id: number | string;
  nombre: string;
  descripcion: string;
  imagen: string;
  ubicacion: string;
  categoria: string;
};

export default function Home() {
  const [emprendimientos, setEmprendimientos] = useState<Emprendimiento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [categoriaFiltro, setCategoriaFiltro] = useState("all");
  const [ubicacionFiltro, setUbicacionFiltro] = useState("all");

  useEffect(() => {
  const fetchEmpr = async () => {
    try {
      const res = await fetch("/api");

      if (!res.ok) {
        const text = await res.text(); // Captura la respuesta de error del servidor
        throw new Error(`Error al cargar emprendimientos: ${res.status} - ${text}`);
      }

      const data = await res.json();

      // Normalizar datos para evitar undefined
      const normalizados: Emprendimiento[] = data.map((emp: any) => ({
        id: emp.id, // puede ser number o string
        nombre: emp.nombre ?? "",
        descripcion: emp.descripcion ?? "",
        imagen: emp.imagen ?? "/placeholder.svg?height=200&width=300",
        ubicacion: emp.ubicacion ?? "",
        categoria: emp.categoria ?? "",
      }));

      setEmprendimientos(normalizados);
    } catch (err: any) {
      console.error("Error al obtener emprendimientos:", err);
      setError(err.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };
  fetchEmpr();
}, []);


  const emprendimientosFiltrados = emprendimientos.filter((emp) => {
    const matchCategoria =
      categoriaFiltro === "all" || emp.categoria === categoriaFiltro;
    const matchUbicacion =
      ubicacionFiltro === "all" || emp.ubicacion === ubicacionFiltro;
    return matchCategoria && matchUbicacion;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <Navbar />

<section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center py-16">
      {/* Imagen tipo logo/banner */}
      <img
        src="/social.png"
        alt="Banner Yo sé quién, emprende"
        className="mx-auto mb-8 w-40 sm:w-48 md:w-56"
      />

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Descubre quién{" "}
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          emprende
        </span>{" "}
        en Medellín
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Conecta con emprendedores locales, descubre negocios únicos y
        apoya el crecimiento de tu región.
      </p>
      <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-lg font-semibold transition-all hover:scale-105">
        Explorar emprendimientos
      </button>
    </div>
  </div>
</section>




      <EstadisticasDestacadas />
      <Filtros
        categoriaFiltro={categoriaFiltro}
        setCategoriaFiltro={setCategoriaFiltro}
        ubicacionFiltro={ubicacionFiltro}
        setUbicacionFiltro={setUbicacionFiltro}
      />

      {loading ? (
        <div className="text-center py-12">Cargando emprendimientos...</div>
      ) : error ? (
        <div className="text-center py-12 text-red-600">{error}</div>
      ) : (
        <ListaEmprendimientos emprendimientosFiltrados={emprendimientosFiltrados} />
      )}

      <Footer />
    </div>
  );
}
