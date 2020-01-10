import Character from '../Character';

test('Character', () => {
  expect(new Character('vova', 'Bowman')).toEqual({
    name: 'vova',
    type: 'Bowman',
    health: 100,
    attack: 10,
    defence: 40,
  });

  const vova = new Character('vova', 'Bowman');
  vova.damage(40);
  expect(vova.health).toBe(76);
});
