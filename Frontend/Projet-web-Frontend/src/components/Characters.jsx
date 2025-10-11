import React from 'react';
import { useState, useEffect } from 'react';
import { API_URL_IMG } from '../App';

const Characters = () => {

	const [charactersList, setCharactersList] = useState([]); // Initialize state

	useEffect(() => {
		fetch('http://localhost/api/characters', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		}
		})
		.then(response => response.json())
		.then(data => {
		setCharactersList(data); // Update state with data
		console.log(data); // This will show the data
		})
		.catch(error => console.error('Error:', error));
	}, []);

	return (
		<div className="container mx-auto px-4 py-8 pt-36 pb-20">
			<h1 className="text-4xl text-yellow-400 font-bold text-center mb-2">Characters</h1>
			<p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
				Meet the inhabitants of Pharloom - allies, enemies, and mysterious figures you'll encounter in your journey.
			</p>
			
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
				{charactersList.map(character => (

					<div key={character.id} className="bg-slate-900/80 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 border border-red-600/40 backdrop-blur-sm">
					<div className="bg-gradient-to-br from-red-900 via-orange-800 to-yellow-800 p-8 text-center relative overflow-hidden">
						{/* Lava texture overlay */}
						<div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-500/10 to-yellow-400/5 mix-blend-overlay"></div>
						
						<div className="mb-6 flex justify-center relative z-10">
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 rounded-full blur-xl opacity-40 animate-pulse"></div>
							<div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 rounded-full blur-lg opacity-60 animate-pulse delay-75"></div>
							<img
								src={`${API_URL_IMG}${character.image}`}
								alt={character.name}
								className="w-36 h-36 rounded-full border-4 border-orange-300/90 object-cover relative z-10 shadow-2xl"
							/>
						</div>
						</div>
						
						<div className="relative z-10">
						<h2 className="text-4xl font-bold bg-gradient-to-r from-orange-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent drop-shadow mb-3">
							{character.name}
						</h2>
						<p className="text-orange-100 italic text-lg mb-4 font-light">{character.title}</p>
						<span className="inline-block px-6 py-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-full text-sm font-bold text-white border border-orange-400/50 shadow-lg">
							{character.role}
						</span>
						</div>
					</div>
					
					<div className="p-7 space-y-6 bg-gradient-to-b from-slate-900/90 to-slate-800/90">
						<div className="bg-gradient-to-r from-red-900/30 to-orange-900/20 rounded-xl p-5 border-l-4 border-orange-500">
						<p className="text-orange-50 leading-relaxed text-base font-medium">{character.description}</p>
						</div>
						
						<div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 rounded-xl p-5 border border-orange-600/30">
						<div className="flex items-center mb-5">
							<div className="w-2 h-8 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 rounded-full mr-4"></div>
							<h3 className="font-bold text-xl tracking-wide bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
							ABILITIES & TRAITS
							</h3>
						</div>
						<ul className="space-y-3">

							{character.abilities.map((ability, index) => (
							<li key={index} className="text-orange-100 flex items-start group ">
								<div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
								<span className="leading-relaxed font-medium group-hover:text-yellow-100 transition-colors">{ability}</span>
							</li>
							))}
						</ul>
						</div>
					</div>
				</div>

			))}
		</div>
	</div>
  );
};

export default Characters;