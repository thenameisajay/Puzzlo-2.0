import { faker } from '@faker-js/faker';

export function generateNewUser() {
  const newUser = {
    username: faker.person.firstName().slice(0, 11),
    numberOfTries: 100,
    timeTaken: 100,
    score: Math.floor(Math.random() * 50001) + 50000,
  };
  return newUser;
}

// Test the function
for (let i = 0; i < 10; i++) {
  console.log(`User No. ${i}`, generateNewUser());
}
