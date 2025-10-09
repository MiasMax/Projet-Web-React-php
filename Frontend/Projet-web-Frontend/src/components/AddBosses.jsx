import React from 'react';
import { silksongData } from '../data/silksongData';

const Add = () => {

  return (
	<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 to-purple-900/30 pt-36 pb-20">
		<div className="max-w-4xl mx-auto">
			{/* Form Header */}
			<div className="text-center mb-8">
			<h1 className="text-5xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent mb-4">
				Add New Boss
			</h1>
			<p className="text-blue-200 text-lg">Contribute to the boss encyclopedia</p>
			</div>

			{/* Main Form Card */}
			<div className="bg-slate-900/80 rounded-2xl overflow-hidden shadow-2xl border border-blue-600/40 backdrop-blur-sm">
			<div className="bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-800 p-8 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-500/10 to-indigo-400/5 mix-blend-overlay"></div>
				<h2 className="text-3xl font-bold text-blue-100 relative z-10 text-center">Boss Information</h2>
			</div>

			<div className="p-8 space-y-6 bg-gradient-to-b from-slate-900/90 to-slate-800/90">
				{/* Basic Info Section */}
				<div className="bg-gradient-to-r from-blue-900/40 to-purple-900/30 rounded-xl p-6 border border-blue-600/30">
				<div className="flex items-center mb-6">
					<div className="w-2 h-8 bg-gradient-to-b from-blue-400 via-purple-500 to-indigo-600 rounded-full mr-4"></div>
					<h3 className="font-bold text-xl bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
					BASIC INFORMATION
					</h3>
				</div>
				
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
					<label className="block text-blue-200 font-semibold mb-2">Boss Name *</label>
					<input 
						type="text" 
						className="w-full bg-slate-800/80 border border-blue-600/30 rounded-lg px-4 py-3 text-blue-100 placeholder-blue-400/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all"
						placeholder="Enter boss name"
						required
					/>
					</div>
					<div>
					<label className="block text-blue-200 font-semibold mb-2">Title *</label>
					<input 
						type="text" 
						className="w-full bg-slate-800/80 border border-blue-600/30 rounded-lg px-4 py-3 text-blue-100 placeholder-blue-400/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all"
						placeholder="e.g., The Frost Dragon"
						required
					/>
					</div>
					<div>
					<label className="block text-blue-200 font-semibold mb-2">Location *</label>
					<input 
						type="text" 
						className="w-full bg-slate-800/80 border border-blue-600/30 rounded-lg px-4 py-3 text-blue-100 placeholder-blue-400/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all"
						placeholder="e.g., Icepeak Mountain"
						required
					/>
					</div>
					<div>
					<label className="block text-blue-200 font-semibold mb-2">Difficulty *</label>
					<select className="w-full bg-slate-800/80 border border-blue-600/30 rounded-lg px-4 py-3 text-blue-100 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all">
						<option value="">Select difficulty</option>
						<option value="Easy" className="bg-slate-800">Easy</option>
						<option value="Medium" className="bg-slate-800">Medium</option>
						<option value="Hard" className="bg-slate-800">Hard</option>
						<option value="Extreme" className="bg-slate-800">Extreme</option>
					</select>
					</div>
				</div>
				</div>

				{/* Boss Description */}
				<div className="bg-gradient-to-r from-blue-900/40 to-purple-900/30 rounded-xl p-6 border border-blue-600/30">
				<label className="block text-blue-200 font-semibold mb-4">Boss Description *</label>
				<textarea 
					rows="4"
					className="w-full bg-slate-800/80 border border-blue-600/30 rounded-lg px-4 py-3 text-blue-100 placeholder-blue-400/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
					placeholder="Describe the boss's appearance, behavior, and lore..."
					required
				></textarea>
				</div>

				{/* Attacks Section */}
				<div className="bg-gradient-to-r from-blue-900/40 to-purple-900/30 rounded-xl p-6 border border-blue-600/30">
				<div className="flex items-center mb-6">
					<div className="w-2 h-8 bg-gradient-to-b from-blue-400 via-purple-500 to-indigo-600 rounded-full mr-4"></div>
					<h3 className="font-bold text-xl bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
					BOSS ATTACKS
					</h3>
				</div>

				<div className="space-y-4" id="attacks-container">
					<div className="flex gap-4">
					<input 
						type="text" 
						className="flex-1 bg-slate-800/80 border border-blue-600/30 rounded-lg px-4 py-3 text-blue-100 placeholder-blue-400/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all"
						placeholder="Enter an attack (e.g., Ice Blast)"
					/>
					<button type="button" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg border border-blue-400/50 hover:from-blue-500 hover:to-purple-500 transition-all">
						Add Attack
					</button>
					</div>
					<div className="bg-slate-800/60 rounded-lg p-4 min-h-12">
					<p className="text-blue-300 text-sm">Added attacks will appear here...</p>
					</div>
				</div>
				</div>

				{/* Rewards Section */}
				<div className="bg-gradient-to-r from-blue-900/40 to-purple-900/30 rounded-xl p-6 border border-blue-600/30">
				<div className="flex items-center mb-6">
					<div className="w-2 h-8 bg-gradient-to-b from-blue-400 via-purple-500 to-indigo-600 rounded-full mr-4"></div>
					<h3 className="font-bold text-xl bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
					REWARDS
					</h3>
				</div>

				<div className="space-y-4" id="rewards-container">
					<div className="flex gap-4">
					<input 
						type="text" 
						className="flex-1 bg-slate-800/80 border border-blue-600/30 rounded-lg px-4 py-3 text-blue-100 placeholder-blue-400/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all"
						placeholder="Enter a reward (e.g., Frost Crystal)"
					/>
					<button type="button" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg border border-blue-400/50 hover:from-blue-500 hover:to-purple-500 transition-all">
						Add Reward
					</button>
					</div>
					<div className="bg-slate-800/60 rounded-lg p-4 min-h-12">
					<p className="text-blue-300 text-sm">Added rewards will appear here...</p>
					</div>
				</div>
				</div>

				{/* Image Upload */}
				<div className="bg-gradient-to-r from-blue-900/40 to-purple-900/30 rounded-xl p-6 border border-blue-600/30">
				<label className="block text-blue-200 font-semibold mb-4">Boss Image</label>
				<div className="border-2 border-dashed border-blue-600/30 rounded-lg p-8 text-center hover:border-blue-400/50 transition-all cursor-pointer">
					<div className="text-blue-300 mb-2">Click to upload boss image or drag and drop</div>
					<div className="text-blue-400/60 text-sm">PNG, JPG up to 10MB</div>
					<input type="file" className="hidden" accept="image/*" />
				</div>
				</div>

				{/* Submit Buttons */}
				<div className="flex justify-center gap-4 pt-4">
				<button type="button" className="bg-slate-700/80 hover:bg-slate-600/80 text-blue-200 font-bold py-4 px-8 rounded-full border border-blue-600/30 transition-all">
					Cancel
				</button>
				<button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-12 rounded-full border border-blue-400/50 shadow-2xl transition-all transform hover:scale-105">
					Add Boss to Wiki
				</button>
				</div>
			</div>
			</div>
		</div>
	</div>
  );
};

export default Add;