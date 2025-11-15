DROP TABLE IF EXISTS characters;
DROP TABLE IF EXISTS bosses;

CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    abilities JSONB NOT NULL,
    image VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL,
    lang VARCHAR(50) NOT NULL
);

CREATE TABLE bosses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(150) NOT NULL,
    difficulty VARCHAR(20) NOT NULL,
    attacks JSONB NOT NULL,
    image VARCHAR(100) NOT NULL,
    rewards JSONB NOT NULL,
    lang VARCHAR(50) NOT NULL
);

INSERT INTO characters (id, name, title, description, abilities, image, role, lang) VALUES 
-- ENGLISH VERSION
(1, 'Hornet', 'Protector of Hallownest', 'Hornet, princess of Hallownest, is a skilled warrior who wields a needle and thread. She is the daughter of the Pale King and Herrah the Beast. Captured by outsider bugs and brought to Pharloom, she must battle foes and solve mysteries to ascend on a deadly pilgrimage to the kingdom''s peak.', 
'["Needle - Her primary weapon for striking enemies", "Thread - Used for grappling and traversal", "Bind - Heals 3 masks by consuming Silk", "Acrobatic movements - Dash, bounce, and aerial combat", "Silk abilities - Special techniques consuming Silk thread", "Tool equipping - Can equip various tools for different effects"]'::jsonb, 
'hornet.png', 'Playable Character', 'en'),

(2, 'Lace', 'The Sadistic Fencer', 'A cruel and deadly fencer who wields a gilded pin with precision and grace. She takes pleasure in combat and harbors an intense desire to eliminate Hornet. Lace is encountered multiple times throughout the game, growing stronger with each battle.', 
'["Pin Mastery - Expert fencing techniques", "Aerial Slash - Two-part leaping attack", "Whirlwind Attack - Teleporting storm of needle strikes", "Moulinet - Spinning pin attack combo", "Counter Stance - Defensive parrying ability", "Wall Pursuit - Leaps after targets on walls"]'::jsonb, 
'lace.png', 'Boss', 'en'),

(3, 'Sharpe', 'Steel Assassin', 'A hunter from a distant land tasked with eliminating Hornet. This formidable assassin applies relentless ranged pressure through his extending proboscis whip attacks and various assassination techniques.', 
'["Proboscis Whip - Extending ranged attacks", "Assassination techniques - Deadly precision strikes", "Ranged pressure - Long-distance combat", "Hunter''s instinct - Tracking and pursuit", "Stealth attacks - Surprise offensive maneuvers"]'::jsonb, 
'sharpe.png', 'Boss', 'en'),

(4, 'Seth', 'Shrine Guardian', 'An eternal protector and ancient guardian who waits amidst tangled roots at the base of the Citadel. Chosen by the Voice, he guards a secret long forgotten and is imbued with stamina and strength beyond a normal bug.', 
'["Shield Mastery - Defensive and offensive shield use", "Shield Toss - Throws shield across the arena", "Teleportation - Can teleport to shield position", "Ground Pound - Plunges shield-first into floor", "AoE Shockwave - Area-of-effect attack after ground pound", "Superhuman strength - Enhanced physical power"]'::jsonb, 
'seth.png', 'Boss/NPC', 'en'),

(5, 'Shakra', 'The Warrior Cartographer', 'A proud warrior who has mastered the Craft-Skill of cartography. Shakra wields throwing rings and searches for her missing master throughout Pharloom. She serves as the kingdom''s map-maker, selling maps and mapping tools in exchange for Rosaries.', 
'["Ring Throwing - Wields throwing rings with precision", "Cartography - Expert map-making skills", "Warrior combat - Trained fighting techniques", "Map crafting - Creates and sells maps", "Navigation expertise - Knowledge of Pharloom geography"]'::jsonb, 
'shakra.png', 'Boss/NPC', 'en'),

(6, 'Garmond', 'The Wandering Rider', 'A wandering bug on a quest to find a new home. Garmond appears as the rider of the duo with his mount Zaza, traveling through Pharloom seeking a place to settle.', 
'["Mounted combat - Fights while riding Zaza", "Navigation skills - Expert pathfinding", "Survival expertise - Living on the road", "Companion bonding - Strong connection with Zaza", "Wandering knowledge - Knows many locations"]'::jsonb, 
'garmond.png', 'Wanderer', 'en'),

