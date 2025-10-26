import React from 'react';
import { API_URL_IMG, API_URL } from '../App';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Popup from './popup';

const Add = () => {
	const { t,i18n } = useTranslation();

	const [popupConfig, setPopupConfig] = useState({
		isOpen: false,
		title: '',
		text: ''
	});

	const showPopup = (title, text) => {
		setPopupConfig({
		isOpen: true,
		title,
		text
		});
	};

	const hidePopup = () => {
		setPopupConfig(prev => ({ ...prev, isOpen: false }));
	};

	const [formData, setFormData] = useState({
		name: '',
		title: '',
		role: '',
		origin: '',
		description: '',
		abilities: [],
		image: null
	});

	const [currentAbility, setCurrentAbility] = useState('');
	const [imagePreview, setImagePreview] = useState(null);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
		...prev,
		[name]: value
		}));
	};

	const handleAddAbility = () => {
		if (currentAbility.trim()) {
		setFormData(prev => ({
			...prev,
			abilities: [...prev.abilities, currentAbility.trim()]
		}));
		setCurrentAbility('');
		}
	};

	const handleRemoveAbility = (index) => {
		setFormData(prev => ({
		...prev,
		abilities: prev.abilities.filter((_, i) => i !== index)
		}));
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file && file.size <= 10 * 1024 * 1024) {
			setFormData(prev => ({ ...prev, image: file }));

			const reader = new FileReader();

			reader.onloadend = () => {
				setImagePreview(reader.result);
			};

			reader.readAsDataURL(file);
			
		} else {
			alert('Please select an image under 10MB');
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		console.log(i18n.language);//language

		// Validation
		if (!formData.name || !formData.title || !formData.role || !formData.description) {
			alert('Please fill in all required fields');
			return;
		}
		
		try {
			
			const file = document.getElementById("image-upload").files[0];
			let slugifyfilename = "";
			if (file) {
				
				slugifyfilename = file.name.toLowerCase().replace(/\s+/g, '-');
			}

			if (file) await handleUpload(file, slugifyfilename);

			// Prepare form data for submission
			const submitData = {
				name: formData.name,
				title: formData.title,
				role: formData.role,
				origin: formData.origin,
				description: formData.description,
				abilities: formData.abilities,  // Send array directly, no JSON.stringify needed
				image: slugifyfilename,
			};

			// Send POST request to your backend
			const response = await fetch(`${API_URL}api/characters/insert`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(submitData)
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const contentType = response.headers.get('content-type');
			let result;
			
			if (contentType && contentType.includes('application/json')) {
				result = await response.json();
			} else {
				result = await response.text();
			}

			showPopup(
				"Success!", 
				t('popupchara')
			);	
			
			// Reset form after successful submission
			setFormData({
				name: '',
				title: '',
				role: '',
				origin: '',
				description: '',
				abilities: [],
				image: null
			});
			setCurrentAbility('');
			setImagePreview(null);
			
		} catch (error) {
			console.error('Error submitting form:', error);
			alert('Error adding character. Please try again.');
		}
	};

	const handleUpload = async (file,name) => {
    
		try {
			
			if (!file)
				throw new Error(`Erreur l'image n'a pas été chargé`);

			const formData = new FormData();
			formData.append("image", file);

			const res = await fetch(`${API_URL}api/upload`, {
				method: "POST",
				body: formData, // browser sets headers automatically
			});

			const data = await res.json();
			if (data.success) {
				alert(`File uploaded successfully: ${data.path}`);
			} else {
				alert(`Error: ${data.error}`);
			}
		} catch (err) {
			console.error(err);
		}
	};

	const handleCancel = () => {
		if (confirm('Are you sure you want to cancel? All data will be lost.')) {
		setFormData({
			name: '',
			title: '',
			role: '',
			origin: '',
			description: '',
			abilities: [],
			image: null
		});
		setCurrentAbility('');
		setImagePreview(null);
		}
	};

	return (
		
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900/50 to-orange-900/30 pt-36 pb-20 px-4">    <Popup
      title={popupConfig.title}
      text={popupConfig.text}
      isOpen={popupConfig.isOpen}
      onClose={hidePopup}
    />
		<div className="max-w-4xl mx-auto">
			{/* Form Header */}
			<div className="text-center mb-8">
			<h1 className="text-5xl font-bold bg-gradient-to-r from-orange-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent mb-4">
				{t('addCharacterButton')}
			</h1>
			<p className="text-orange-200 text-lg">{t('resister')}</p>
			</div>

			{/* Main Form Card */}
			<div className="bg-slate-900/80 rounded-2xl overflow-hidden shadow-2xl border border-red-600/40 backdrop-blur-sm">
			<div className="bg-gradient-to-br from-red-900 via-orange-800 to-yellow-800 p-8 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-500/10 to-yellow-400/5 mix-blend-overlay"></div>
				<h2 className="text-3xl font-bold text-orange-100 relative z-10 text-center">{t('info')}</h2>
			</div>

			<div className="p-8 space-y-6 bg-gradient-to-b from-slate-900/90 to-slate-800/90">
				<form onSubmit={handleSubmit} className="space-y-6">

				{/* Basic Info Section */}
				<div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 rounded-xl p-6 border border-orange-600/30">
					<div className="flex items-center mb-6">
					<div className="w-2 h-8 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 rounded-full mr-4"></div>
					<h3 className="font-bold text-xl bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
						{t('Binfo')}
					</h3>
					</div>
		
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label className="block text-orange-200 font-semibold mb-2">{t('Cname')}</label>
						<input 
						type="text"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						className="w-full bg-slate-800/80 border border-orange-600/30 rounded-lg px-4 py-3 text-orange-100 placeholder-orange-400/60 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 transition-all"
						placeholder="Enter character name"
						required
						/>
					</div>
					<div>
						<label className="block text-orange-200 font-semibold mb-2">{t('Ctitle')}</label>
						<input 
						type="text"
						name="title"
						value={formData.title}
						onChange={handleInputChange}
						className="w-full bg-slate-800/80 border border-orange-600/30 rounded-lg px-4 py-3 text-orange-100 placeholder-orange-400/60 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 transition-all"
						placeholder="e.g., Protector of Hallownest"
						required
						/>
					</div>
					<div>
						<label className="block text-orange-200 font-semibold mb-2">{t('Crole')}</label>
						<select 
						name="role"
						value={formData.role}
						onChange={handleInputChange}
						className="w-full bg-slate-800/80 border border-orange-600/30 rounded-lg px-4 py-3 text-orange-100 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 transition-all"
						required
						>
						<option value="">{t('sr')}</option>
						<option value="Playable Character">{t('playable')}</option>
						<option value="NPC">{t('NPC')}</option>
						<option value="Companion">{t('Companion')}</option>
						<option value="Villain">{t('Villain')}</option>
						</select>
					</div>
					
					</div>
				</div>

				{/* Character Description */}
				<div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 rounded-xl p-6 border border-orange-600/30">
					<label className="block text-orange-200 font-semibold mb-4">{t('Cdesc')}</label>
					<textarea 
					name="description"
					value={formData.description}
					onChange={handleInputChange}
					rows="4"
					className="w-full bg-slate-800/80 border border-orange-600/30 rounded-lg px-4 py-3 text-orange-100 placeholder-orange-400/60 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
					placeholder="Describe the character's appearance, backstory, and personality..."
					required
					></textarea>
				</div>

				{/* Abilities Section */}
				<div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 rounded-xl p-6 border border-orange-600/30">
					<div className="flex items-center mb-6">
					<div className="w-2 h-8 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 rounded-full mr-4"></div>
					<h3 className="font-bold text-xl bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
						{t('abilities')}
					</h3>
					</div>

					<div className="space-y-4">
					<div className="flex gap-4">
						<input 
						type="text"
						value={currentAbility}
						onChange={(e) => setCurrentAbility(e.target.value)}
						onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddAbility())}
						className="flex-1 bg-slate-800/80 border border-orange-600/30 rounded-lg px-4 py-3 text-orange-100 placeholder-orange-400/60 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 transition-all"
						placeholder="Enter an ability (e.g., Silk Spear)"
						/>
						<button 
						type="button"
						onClick={handleAddAbility}
						className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-lg border border-orange-400/50 hover:from-red-500 hover:to-orange-500 transition-all"
						>
						{t('addA')}
						</button>
					</div>
					<div className="bg-slate-800/60 rounded-lg p-4 min-h-12">
						{formData.abilities.length === 0 ? (
						<p className="text-orange-300 text-sm">{t('appearHere')}</p>
						) : (
						<div className="flex flex-wrap gap-2">
							{formData.abilities.map((ability, index) => (
							<div 
								key={index}
								className="bg-gradient-to-r from-red-600/80 to-orange-600/80 text-orange-100 px-4 py-2 rounded-full flex items-center gap-2 border border-orange-400/30"
							>
								<span>{ability}</span>
								<button
								type="button"
								onClick={() => handleRemoveAbility(index)}
								className="hover:text-white transition-colors"
								>
								✕
								</button>
							</div>
							))}
						</div>
						)}
					</div>
					</div>
				</div>

				{/* Image Upload */}
				<div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 rounded-xl p-6 border border-orange-600/30">
					<label className="block text-orange-200 font-semibold mb-4">{t('charaimg')}</label>
					<div 
					className="border-2 border-dashed border-orange-600/30 rounded-lg p-8 text-center hover:border-orange-400/50 transition-all cursor-pointer"
					onClick={() => document.getElementById('image-upload').click()}
					>
					{imagePreview ? (
						<div className="space-y-4">
						<img src={imagePreview} alt="Preview" className="max-h-64 mx-auto rounded-lg" />
						<p className="text-orange-300 text-sm">{t('clickimg')}</p>
						</div>
					) : (
						<>
						<div className="text-orange-300 mb-2">{t('clickdrag')}</div>
						<div className="text-orange-400/60 text-sm">{t('png')}</div>
						</>
					)}
					<input 
						id="image-upload"
						type="file" 
						className="hidden" 
						accept="image/*"
						onChange={handleImageChange}
					/>
					</div>
				</div>

				{/* Submit Buttons */}
				<div className="flex justify-center gap-4 pt-4">
					<button 
					type="button"
					onClick={handleCancel}
					className="bg-slate-700/80 hover:bg-slate-600/80 text-orange-200 font-bold py-4 px-8 rounded-full border border-orange-600/30 transition-all"
					>
					{t('cancel')}
					</button>
					<button 
					type="submit"
					className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold py-4 px-12 rounded-full border border-orange-400/50 shadow-2xl transition-all transform hover:scale-105"
					>
					{t('addcharatowiki')}
					</button>
				</div>
				</form>
			</div>
			</div>
		</div>
		</div>
	);
};
    
export default Add;