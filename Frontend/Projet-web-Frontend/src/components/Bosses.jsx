import React from 'react';
import { silksongData } from '../data/silksongData';

const Bosses = () => {
  const { bosses } = silksongData;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Hard': return 'text-orange-400';
      case 'Very Hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2">Bosses</h1>
      <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
        Face the formidable guardians and powerful foes that stand between Hornet and her destiny.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {bosses.map(boss => (
          <div key={boss.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-red-800 to-purple-800 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{boss.image}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{boss.name}</h2>
                    <p className="text-gray-300">{boss.title}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(boss.difficulty)} border border-current`}>
                    {boss.difficulty}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <span className="text-gray-400">Location: </span>
                <span className="text-yellow-400 font-semibold">{boss.location}</span>
              </div>
              
              <p className="text-gray-300 mb-4">{boss.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-red-400 mb-2">Attacks:</h3>
                  <ul className="space-y-1">
                    {boss.attacks.map((attack, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-red-400 mr-2">⚔️</span>
                        {attack}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-green-400 mb-2">Rewards:</h3>
                  <ul className="space-y-1">
                    {boss.rewards.map((reward, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-green-400 mr-2">🎁</span>
                        {reward}
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