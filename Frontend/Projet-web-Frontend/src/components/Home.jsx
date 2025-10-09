import { silksongData } from '../data/silksongData'
import { Link } from 'react-router-dom'

const Home = () => {
const { gameInfo } = silksongData

return (
	<div className="container mx-auto px-4 py-8">
		
	{/* Hero Section */}
		<section className="text-center mb-12">
			<h1 className="text-5xl font-bold mb-7 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
			{gameInfo.title}
			</h1>
			<p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
			{gameInfo.description}
			</p>
			<div className="bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
				<div className="bg-gray-700 p-4 rounded">
				<p className="text-yellow-400 font-semibold">Status</p>
				<p className="text-green-400">{gameInfo.releaseStatus}</p>
				</div>
				<div className="bg-gray-700 p-4 rounded">
				<p className="text-yellow-400 font-semibold">Developer</p>
				<p className="text-gray-300">{gameInfo.developer}</p>
				</div>
				<div className="bg-gray-700 p-4 rounded">
				<p className="text-yellow-400 font-semibold">Platforms</p>
				<p className="text-gray-300">{gameInfo.platforms.join(', ')}</p>
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
					src="/src/images/charactere.png" 
					alt="Characters" 
					className="w-20 h-12 rounded-full border-2 border-yellow-300 object-cover"
				/>
			</div>
			<h2 className="text-2xl font-bold mb-2 text-yellow-400 group-hover:text-yellow-300">
				Characters
			</h2>
			<p className="text-gray-300">
				Explore the diverse cast of characters you'll meet in the kingdom of Pharloom.
			</p>
			<div className="mt-4 text-yellow-400 group-hover:text-yellow-300">
				View {silksongData.characters.length} characters →
			</div>
			</Link>

			<Link 
			to="/bosses" 
			className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors group"
			>
			<div className="mb-4 flex">
				<img 
					src="/src/images/boss2.png" 
					alt="Characters" 
					className="w-100 h-12 rounded-full border-2 border-red-400 object-cover"
				/>
			</div>
			<h2 className="text-2xl font-bold mb-2 text-red-400 group-hover:text-red-300">
				Bosses
			</h2>
			<p className="text-gray-300">
				Discover the formidable bosses that await Hornet in her journey.
			</p>
			<div className="mt-4 text-red-400 group-hover:text-red-300">
				View {silksongData.bosses.length} bosses →
			</div>
			</Link>
		</section>

		{/* Features Preview */}
		<section className="mt-16 max-w-4xl mx-auto">
			<h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent">What to Expect</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="bg-gray-800 p-6 rounded-lg text-center">
					<div className="mb-4 flex justify-center">
						<img 
							src="/src/images/hornet.jpg" 
							alt="Characters" 
							className="w-12 h-12 rounded-full border-2 border-pink-400 object-cover"
						/>
					</div>
					<h3 className="text-pink-400 text-xl font-semibold mb-2">New Protagonist</h3>
					<p className="text-gray-300">Play as Hornet with her unique silk-based abilities and combat style.</p>
				</div>
				<div className="bg-gray-800 p-6 rounded-lg text-center">
					<div className="mb-4 flex justify-center">
						<img 
							src="/src/images/start.png" 
							alt="Characters" 
							className="w-12 h-12 rounded-full border-2 border-yellow-300 object-cover"
						/>
					</div>
					<h3 className="text-yellow-300 text-xl font-semibold mb-2">New Kingdom</h3>
					<p className="text-gray-300">Explore the vast, haunted kingdom of Pharloom with all-new areas to discover.</p>
				</div>
				<div className="bg-gray-800 p-6 rounded-lg text-center">
					<div className="mb-4 flex justify-center">
						<img 
							src="/src/images/scary.png" 
							alt="Characters" 
							className="w-12 h-12 rounded-full border-2 border-red-400 object-cover"
						/>
					</div>
					<h3 className="text-red-400 text-xl font-semibold mb-2">Challenging Combat</h3>
					<p className="text-gray-300">Face over 150 new enemies and formidable bosses in intense combat encounters.</p>
				</div>
			</div>
		</section>
	</div>
)
}

export default Home