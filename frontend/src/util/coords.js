function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
 }

export const generateRijekaCoords = () => {
   const randLat = getRandomInt(453380, 453669)
   const randLong = getRandomInt(144176, 144996)
   const rand3 = getRandomInt(0,30)
   return [randLong/10000, randLat/10000, rand3]
}
