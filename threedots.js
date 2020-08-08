const ages = [1, 2, 3];
const ages2 = [4, 6, 6];
const ages3 = [6, 8, 0];
const allAges = ages.concat(ages2).concat(5).concat(ages3);
const allAges2 = [...ages, 6, ...ages2, ...ages3];
console.log(allAges2);


const business = 23;
const minister = 236;
const shochib = 232;
const poisaTaka = [234, 2424, 234, 264];
const max = Math.max(...poisaTaka);
console.log(max);