(7, 'Zaza', 'The Loyal Mount', 'The mount companion of Garmond, helping carry him on their quest to find a new home as they journey through the kingdom of Pharloom. A faithful and strong creature.', 
'["Swift movement - Fast travel capability", "Carrying capacity - Can transport Garmond", "Loyal companionship - Unwavering devotion", "Terrain traversal - Navigate various environments", "Endurance - Long-distance travel ability"]'::jsonb, 
'zaza.png', 'Wanderer', 'en'),

(8, 'Sherma', 'The Pilgrim', 'A fellow pilgrim who hears the call of Pharloom. She travels the kingdom seeking enlightenment and shares her wisdom with other travelers. She refers to Hornet as "red maiden" and believes in singing together until the great gate opens.', 
'["Spiritual wisdom - Deep understanding of pilgrimage", "Pilgrimage knowledge - Familiar with sacred sites", "Guidance provision - Helps other travelers", "Lore keeper - Knows stories and history", "Lucky chime - Possesses a fortunate charm"]'::jsonb, 
'sherma.png', 'Pilgrim', 'en'),

-- FRENCH VERSION
(9, 'Hornet', 'Protectrice d''Hallownest', 'Hornet, princesse d''Hallownest, est une guerrière habile maniant une aiguille et un fil. Fille du Roi Pâle et d''Herrah la Bête, elle a été capturée par des insectes étrangers et emmenée à Pharloom. Elle doit affronter ses ennemis et résoudre des mystères pour gravir les sommets du royaume lors d''un pèlerinage mortel.', 
'["Aiguille - Son arme principale pour frapper les ennemis", "Fil - Utilisé pour s''agripper et se déplacer", "Suture - Soigne 3 masques en consommant de la Soie", "Mouvements acrobatiques - Dash, rebond et combat aérien", "Techniques de Soie - Capacités spéciales consommant du fil de Soie", "Équipement d''outils - Peut équiper divers outils aux effets variés"]'::jsonb, 
'hornet.png', 'Personnage jouable', 'fr'),

(11, 'Lace', 'L''Escrimeuse Sadique', 'Une escrimeuse cruelle et mortelle maniant une épingle dorée avec précision et élégance. Elle prend plaisir au combat et nourrit un désir ardent d''éliminer Hornet. Lace est affrontée à plusieurs reprises au cours du jeu, devenant plus puissante à chaque duel.', 
'["Maîtrise de l''épingle - Techniques d''escrime expertes", "Frappe Aérienne - Attaque en deux temps", "Attaque Tourbillon - Tempête de coups téléportés", "Moulinet - Combo d''attaques tournoyantes", "Posture de contre - Capacité défensive de parade", "Poursuite murale - Bondit vers les cibles sur les murs"]'::jsonb, 
'lace.png', 'Boss', 'fr'),

(12, 'Sharpe', 'Assassin d''Acier', 'Un chasseur venu d''une terre lointaine, chargé d''éliminer Hornet. Cet assassin redoutable exerce une pression constante à distance grâce à ses attaques de fouet proboscis et à ses techniques d''assassinat précises.', 
'["Fouet Proboscis - Attaques à longue portée", "Techniques d''assassinat - Coups d''une précision mortelle", "Pression à distance - Combat longue portée", "Instinct de chasseur - Traque et poursuite", "Attaques furtives - Manœuvres offensives surprises"]'::jsonb, 
'sharpe.png', 'Boss', 'fr'),

(13, 'Seth', 'Gardien du Sanctuaire', 'Protecteur éternel et gardien ancien, Seth attend au milieu des racines enchevêtrées à la base de la Citadelle. Choisi par la Voix, il garde un secret depuis longtemps oublié et possède une endurance et une force au-delà de tout insecte ordinaire.', 
'["Maîtrise du bouclier - Usage défensif et offensif", "Lancer de bouclier - Lance le bouclier à travers l''arène", "Téléportation - Peut se téléporter à la position du bouclier", "Coup au sol - Plonge bouclier en avant dans le sol", "Onde de choc - Attaque de zone après un coup au sol", "Force surhumaine - Puissance physique améliorée"]'::jsonb, 
'seth.png', 'Boss/PNJ', 'fr'),

