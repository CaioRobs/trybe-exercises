const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = {
  warrior,
  mage,
  dragon
};

const dragonDmg = (dragon) => {
  const dragonMinDmg = 15;
  return Math.floor(Math.random() * (dragon.strength - dragonMinDmg + 1)) + dragonMinDmg;
}

const warriorDmg = (warrior) => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength + 1)) + warrior.strength;

const mageDmgAndManaSpent = (mage) => {
  const spellManaCost = 15;
  let dmg;
  let manaSpent;
  if (mage.mana < spellManaCost) {
    dmg = `out of mana`;
    manaSpent = 0;
  } else {
    dmg = Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence + 1)) + mage.intelligence;
    manaSpent = spellManaCost;
  }
  return {
    dmg,
    manaSpent
  }
}

const gameActions = {
  warriorTurn: (warrior, dragon, callback) => {
    if (warrior.healthPoints <= 0) return console.log('warrior esta morto')
    if (dragon.healthPoints <= 0) return
    warrior.damage = callback(warrior);
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (mage, dragon, callback) => {
    if (mage.healthPoints <= 0) return console.log(`mage está morto`);
    if (dragon.healthPoints <= 0) return

    const mageResults = callback(mage);
    mage.mana -= mageResults.manaSpent;
    mage.damage = mageResults.dmg;
    if (typeof mage.damage === 'number') {
      dragon.healthPoints -= mage.damage;
    }
  },
  dragonTurn: (warrior, mage, dragon, callback) => {
    if (dragon.healthPoints <= 0) return console.log(`dragão esta morto`)
    dragon.damage = callback(dragon);
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  battleMembers: (battleMembers) => {
    console.log(battleMembers)
    return battleMembers;
  }
};

const turno = () => {
  console.table(battleMembers);
  gameActions.warriorTurn(warrior, dragon, warriorDmg);
  gameActions.mageTurn(mage, dragon, mageDmgAndManaSpent);
  gameActions.dragonTurn(warrior, mage, dragon, dragonDmg);
  console.table(battleMembers);
}

turno();
console.log(`-------------------------------------------------------------------------------------------------`)
turno();
console.log(`-------------------------------------------------------------------------------------------------`)
turno();
console.log(`-------------------------------------------------------------------------------------------------`)
turno();
console.log(`-------------------------------------------------------------------------------------------------`)
