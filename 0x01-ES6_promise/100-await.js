const { uploadPhoto, createUser } = require('./utils');

const asyncUploadUser = async () => {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
};

module.exports = asyncUploadUser;
