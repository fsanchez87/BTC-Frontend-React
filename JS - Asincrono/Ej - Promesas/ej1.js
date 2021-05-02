// https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/

/**
 * Task 1: Promise basics explained using my birthday
 */
const onMyBirthday = (isKayoSick) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isKayoSick) {
        resolve(2);
      } else {
        reject(new Error("I am sad"));
      }
    }, 2000);
  });
};

onMyBirthday(false)
  .then((res) => {
    console.log(`I have ${res} cakes`);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Party");
  });
