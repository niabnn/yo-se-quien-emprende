"use client"

import type React from "react"

import Sidebar from "../../components/Sidebar"
import { Upload, Save } from "lucide-react"
import { useState } from "react"

export default function NewEmprendimiento() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <div className="pt-16">
        <Sidebar />

        <div className="ml-64 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Añadir Nuevo Emprendimiento</h1>
            <p className="text-gray-600">
              Completa la información de tu emprendimiento para que otros puedan conocerlo.
            </p>
          </div>

          {/* Formulario */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre del emprendimiento *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Ej: Café Artesanal Luna"
                  />
                </div>

                <div>
                  <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-2">
                    Categoría *
                  </label>
                  <select
                    id="categoria"
                    name="categoria"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="">Selecciona una categoría</option>
                    <option value="gastronomia">Gastronomía</option>
                    <option value="artesanias">Artesanías</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="moda">Moda</option>
                    <option value="agricultura">Agricultura</option>
                    <option value="servicios">Servicios</option>
                    <option value="educacion">Educación</option>
                    <option value="salud">Salud y Bienestar</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="ubicacion" className="block text-sm font-medium text-gray-700 mb-2">
                  Ubicación *
                </label>
                <select
                  id="ubicacion"
                  name="ubicacion"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="">Selecciona la ubicación</option>
                  <option value="centro">Centro Histórico</option>
                  <option value="norte">Zona Norte</option>
                  <option value="sur">Zona Sur</option>
                  <option value="este">Zona Este</option>
                  <option value="oeste">Zona Oeste</option>
                  <option value="empresarial">Zona Empresarial</option>
                </select>
              </div>

              <div>
                <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-2">
                  Descripción *
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Describe tu emprendimiento, qué ofreces, qué te hace único..."
                />
              </div>

              <div>
                <label htmlFor="contacto" className="block text-sm font-medium text-gray-700 mb-2">
                  Información de contacto
                </label>
                <input
                  id="contacto"
                  name="contacto"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Teléfono, email, redes sociales..."
                />
              </div>

              {/* Upload de imagen */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Imagen del emprendimiento</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
                  {selectedImage ? (
                    <div className="space-y-4">
                      <img
                        src={selectedImage || "/placeholder.svg"}
                        alt="Preview"
                        className="mx-auto h-32 w-32 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => setSelectedImage(null)}
                        className="text-sm text-purple-600 hover:text-purple-700"
                      >
                        Cambiar imagen
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div>
                        <label htmlFor="imagen" className="cursor-pointer">
                          <span className="text-purple-600 hover:text-purple-700 font-medium">Haz clic para subir</span>
                          <span className="text-gray-500"> o arrastra y suelta</span>
                        </label>
                        <input
                          id="imagen"
                          name="imagen"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Botones */}
              <div className="flex justify-end space-x-4 pt-6">
                <button
                  type="button"
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Guardar emprendimiento
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
