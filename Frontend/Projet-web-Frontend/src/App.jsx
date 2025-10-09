import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Characters from './components/Characters'
import Bosses from './components/Bosses'
import AddBosses from './components/AddBosses'
import AddCharacters from './components/AddCharacters'
import { useState, useEffect } from 'react';


function App() {

	const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
return (
	<div className="min-h-screen">
		<div 
			className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
			style={{
			backgroundImage: `url('/src/images/game.png')`,
			}}
		/>

			{/* nav */}
			<nav className={`fixed top-0 left-0 right-0 z-50 bg-gray-800/95 backdrop-blur-sm shadow-lg transition-transform duration-300 ${
				isVisible ? 'translate-y-0' : '-translate-y-full'
				}`}>
				<div className="container mx-auto px-4">
					<div className="flex justify-between items-center py-4">
					<Link to="/" >
						<p className="text-2xl font-bold bg-gradient-to-r from-red-400 to-yellow-600 bg-clip-text text-transparent hover:text-yellow-300 transition-colors">
						Silksong Wiki
						</p></Link>
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
						<Link 
						to="/addcharacters" 
						className="text-gray-300 hover:text-white transition-colors font-medium"
						>
						Add new Characters
						</Link>
						<Link 
						to="/addbosses" 
						className="text-gray-300 hover:text-white transition-colors font-medium"
						>
						Add New Bosses
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
				<Route path="/addcharacters" element={<AddCharacters />} />
				<Route path="/addbosses" element={<AddBosses />} />
				</Routes>
			</main>

			{/* Footer */}
			<footer className="bg-gray-800 border-t border-gray-700 py-8">
				<div className="container mx-auto px-4 text-center text-gray-400">
				<p>Silksong Wiki - Fan-made website for Hollow Knight: Silksong</p>
				<p className="mt-2">This is not an official Team Cherry website</p>
				</div>
			</footer>
		</div>
)
}

export default App