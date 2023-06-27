import { uploadPhoto, createUser } from './utils';

export default function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((result) => ({
      photo: result[0],
      user: result[1],
    }))
    .catch(() => ({
      photo: null,
      user: null,
    }));
}
