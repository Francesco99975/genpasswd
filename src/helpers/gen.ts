const lowers = "abcdefghkmnpqrtuvwxyz";
const uppers = "ABCDEFGHKMNPQRTUVWXYZ";
const numbers = "23456789";
const symbols = "!@#$%&?";

const getRandomLower = () => {
  return lowers[Math.floor(Math.random() * lowers.length)];
};

const getRandomUpper = () => {
  return uppers[Math.floor(Math.random() * uppers.length)];
};

const getRandomNumber = () => {
  return numbers[Math.floor(Math.random() * numbers.length)];
};

const getRandomSymbol = () => {
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const possibilities = [
  getRandomLower,
  getRandomUpper,
  getRandomNumber,
  getRandomSymbol,
];

const genRandomPassword = (chars: number) => {
  let randomPassword = "";
  let cx = "";

  for (let i = 0; i < chars; i++) {
    // randomPassword +=
    //   possibilities[Math.floor(Math.random() * possibilities.length)]();

    try {
      do {
        cx = possibilities[Math.floor(Math.random() * possibilities.length)]();
      } while (
        cx === randomPassword[randomPassword.length - 1] ||
        cx === randomPassword[randomPassword.length - 1].toUpperCase() ||
        cx === randomPassword[randomPassword.length - 1].toLowerCase()
      );
    } catch (error) {
      randomPassword +=
        possibilities[Math.floor(Math.random() * possibilities.length)]();
    }

    randomPassword += cx;
  }

  return randomPassword;
};

export default genRandomPassword;
