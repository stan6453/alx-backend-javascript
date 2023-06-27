import { createUser, uploadPhoto } from './utils';

export default function asyncUploadUser() {
  return Promise.all([createUser(), uploadPhoto()])
    .then((result) => {
      return {
        photo: result[1],
        user: result[0],
      }
    })
    .catch((error) => {
      return {
        photo: null,
        user: null,
      }
    })
}