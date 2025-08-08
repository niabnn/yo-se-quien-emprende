"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardEmprendimiento from "../components/CardEmprendimiento";
import { Search, Users, TrendingUp, Star } from "lucide-react";
import EstadisticasDestacadas from "@/components/EstadisticasDestacadas";
import Filtros from "@/components/Filtros";
import ListaEmprendimientos from "@/components/ListaEmprendimientos";

const emprendimientos = [
  {
    id: 1,
    nombre: "Café Artesanal Luna",
    descripcion:
      "Café de especialidad tostado localmente con granos orgánicos de la región.",
    imagen: "/placeholder.svg?height=200&width=300",
    ubicacion: "Centro Histórico",
    categoria: "Gastronomía",
  },
  {
    id: 2,
    nombre: "Textiles Andinos",
    descripcion:
      "Ropa y accesorios tejidos a mano con técnicas tradicionales ancestrales.",
    imagen: "/placeholder.svg?height=200&width=300",
    ubicacion: "Zona Norte",
    categoria: "Artesanías",
  },
  {
    id: 3,
    nombre: "EcoVerde Plantas",
    descripcion:
      "Vivero especializado en plantas nativas y sistemas de jardinería sostenible.",
    imagen: "/placeholder.svg?height=200&width=300",
    ubicacion: "Zona Sur",
    categoria: "Agricultura",
  },
  {
    id: 4,
    nombre: "Tech Solutions",
    descripcion:
      "Desarrollo de aplicaciones móviles y soluciones digitales para pequeñas empresas.",
    imagen: "/placeholder.svg?height=200&width=300",
    ubicacion: "Zona Empresarial",
    categoria: "Tecnología",
  },
  {
    id: 5,
    nombre: "Panadería Tradicional",
    descripcion:
      "Pan artesanal horneado diariamente con recetas familiares de tres generaciones.",
    imagen: "/placeholder.svg?height=200&width=300",
    ubicacion: "Centro Histórico",
    categoria: "Gastronomía",
  },
  {
    id: 6,
    nombre: "Moda Sostenible",
    descripcion:
      "Ropa eco-friendly diseñada y producida con materiales reciclados y orgánicos.",
    imagen: "/placeholder.svg?height=200&width=300",
    ubicacion: "Zona Norte",
    categoria: "Moda",
  },
];

export default function Home() {
  const [categoriaFiltro, setCategoriaFiltro] = useState("all");
  const [ubicacionFiltro, setUbicacionFiltro] = useState("all");

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

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Descubre quién{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                emprende
              </span>{" "}
              en Medellín
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
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
      <ListaEmprendimientos
        emprendimientosFiltrados={emprendimientosFiltrados}
      />
      <Footer />
    </div>
  );
}
