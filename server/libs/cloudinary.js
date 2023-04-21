import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: "dgys4m5fv",
  api_key: "482822616879335",
  api_secret: "FbVtftVb3K9nR_ydxsCB0YDoRrA"
})

export const uploadImage = async filePath => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'Productos'
  })
}

export const deleteImage = async id => {
  return await cloudinary.uploader.destroy(id)
}