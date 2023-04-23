
function herosInventory(input) {
  let heroes = [];
  for (const currentHero of input) {
    let [name, level, items] = currentHero.split(" / ");
    level = Number(level);
    heroes.push({ name, level, items });
  }

  let sortedHeroes = heroes.sort((heroA, heroB) => heroA.level - heroB.level);

  for (const { name, level, items } of sortedHeroes) {
    console.log(`Hero: ${name}`);
    console.log(`level => ${level}`);
    console.log(`items => ${items}`);
  }
}

herosInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
