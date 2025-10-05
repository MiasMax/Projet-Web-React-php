import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Characters from './components/Characters'
import Bosses from './components/Bosses'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
              🕷️ Silksong Wiki
            </Link>
            <div className="space-x-6">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                to="/characters" 
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Characters
              </Link>
              <Link 
                to="/bosses" 
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Bosses
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/bosses" element={<Bosses />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Silksong Wiki - Fan-made website for Hollow Knight: Silksong</p>
          <p className="mt-2">This is not an official Team Cherry website</p>
        </div>
      </footer>
    </div>
  )
}

export default App