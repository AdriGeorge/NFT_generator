const layersOrder = [
  { name: 'background', number: 4 },
  { name: 'planets', number: 8 },
  { name: 'body', number: 5 },
  { name: 'eyes', number: 4 },
  { name: 'mouth', number: 3 },
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

const defaultEdition = 100;

module.exports = { layersOrder, format, rarity, defaultEdition };
