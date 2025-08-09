import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Yo sé quién, emprende
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Conectamos emprendedores locales con su comunidad, fomentando el crecimiento económico y social de nuestra
              región.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/#emprendimientos" className="text-gray-300 hover:text-white transition-colors">
                  Emprendimientos
                </a>
              </li>
              <li>
                <a href="/stats" className="text-gray-300 hover:text-white transition-colors">
                  Estadísticas
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-purple-400 mr-3" />
                <span className="text-gray-300">+57 300 000 000</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-purple-400 mr-3" />
                <span className="text-gray-300">info@yosquienemprende.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-purple-400 mr-3" />
                <span className="text-gray-300">Centro de la Ciudad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Yo sé quién, emprende. Todos los derechos reservados. Desarrollado con ❤️ para la comunidad
            emprendedora gracias a Talento Tech Medellin.
          </p>
        </div>
      </div>
    </footer>
  )
}