(15, 'Shakra', 'La Cartographe Guerrière', 'Une fière guerrière ayant maîtrisé l''art de la cartographie. Shakra manie des anneaux de lancer et recherche son maître disparu à travers Pharloom. Elle sert de cartographe du royaume, vendant cartes et outils de cartographie contre des Chapelets.', 
'["Lancer d''anneaux - Manie des anneaux de lancer avec précision", "Cartographie - Compétence experte en création de cartes", "Combat de guerrière - Techniques de combat entraînées", "Fabrication de cartes - Crée et vend des cartes", "Expertise en navigation - Connaissance approfondie de Pharloom"]'::jsonb, 
'shakra.png', 'Boss/PNJ', 'fr'),

(16, 'Garmond', 'Le Cavalier Errant', 'Un insecte errant en quête d''un nouveau foyer. Garmond apparaît comme le cavalier du duo qu''il forme avec sa monture Zaza, voyageant à travers Pharloom à la recherche d''un lieu où s''établir.', 
'["Combat monté - Se bat à dos de Zaza", "Compétences de navigation - Expert en orientation", "Survie - Expérience de la vie sur la route", "Lien avec le compagnon - Connexion forte avec Zaza", "Connaissance du voyage - Connaît de nombreux endroits"]'::jsonb, 
'garmond.png', 'Errant', 'fr'),

(10, 'Zaza', 'La Monture Loyale', 'La monture de Garmond, l''aidant dans sa quête d''un nouveau foyer à travers le royaume de Pharloom. Une créature fidèle et robuste.', 
'["Mouvement rapide - Capacité de déplacement rapide", "Capacité de port - Peut transporter Garmond", "Compagnonnage loyal - Dévotion inébranlable", "Adaptation au terrain - Traverse divers environnements", "Endurance - Aptitude aux longs trajets"]'::jsonb, 
'zaza.png', 'Errant', 'fr'),

