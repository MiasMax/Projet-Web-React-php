import React from 'react';
import { useState, useEffect } from 'react';
import { API_URL_IMG, API_URL } from '../App';
import { useTranslation } from 'react-i18next';

const Bosses = () => {
	const { t,i18n } = useTranslation();

	const getDifficultyColor = (difficulty) => {
		switch (difficulty) {
		case t('Easy'): return 'text-green-400';
		case t('Medium'): return 'text-yellow-400';
		case t('Hard'): return 'text-orange-400';
		case t('Extreme'): return 'text-red-400';
		default: return 'text-black-400';
		}
	};

	const [BossesList, setBossesList] = useState([]); // Initialize state

	useEffect(() => {
		// GET request to fetch bosses by language
		fetch(`${API_URL}api/bosses?lang=${i18n.language}`)
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(data => {
			setBossesList(data);
			console.log("Backend response:", data);
		})
		.catch(error => console.error('Error:', error));
	}, [i18n.language]);

  return (
	<div className="container mx-auto px-4 py-8 pt-36 pb-20">
		<h1 className="text-4xl text-yellow-400 font-bold text-center mb-2">{t('bossesTitle')}</h1>
		<p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
			{t('BossesText')}
		</p>
		
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
			{BossesList.map(boss => (
					<div key={boss.id} className="bg-gray-800/80 rounded-xl overflow-hidden shadow-2xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-600/50 backdrop-blur-sm">	
						<div className="bg-gradient-to-r from-red-900 via-purple-800 to-indigo-900 p-6 relative">
							
							<div className="flex items-center justify-between">
							<div className="flex items-center space-x-6">
								{/* Boss Avatar */}
								<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-sm opacity-30"></div>
								<img 
									src={`${API_URL_IMG}${boss.image}`}
									alt={boss.name}
									className="w-32 h-32 rounded-full border-4 border-yellow-400/80 object-cover relative z-10 shadow-lg"
								/>
								</div>
								
								{/* Boss Info */}
								<div className="flex-1">
								<div className="flex items-center gap-4 mb-2">
									<h2 className="text-3xl font-bold text-white drop-shadow-sm">{boss.name}</h2>
									<span className={`px-4 py-1.5 rounded-full text-sm font-bold ${getDifficultyColor(boss.difficulty)} border-2 border-current shadow-sm text-center`}>
									{boss.difficulty}
									</span>
								</div>
								<p className="text-gray-200 text-lg font-medium">{boss.title}</p>
								</div>
							</div>
							</div>
						</div>
						
						{/* Content Section */}
						<div className="p-6 space-y-6">
							{/* Location */}
							<div className="flex items-center bg-gray-900/50 rounded-lg p-4 border border-gray-700">
							<span className="text-gray-400 font-medium mr-3">📍</span>
							<div>
								<span className="text-gray-400 text-sm block">{t('Location')}</span>
								<span className="text-yellow-300 font-semibold text-lg">{boss.location}</span>
							</div>
							</div>
							
							{/* Description */}
							<div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700">
							<p className="text-gray-200 leading-relaxed text-lg">{boss.description}</p>
							</div>
							
							{/* Attacks & Rewards Grid */}
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
							{/* Attacks */}
							<div className="bg-gray-900/50 rounded-xl p-5 border border-red-900/30">
								<div className="flex items-center mb-4">
								<div className="w-2 h-6 bg-red-500 rounded-full mr-3"></div>
								<h3 className="font-bold text-red-400 text-xl">{t('Attacks')}</h3>
								</div>
								<ul className="space-y-3">
								{boss.attacks.map((attack, index) => (
									<li key={index} className="text-gray-200 flex items-start group hover:translate-x-1 transition-transform">
									<span className="text-red-400 mr-3 mt-1 text-lg">⚔️</span>
									<span className="leading-relaxed group-hover:text-white transition-colors">{attack}</span>
									</li>
								))}
								</ul>
							</div>
							
							{/* Rewards */}
							<div className="bg-gray-900/50 rounded-xl p-5 border border-green-900/30">
								<div className="flex items-center mb-4">
								<div className="w-2 h-6 bg-green-500 rounded-full mr-3"></div>
								<h3 className="font-bold text-green-400 text-xl">{t('Rewards')}</h3>
								</div>
								<ul className="space-y-3">
								{boss.rewards.map((reward, index) => (
									<li key={index} className="text-gray-200 flex items-start group hover:translate-x-1 transition-transform">
									<span className="text-green-400 mr-3 mt-1 text-lg">🎁</span>
									<span className="leading-relaxed group-hover:text-white transition-colors">{reward}</span>
									</li>
								))}
								</ul>
							</div>
							</div>
						</div>
						</div>
			))}
		</div>
	</div>
  );
};

export default Bosses;