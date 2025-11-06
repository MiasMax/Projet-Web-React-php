import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Characters from './components/Characters'
import Bosses from './components/Bosses'
import AddBosses from './components/AddBosses'
import AddCharacters from './components/AddCharacters'
import LanguageSwitcher from './components/LanguageSwitcher'
import ThemeToggleButton from './components/ThemeToggleButton'
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
export const API_URL_IMG = 'http://localhost/public/images/';
export const API_URL = 'http://localhost/';

function App() {

	const { t } = useTranslation();	
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
				backgroundImage: `url('${API_URL_IMG}game.png')`,
			}}
		/>		
		<div className="fixed top-20 right-6 z-50 flex flex-col gap-2 bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/20 shadow-lg">
			<LanguageSwitcher />
			<ThemeToggleButton />
		</div>

			{/* nav */}
			<nav className={`fixed top-0 left-0 right-0 z-50 bg-gray-100 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg transition-transform duration-300 ${
				isVisible ? 'translate-y-0' : '-translate-y-full'
				}`}>

				<div className="container mx-auto px-4">
					<div className="flex justify-between items-center py-4">		
						
					<Link to="/" >
						<p className="text-2xl font-bold bg-gradient-to-r from-red-400 to-yellow-600 bg-clip-text text-transparent hover:text-yellow-300 transition-colors">
						{t('mainTitle')}
						</p></Link>
							

					<div className="space-x-6">
						<Link 
						to="/" 
						className="text-gray-700 dark:text-gray-300 transition-colors font-medium"
						>
						{t('home')}
						</Link>
						<Link 
						to="/characters" 
						className="text-gray-700 dark:text-gray-300 transition-colors font-medium"
						>
						Characters
						</Link>
						<Link 
						to="/bosses" 
						className="text-gray-700 dark:text-gray-300 transition-colors font-medium"
						>
						Bosses
						</Link>
						<Link 
						to="/addcharacters" 
						className="text-gray-700 dark:text-gray-300 transition-colors font-medium"
						>
						{t('addChara')}
						</Link>
						<Link 
						to="/addbosses" 
						className="text-gray-700 dark:text-gray-300 transition-colors font-medium"
						>
						{t('addBoss')}
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
			<footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-700 py-8">
				<div className="container mx-auto px-4 text-center text-gray-400">
				<p>{t('footer')}</p>
				<p className="mt-2">{t('disclaimer')}</p>
				</div>
			</footer>
		</div>
)
}

export default App