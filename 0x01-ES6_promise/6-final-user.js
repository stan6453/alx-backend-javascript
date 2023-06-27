import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
    .then((result) => {
      const newResult = [];
      for (const obj of result) {
        newResult.push({
          status: obj.status,
          value: obj.value === undefined ? `${obj.reason}` : obj.value,
        });
      }
      return newResult;
    });
}
