import React from 'react';
import { silksongData } from '../data/silksongData';

const Characters = () => {
  const { characters } = silksongData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2">Characters</h1>
      <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
        Meet the inhabitants of Pharloom - allies, enemies, and mysterious figures you'll encounter in your journey.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {characters.map(character => (
          <div key={character.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gray-700 p-6 text-center">
              <div className="text-6xl mb-4">{character.image}</div>
              <h2 className="text-2xl font-bold text-yellow-400">{character.name}</h2>
              <p className="text-gray-300 italic">{character.title}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-blue-600 rounded-full text-sm">
                {character.role}
              </span>
            </div>
            
            <div className="p-6">
              <p className="text-gray-300 mb-4">{character.description}</p>
              
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">Abilities & Traits:</h3>
                <ul className="space-y-1">
                  {character.abilities.map((ability, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      {ability}
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