(14, 'Sherma', 'La Pèlerine', 'Une pèlerine qui entend l''appel de Pharloom. Elle parcourt le royaume en quête d''illumination et partage sa sagesse avec d''autres voyageurs. Elle appelle Hornet la "demoiselle rouge" et croit en le chant collectif jusqu''à l''ouverture de la grande porte.', 
'["Sagesse spirituelle - Compréhension profonde du pèlerinage", "Connaissance du pèlerinage - Familiarité avec les sites sacrés", "Guide - Aide les autres voyageurs", "Gardienne du savoir - Connaît les histoires et légendes", "Carillon porte-bonheur - Possède un charme de chance"]'::jsonb, 
'sherma.png', 'Pèlerine', 'fr');
INSERT INTO bosses (id, name, title, description, location, difficulty, attacks, image, rewards, lang) VALUES
-- ENGLISH VERSION
(1, 'Moss Mother', 'Guardian of the Moss Grotto', 'The first boss encountered by Hornet. A large flying creature that emerges from a plant-like cocoon. She hovers and glides around the arena, using her stinger and nature-based attacks to defend her domain.', 'Moss Grotto - Ruined Chapel', 'Easy', '["Swoop", "Stinger Dive", "Spore Cloud", "Aerial Charge"]', 'moss-mother.png', '["Bind Ability", "Silk Spool"]', 'en'),
(2, 'Lace', 'The Sadistic Fencer', 'A cruel and deadly fencer who wields a gilded pin with precision and grace. She takes pleasure in combat and harbors an intense desire to eliminate Hornet, testing her skills in multiple encounters throughout Pharloom.', 'Multiple Locations', 'Hard', '["Pin Thrust", "Spinning Slash", "Dash Strike", "Aerial Pierce", "Counter Stance"]', 'lace.png', '["Weaver''s Grace", "Silk Spool", "Rosaries"]', 'en'),
(3, 'Shrine Guardian Seth', 'Eternal Protector', 'An ancient guardian chosen by the Voice who waits amidst tangled roots at the base of the Citadel. Imbued with stamina and strength beyond a normal bug, he guards a secret long forgotten.', 'The Citadel', 'Medium', '["Root Slam", "Ground Pound", "Shockwave", "Bramble Barrier"]', 'seth.png', '["Ancient Seal", "Silk Spool"]', 'en'),
(4, 'Shakra', 'The Warrior Cartographer', 'A proud warrior who has mastered both combat and cartography. She wields throwing rings with deadly precision while searching for her missing master throughout Pharloom.', 'Deep Docks', 'Medium', '["Ring Toss", "Multi-Ring Barrage", "Spinning Ring Shield", "Bouncing Rings"]', 'shakra.png', '["Map Fragment", "Silk Spool", "Rosaries"]', 'en'),
(5, 'Skarrsinger Karmelita', 'The Monstrous Songstress', 'A massive and terrifying boss who uses sound-based attacks. Her haunting songs and powerful physical strikes make her one of the most challenging encounters in Pharloom.', 'Unknown Location', 'Very Hard', '["Sonic Scream", "Sound Wave", "Crushing Slam", "Echo Strike"]', 'karmelita.png', '["Bell Ability", "Silk Spool", "Special Item"]', 'en'),
(6, 'Skull Tyrant', 'Lord of The Marrow', 'A Grand Hunt target boss found in The Marrow. Part of a wish board quest where Hornet must track and eliminate this skeletal tyrant that terrorizes the bone-filled depths.', 'The Marrow', 'Hard', '["Bone Throw", "Skull Smash", "Skeletal Summon", "Death Charge"]', 'skull-tyrant.png', '["Bone Charm", "Silk Spool", "Grand Hunt Reward"]', 'en'),
(7, 'Moorwing', 'Terror of the Moors', 'A flying beast that patrols the moorlands with aggressive aerial attacks. Its swift movements and unpredictable patterns make it a formidable opponent.', 'Moors', 'Medium', '["Aerial Dive", "Wing Gust", "Swooping Strike", "Feather Barrage"]', 'moorwing.png', '["Feather Token", "Silk Spool"]', 'en'),
(8, 'Nyleth', 'Unknown Title', 'A mysterious boss encounter in Hollow Knight: Silksong with unique mechanics and challenging attack patterns.', 'Unknown Location', 'Medium', '["Unknown Attack 1", "Unknown Attack 2", "Unknown Attack 3", "Unknown Attack 4"]', 'nyleth.png', '["Unknown Reward", "Silk Spool"]', 'en'),
(9, 'Palestag', 'The Pale Warrior', 'A formidable warrior boss with pale coloring and swift combat techniques. Known for aggressive melee combat and defensive capabilities.', 'Unknown Location', 'Hard', '["Pale Slash", "Shield Bash", "Charging Strike", "Defensive Stance"]', 'palestag.png', '["Warrior''s Crest", "Silk Spool"]', 'en'),
(10, 'Second Sentinel', 'The Watcher', 'A guardian sentinel that protects important areas of Pharloom. Part of a series of sentinel encounters throughout the kingdom.', 'Unknown Location', 'Medium', '["Sentinel Strike", "Guard Stance", "Sweeping Attack", "Defensive Pulse"]', 'second-sentinel.png', '["Sentinel Key", "Silk Spool"]', 'en'),
(11, 'Sister Splinter', 'The Fractured Sibling', 'A boss with fragmented or split mechanics, possibly involving multiple phases or parts that must be dealt with strategically.', 'Unknown Location', 'Hard', '["Splinter Shot", "Fragment Burst", "Split Attack", "Reassemble"]', 'sister-splinter.png', '["Splinter Shard", "Silk Spool"]', 'en'),
(12, 'Summoned Saviour', 'The False Messiah', 'A boss that appears to be summoned or conjured, possibly tied to religious or cult elements within Pharloom''s lore.', 'Unknown Location', 'Very Hard', '["Divine Strike", "Holy Light", "Summoning Ritual", "Blessed Assault"]', 'summoned-saviour.png', '["Sacred Relic", "Silk Spool"]', 'en'),
(13, 'The Unravelled', 'Threads of Madness', 'A boss whose form appears unraveled or coming apart, fitting with the silk and thread themes of the game.', 'Unknown Location', 'Hard', '["Thread Lash", "Unravel", "Silk Bind", "Tangled Strike"]', 'the-unravelled.png', '["Unraveled Thread", "Silk Spool"]', 'en'),
(14, 'Phantom', 'The Spectral Shade', 'A ghostly or ethereal boss with phases that may involve disappearing and reappearing, making it difficult to land hits.', 'Unknown Location', 'Hard', '["Phase Through", "Spectral Strike", "Haunting Presence", "Phantom Dash"]', 'phantom.png', '["Phantom Essence", "Silk Spool"]', 'en'),
(15, 'Pinstress', 'Mistress of Needles', 'A boss that uses pin or needle-based attacks, possibly related to sewing or weaving themes.', 'Unknown Location', 'Medium', '["Pin Barrage", "Needle Rain", "Piercing Strike", "Thread Bind"]', 'pinstress.png', '["Pin Collection", "Silk Spool"]', 'en'),
(16, 'Savage Beastfly', 'The Feral Hunter', 'An optional boss found in Hunter''s March that requires the Drifter''s Cloak ability to reach. A fierce and aggressive flying creature.', 'Hunter''s March', 'Hard', '["Savage Lunge", "Beast Roar", "Claw Swipe", "Feral Charge"]', 'savage-beastfly.png', '["Beast Trophy", "Silk Spool"]', 'en'),
(17, 'Lost Garmond', 'The Corrupted Wanderer', 'A corrupted or lost version of the friendly NPC Garmond, transformed into a boss variant. A tragic encounter with the wandering rider.', 'Unknown Location', 'Medium', '["Corrupted Strike", "Lost Charge", "Desperate Slash", "Wanderer''s Fury"]', 'lost-garmond.png', '["Memory Fragment", "Silk Spool"]', 'en'),
(18, 'Lost Lace', 'The Fallen Fencer', 'A variant or corrupted version of Lace, possibly encountered in a different state or timeline. Even more dangerous than her normal form.', 'Unknown Location', 'Very Hard', '["Shadow Pin", "Corrupted Thrust", "Void Slash", "Lost Grace"]', 'lost-lace.png', '["Corrupted Pin", "Silk Spool", "Special Reward"]', 'en'),
(19, 'Raging Conchfly', 'The Maddened Shell', 'A boss variant of a conchfly enemy that has entered a rage state, making it significantly more dangerous and aggressive.', 'Unknown Location', 'Medium', '["Rage Slam", "Shell Spin", "Frenzied Charge", "Conch Blast"]', 'raging-conchfly.png', '["Conch Shell", "Silk Spool"]', 'en'),
(20, 'Tormented Trobbio', 'The Suffering Soul', 'A tormented boss version of Trobbio, likely a regular enemy or NPC that has been corrupted or driven mad.', 'Unknown Location', 'Medium', '["Torment Strike", "Anguished Cry", "Suffering Slash", "Pain Wave"]', 'tormented-trobbio.png', '["Tormented Soul", "Silk Spool"]', 'en'),
(21, 'Plasmified Zango', 'The Transformed', 'A boss that has undergone plasmification, a transformation process that likely makes them more dangerous and otherworldly.', 'Unknown Location', 'Hard', '["Plasma Burst", "Fluid Strike", "Transformation", "Energy Wave"]', 'plasmified-zango.png', '["Plasma Core", "Silk Spool"]', 'en'),
(22, 'Grand Mother Silk', 'The Weaver of Fates', 'The final boss of Hollow Knight: Silksong. A higher being similar to the Pale King and Radiance, she controls silk and threads of fate. Defeating her unlocks the main ending, though there may be more beyond.', 'The Citadel Peak', 'Extreme', '["Thread of Fate", "Silk Weave", "Divine Loom", "Ultimate Binding", "Reality Warp"]', 'grand-mother-silk.png', '["True Silk", "Final Seal", "Ending Unlock"]', 'en'),

