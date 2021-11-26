const layersOrder = [
  { name: 'planets', number: 8 },
  { name: 'body', number: 4 },
  { name: 'eyes', number: 3 },
  { name: 'mouth', number: 2 },
];

const format = {
  width: 230,
  height: 230,
};

const rarity = [
  { key: '', val: 'original' },
  { key: '_r', val: 'rare' },
  { key: '_sr', val: 'super rare' },
];

const defaultEdition = 50;

module.exports = { layersOrder, format, rarity, defaultEdition };
