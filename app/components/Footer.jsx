"use client"
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Primeira Div - Container principal */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
            {/* Primeira Coluna */}
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <p className="text-sky-500 font-black text-2xl">
                Latinos<span className="text-slate-200 font-semibold">In</span>Success
              </p>
              <p className="mt-4 text-sm text-slate-300 max-w-sm mx-auto lg:mx-0">
              Uniting and uplifting our community for a brighter future
              </p>

              {/* Botões de Redes Sociais */}
              <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                {/* E-mail */}
                <motion.a
                  whileHover={{ scale: 1.1, backgroundColor: '#f56565' }}
                  className="bg-slate-600 p-3 rounded-full flex items-center justify-center"
                  href="mailto:x@x.com"
                >
                  <FaEnvelope size={20} />
                </motion.a>
                {/* LinkedIn */}
                <motion.a
                  whileHover={{ scale: 1.1, backgroundColor: '#0077b5' }}
                  className="bg-slate-600 p-3 rounded-full flex items-center justify-center"
                  href="https://www.linkedin.com"
                >
                  <FaLinkedin size={20} />
                </motion.a>
                {/* Telefone */}
                <motion.a
                  whileHover={{ scale: 1.1, backgroundColor: '#48bb78' }}
                  className="bg-slate-600 p-3 rounded-full flex items-center justify-center"
                  href="tel:+5511999999999"
                >
                  <FaPhone size={20} />
                </motion.a>
              </div>
            </div>

            {/* Segunda Coluna */}
            <div className="hidden lg:block w-1/3 ml-auto">
              <h1 className="text-lg font-semibold mb-4">Links</h1>
              <ul className="space-y-2">
                <li className="text-slate-300">About</li>
                <li className="text-slate-300">Partnerships</li>
                <li className="text-slate-300">Upcoming Events</li>
                <li className="text-slate-300">Resources</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8">
            <hr className="border-slate-600 max-w-2xl mx-auto" />
          </div>

          {/* Segunda Div - Copyright */}
          <div className="text-center">
            <p className="text-sm text-slate-400">Copyright {year} Latinos in Success</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