-- FRENCH VERSION
(23, 'Moss Mother', 'Gardienne de la Grotte de Mousse', 'Le premier boss affronté par Hornet. Une grande créature volante qui émerge d’un cocon végétal. Elle plane et vole autour de l’arène, utilisant son dard et des attaques basées sur la nature pour défendre son domaine.', 'Grotte de Mousse - Chapelle en Ruine', 'Facile', '["Swoop", "Stinger Dive", "Spore Cloud", "Aerial Charge"]', 'moss-mother.png', '["Compétence Lien", "Bobine de Soie"]', 'fr'),
(24, 'Lace', 'L’Escrimeuse Sadique', 'Une escrimeuse cruelle et mortelle maniant une épingle dorée avec grâce et précision. Elle prend plaisir au combat et nourrit un désir ardent d’éliminer Hornet, testant ses compétences lors de multiples affrontements à travers Pharloom.', 'Multiples Lieux', 'Difficile', '["Pin Thrust", "Spinning Slash", "Dash Strike", "Aerial Pierce", "Counter Stance"]', 'lace.png', '["Grâce de la Tisseuse", "Bobine de Soie", "Chapelets"]', 'fr'),
(25, 'Shrine Guardian Seth', 'Protecteur Éternel', 'Un ancien gardien choisi par la Voix, qui attend parmi les racines emmêlées à la base de la Citadelle. Imprégné d’une force et d’une endurance hors du commun, il protège un secret depuis longtemps oublié.', 'La Citadelle', 'Moyen', '["Root Slam", "Ground Pound", "Shockwave", "Bramble Barrier"]', 'seth.png', '["Sceau Ancien", "Bobine de Soie"]', 'fr'),
(26, 'Shakra', 'La Cartographe Guerrière', 'Une fière combattante ayant maîtrisé à la fois l’art du combat et celui de la cartographie. Elle manie des anneaux tranchants avec une précision mortelle tout en cherchant son maître disparu à travers Pharloom.', 'Docks Profonds', 'Moyen', '["Ring Toss", "Multi-Ring Barrage", "Spinning Ring Shield", "Bouncing Rings"]', 'shakra.png', '["Fragment de Carte", "Bobine de Soie", "Chapelets"]', 'fr'),
(27, 'Skarrsinger Karmelita', 'La Cantatrice Monstrueuse', 'Une gigantesque et terrifiante créature utilisant des attaques basées sur le son. Ses chants hantés et ses frappes puissantes en font l’une des confrontations les plus redoutables de Pharloom.', 'Lieu Inconnu', 'Très Difficile', '["Sonic Scream", "Sound Wave", "Crushing Slam", "Echo Strike"]', 'karmelita.png', '["Compétence Cloche", "Bobine de Soie", "Objet Spécial"]', 'fr'),
(28, 'Skull Tyrant', 'Seigneur de la Moelle', 'Une cible de Grande Chasse trouvée dans la Moelle. Hornet doit traquer et éliminer ce tyran squelettique qui terrorise les profondeurs remplies d’os.', 'La Moelle', 'Difficile', '["Bone Throw", "Skull Smash", "Skeletal Summon", "Death Charge"]', 'skull-tyrant.png', '["Charme d’Os", "Bobine de Soie", "Récompense de Chasse"]', 'fr'),
(29, 'Moorwing', 'Terreur des Landes', 'Une bête volante qui patrouille les landes avec des attaques aériennes féroces. Ses mouvements rapides et imprévisibles en font un adversaire redoutable.', 'Landes', 'Moyen', '["Aerial Dive", "Wing Gust", "Swooping Strike", "Feather Barrage"]', 'moorwing.png', '["Plume Talisman", "Bobine de Soie"]', 'fr'),
(30, 'Nyleth', 'Titre Inconnu', 'Un boss mystérieux de Hollow Knight: Silksong, proposant des mécaniques uniques et des attaques difficiles à anticiper.', 'Lieu Inconnu', 'Moyen', '["Unknown Attack 1", "Unknown Attack 2", "Unknown Attack 3", "Unknown Attack 4"]', 'nyleth.png', '["Récompense Inconnue", "Bobine de Soie"]', 'fr'),
(31, 'Palestag', 'Le Guerrier Pâle', 'Un guerrier redoutable à la peau pâle, connu pour ses techniques de combat rapides et précises. Maître du corps à corps et expert en défense.', 'Lieu Inconnu', 'Difficile', '["Pale Slash", "Shield Bash", "Charging Strike", "Defensive Stance"]', 'palestag.png', '["Insigne du Guerrier", "Bobine de Soie"]', 'fr'),
(32, 'Second Sentinel', 'Le Veilleur', 'Un gardien qui protège des zones clés de Pharloom. Fait partie d’une série de sentinelles rencontrées tout au long du royaume.', 'Lieu Inconnu', 'Moyen', '["Sentinel Strike", "Guard Stance", "Sweeping Attack", "Defensive Pulse"]', 'second-sentinel.png', '["Clé de Sentinelle", "Bobine de Soie"]', 'fr'),
(33, 'Sister Splinter', 'La Sœur Fracturée', 'Un boss fragmenté ou divisé en plusieurs parties, nécessitant une stratégie adaptée pour chaque phase.', 'Lieu Inconnu', 'Difficile', '["Splinter Shot", "Fragment Burst", "Split Attack", "Reassemble"]', 'sister-splinter.png', '["Éclat fracturé", "Bobine de Soie"]', 'fr'),
(34, 'Summoned Saviour', 'Le Faux Messie', 'Un boss invoqué ou conjuré, lié à des éléments religieux ou cultuels dans le lore de Pharloom.', 'Lieu Inconnu', 'Très Difficile', '["Divine Strike", "Holy Light", "Summoning Ritual", "Blessed Assault"]', 'summoned-saviour.png', '["Relique sacrée", "Bobine de Soie"]', 'fr'),
(35, 'The Unravelled', 'Les Fils de la Folie', 'Un boss dont la forme semble se défaire, en accord avec les thèmes du fil et de la soie.', 'Lieu Inconnu', 'Difficile', '["Thread Lash", "Unravel", "Silk Bind", "Tangled Strike"]', 'the-unravelled.png', '["Fil délié", "Bobine de Soie"]', 'fr'),
(36, 'Phantom', 'L’Ombre Spectrale', 'Un boss éthéré qui apparaît et disparaît durant le combat, rendant ses attaques difficiles à anticiper.', 'Lieu Inconnu', 'Difficile', '["Phase Through", "Spectral Strike", "Haunting Presence", "Phantom Dash"]', 'phantom.png', '["Essence fantomatique", "Bobine de Soie"]', 'fr'),
(37, 'Pinstress', 'La Maîtresse des Aiguilles', 'Un boss utilisant des attaques à base d’épingles et d’aiguilles, dans une thématique de couture et de tissage.', 'Lieu Inconnu', 'Moyen', '["Pin Barrage", "Needle Rain", "Piercing Strike", "Thread Bind"]', 'pinstress.png', '["Collection d’épingles", "Bobine de Soie"]', 'fr'),
(38, 'Savage Beastfly', 'La Chasseresse Sauvage', 'Un boss optionnel trouvé dans la Marche du Chasseur, accessible grâce à la Cape du Vagabond. Une créature volante féroce et agressive.', 'Marche du Chasseur', 'Difficile', '["Savage Lunge", "Beast Roar", "Claw Swipe", "Feral Charge"]', 'savage-beastfly.png', '["Trophée de bête", "Bobine de Soie"]', 'fr'),
(39, 'Lost Garmond', 'Le Vagabond Corrompu', 'Une version corrompue ou perdue du PNJ Garmond, transformée en boss. Une rencontre tragique avec le cavalier errant.', 'Lieu Inconnu', 'Moyen', '["Corrupted Strike", "Lost Charge", "Desperate Slash", "Wanderer''s Fury"]', 'lost-garmond.png', '["Fragment de mémoire", "Bobine de Soie"]', 'fr'),
(40, 'Lost Lace', 'L’Escrimeuse Déchue', 'Une version alternative ou corrompue de Lace, encore plus dangereuse que la normale.', 'Lieu Inconnu', 'Très Difficile', '["Shadow Pin", "Corrupted Thrust", "Void Slash", "Lost Grace"]', 'lost-lace.png', '["Épingle corrompue", "Bobine de Soie", "Récompense spéciale"]', 'fr'),
(41, 'Raging Conchfly', 'La Coquille Enragée', 'Une version frénétique d’un ennemi conchfly devenu extrêmement agressif.', 'Lieu Inconnu', 'Moyen', '["Rage Slam", "Shell Spin", "Frenzied Charge", "Conch Blast"]', 'raging-conchfly.png', '["Coquille de conque", "Bobine de Soie"]', 'fr'),
(42, 'Tormented Trobbio', 'L’Âme Tourmentée', 'Une version corrompue du personnage Trobbio, consumée par la souffrance et la folie.', 'Lieu Inconnu', 'Moyen', '["Torment Strike", "Anguished Cry", "Suffering Slash", "Pain Wave"]', 'tormented-trobbio.png', '["Âme tourmentée", "Bobine de Soie"]', 'fr'),
(43, 'Plasmified Zango', 'Le Transfiguré', 'Un boss ayant subi une plasmification, une transformation qui le rend encore plus dangereux et surnaturel.', 'Lieu Inconnu', 'Difficile', '["Plasma Burst", "Fluid Strike", "Transformation", "Energy Wave"]', 'plasmified-zango.png', '["Noyau de plasma", "Bobine de Soie"]', 'fr'),
(44, 'Grand Mother Silk', 'La Tisseuse des Destins', 'Le boss final de Hollow Knight: Silksong. Un être supérieur semblable au Roi Pâle et à la Radiance, contrôlant la soie et les fils du destin. La vaincre débloque la fin principale du jeu.', 'Sommet de la Citadelle', 'Extrême', '["Thread of Fate", "Silk Weave", "Divine Loom", "Ultimate Binding", "Reality Warp"]', 'grand-mother-silk.png', '["Soie véritable", "Sceau final", "Déblocage de fin"]', 'fr');
