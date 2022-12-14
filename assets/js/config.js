let config = {
	types: [
		{ name: "Tower", ico: 'tower' },
		{ name: "Npc", ico: 'npc' },
		{ name: "NpcQuest", ico: 'npcquest' },
		{ name: "Quest", ico: 'quest' },
		{ name: "Quest Item", ico: 'questitem' },
		{ name: 'Raid Entrance', ico: 'raid' },
		{ name: 'Dungeon Entrance', ico: 'raid' },
		{ name: 'Flora', ico: 'flora' },
		{ name: 'Fauna', ico: 'fauna' },
		{ name: 'Mine', ico: 'pick' },
		{ name: 'Boss', ico: 'ogre' },
		{ name: 'Fairy', ico: 'fairy' },
		{ name: 'Fish', ico: 'fish' },
		{ name: "Container", ico: 'oldkey' },
		{ name: "Chest", ico: 'chest' },
	],
	ico: {
		oldkey: { ico: 'ποΈ', name: 'Old Key' },
		hammer: { ico: 'π¨', name: 'Hammer' },
		dagger: { ico: 'π‘οΈ', name: 'Dagger' },
		bow: { ico: 'πΉ', name: 'Bow and Arrow' },
		shield: { ico: 'π‘οΈ', name: 'Shield' },
		staff: { ico: 'β', name: 'Staff' },
		dice: { ico: 'π²', name: 'Game Dice' },
		poi: { ico: 'π²', name: 'poi' },
		ogre: { ico: 'πΉ', name: 'ogre' },
		fairy: { ico: 'π§', name: 'Fairy' },
		vampire: { ico: 'π§', name: 'Vampire' },
		pick: { ico: 'βοΈ', name: 'pick' },
		questitem: { ico: 'β', name: 'White Question Mark' },
		quest: { ico: 'β', name: 'Red Question Mark' },
		tower: { ico: 'πΏ', name: 'Maoi' },
		npcquest: { ico: 'βοΈ', name: 'Exclamation Question Mark' },
		npc: { ico: 'β', name: 'Red Exclamation Mark' },
		raid: { ico: 'βοΈ', name: 'Crossed Swords' },
		fauna: { ico: 'π»', name: 'Bear' },
		flora: { ico: 'πΌ', name: 'Blossom' },
		fish: { ico: 'π', name: 'Fish' },
		chest: { ico: 'π§°', name: 'Toolbox' },
		worldmap: { ico: 'πΊοΈ', name: 'World Map' },
		Bed: { ico: 'ποΈ', name: 'Bed' },
		skull: { ico: 'π', name: 'Skull' },
		skullandcrossbones: { ico: 'β οΈ', name: 'Skull and Crossbones' },
		pirateflag: { ico: 'π΄ββ οΈ', name: 'Pirate Flag' },
	},
	maps: [
		{
			id: 0,
			name: 'Eastern Valley',
			width: 1450,
			height: 1195,
			src: 'eastern_valley.jpg',
			alt: "Eastern Valley",
			spoil: false
		},
		{
			id: 1,
			name: 'Central Mountains Area',
			width: 1450, height: 1195,
			src: 'central_mountains_area.jpg',
			alt: "Central Mountains Area",
			spoil: true
		},
		{
			id: 2,
			name: 'Chaplonia',
			width: 1450, height: 1195,
			src: 'chaplonia.jpg',
			alt: "Chaplonia",
			spoil: true
		},
		{
			id: 3,
			name: 'King\'s Mountain',
			width: 1450, height: 1195,
			src: 'king_s_mountain.jpg',
			alt: 'King\'s Mountain',
			spoil: true
		},
		{
			id: 4,
			name: 'Dyra Desert',
			width: 1450, height: 1195,
			src: 'dyra_desert.jpg',
			alt: "Dyra Desert",
			spoil: true
		},
		{
			id: 5,
			name: 'The Frozen Elve\'s Forest',
			width: 1450, height: 1195,
			src: 'the_frozen_elves_forest.jpg',
			alt: 'The Frozen Elve\'s Forest',
			spoil: true
		}
	]
}
