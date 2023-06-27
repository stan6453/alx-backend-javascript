import { createUser, uploadPhoto } from './utils';

export default function asyncUploadUser() {
  return Promise.all([createUser(), uploadPhoto()])
    .then((result) => ({
      photo: result[1],
      user: result[0],
    }))
    .catch(() => ({
      photo: null,
      user: null,
    }));
}
