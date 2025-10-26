import { silksongData } from '../todelete/silksongData'
import { Link } from 'react-router-dom'
import { API_URL_IMG } from '../App';
import { useTranslation } from 'react-i18next';

const Home = () => {
	const { t } = useTranslation();

return (
	<div className="container mx-auto px-4 py-8 pt-36 pb-20">
		
	{/* Hero Section */}
		<section className="text-center mb-12">
			<h1 className="text-5xl font-bold mb-7 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
			{t('title')}
			</h1>
			<p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
			{t('description')}
			</p>
			<div className="bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
				<div className="bg-gray-700 p-4 rounded">
				<p className="text-yellow-400 font-semibold">{t('status')}</p>
				<p className="text-green-400">{t('statusValue')}</p>
				</div>
				<div className="bg-gray-700 p-4 rounded">
				<p className="text-yellow-400 font-semibold">{t('developer')}</p>
				<p className="text-gray-300">{t('developerValue')}</p>
				</div>
				<div className="bg-gray-700 p-4 rounded">
				<p className="text-yellow-400 font-semibold">{t('platforms')}</p>
				<p className="text-gray-300">{t('platformsValue')}</p>
				</div>
			</div>
			</div>
		</section>

		{/* Quick Links */}
		<section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
			<Link 
			to="/characters" 
			className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors group"
			>
			<div className="mb-4 flex">
				<img 
					src={`${API_URL_IMG}charactere.png`}
					alt="Characters" 
					className="w-20 h-12 rounded-full border-2 border-yellow-300 object-cover"
				/>
			</div>
			<h2 className="text-2xl font-bold mb-2 text-yellow-400 group-hover:text-yellow-300">
				{t('charactersTitle')}
			</h2>
			<p className="text-gray-300">
				{t('charactersDescription')}
			</p>
			<div className="mt-4 text-yellow-400 group-hover:text-yellow-300">
				{t('charactersLink')}
			</div>
			</Link>

			<Link 
			to="/bosses" 
			className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors group"
			>
			<div className="mb-4 flex">
				<img 
					src={`${API_URL_IMG}game.png`}
					alt="Characters" 
					className="w-100 h-12 rounded-full border-2 border-red-400 object-cover"
				/>
			</div>
			<h2 className="text-2xl font-bold mb-2 text-red-400 group-hover:text-red-300">
				{t('bossesTitle')}
			</h2>
			<p className="text-gray-300">
				{t('bossesDescription')}
			</p>
			<div className="mt-4 text-red-400 group-hover:text-red-300">
				{t('bossesLink')}
			</div>
			</Link>
		</section>

		{/* Features Preview */}
		<section className="mt-16 max-w-4xl mx-auto">  <h2 className="mb-8 text-4xl font-bold text-center text-white drop-shadow-lg">
    {t('sectionTitle')}
  </h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="bg-gray-800 p-6 rounded-lg text-center">
					<div className="mb-4 flex justify-center">
						<img
							src={`${API_URL_IMG}hornet.png`}
							alt="Characters" 
							className="w-12 h-12 rounded-full border-2 border-pink-400 object-cover"
						/>
					</div>
					<h3 className="text-pink-400 text-xl font-semibold mb-2">{t('feature1Title')}</h3>
					<p className="text-gray-300">{t('feature1Description')}</p>
				</div>
				<div className="bg-gray-800 p-6 rounded-lg text-center">
					<div className="mb-4 flex justify-center">
						<img
							src={`${API_URL_IMG}start.png`}
							alt="Characters" 
							className="w-12 h-12 rounded-full border-2 border-yellow-300 object-cover"
						/>
					</div>
					<h3 className="text-yellow-300 text-xl font-semibold mb-2">{t('feature2Title')}</h3>
					<p className="text-gray-300">{t('feature2Description')}</p>
				</div>
				<div className="bg-gray-800 p-6 rounded-lg text-center">
					<div className="mb-4 flex justify-center">
						<img
							src={`${API_URL_IMG}scary.png`}
							alt="Characters" 
							className="w-12 h-12 rounded-full border-2 border-red-400 object-cover"
						/>
					</div>
					<h3 className="text-red-400 text-xl font-semibold mb-2">{t('feature3Title')}</h3>
					<p className="text-gray-300">{t('feature3Description')}</p>
				</div>
			</div>
		</section>

		<section className="mt-16 max-w-4xl mx-auto">
			
			<div className="bg-gradient-to-br from-orange-600/30 via-red-500/30 to-amber-600/30 rounded-2xl p-8 shadow-2xl backdrop-blur-sm border border-orange-400/20">
				<h2 className="text-4xl font-bold text-center text-white drop-shadow-lg">{t('wikiTitle')}</h2>
			
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center p-6">
					{/* Add Boss Button - Simple */}
					
					<Link 
					to="/addcharacters" 
					className="text-gray-300 hover:text-white transition-colors font-medium"
					>			
						<button className="group relative bg-gradient-to-r from-red-700 to-orange-600 rounded-xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-orange-500/50 min-w-64">
							<div className="text-center">
							<div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-3 border border-orange-300/80">
								<span className="text-xl">🔥</span>
							</div>
							<h3 className="text-xl font-bold text-white mb-1">{t('addCharacterButton')}</h3>
							</div>
						</button>
					</Link>

					<Link 
						to="/addbosses" 
						className="text-gray-300 hover:text-white transition-colors font-medium"
						>	
						{/* Add Character Button - Simple */}
						<button className="group relative bg-gradient-to-r from-blue-700 to-purple-600 rounded-xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-500/50 min-w-64">
							<div className="text-center">
							<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-3 border border-purple-300/80">
								<span className="text-xl">⚡</span>
							</div>
							<h3 className="text-xl font-bold text-white mb-1">{t('addBossButton')}</h3>
							</div>
						</button>
					</Link>
				</div>
			</div>
		</section>
	</div>
)
}

export default Home