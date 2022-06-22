  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */

// acc: accumulator  = in the case of the first one is an integer
// curr: currentValue

// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = nums.reduce((acc, curr) => {
  console.log(
    "Accumalator:", acc,
    "Current Value:", curr,
    "Total:", acc + curr
  );
  return acc + curr;

}, 10);

console.log(sum)

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); // This example also demonstrates beautifully why  it’s so important to specify the initial value.  
// Watch what happens if I remove  the initial value of zero here. The reason this happens is because  without specifying the initial value, the accumulator starts out as the first element  in the array which in this case is an object.  
console.log(totalExperience);

// Grouping by a property, and totaling it too
// {Developer: 12, Designer: 4} <-- this is what we want!
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] =curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
  }, {});

  console.log(experienceByProfession);
