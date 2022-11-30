export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: (error: Error, acceptFile: boolean) => void,
) => {
  if (!file) callback(new Error('File is empty'), false);

  const fileExtension = file.mimetype.split('/')[1];
  const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

  if (validExtensions.includes(fileExtension)) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};
