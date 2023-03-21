// 将File对象转化为Blob对象
export const fileToBlob = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)

    reader.onload = () => {
      const blob = new Blob([reader.result], { type: file.type })
      resolve(blob)
    }

    reader.onerror = reject
  })
}

// Blob对象转File对象
// export const blobToFile = (blob, filename) => {
//   const url = URL.createObjectURL(blob)
//   const file = new File([blob], filename)
//   URL.revokeObjectURL(url)
//   return file
// }

// File对象转Base64编码
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = (event) => {
      const base64 = reader.result.split(',')[1]
      resolve(base64)
    }

    reader.onerror = reject
  })
}

// Base64编码转File对象
export const base64ToFile = (base64, filename, type) => {
  const byteString = atob(base64)
  const ab = new ArrayBuffer(byteString.length)
  const ia = new Uint8Array(ab)

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }

  const blob = new Blob([ab], { type })

  return new File([blob], filename, { type })
}

// 图片格式转换
export const formatConvert = (file, extName = 'jpeg') => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader() 

    reader.onload = (event) => {
      const { target: { result: src } } = event

      const image = new Image() 

      image.onload = async () => {
        const canvas = document.createElement('canvas') 
        canvas.width = image.width
        canvas.height = image.height

        const ctx = canvas.getContext('2d')
        ctx.drawImage(image, 0, 0, image.width, image.height) 

        const canvasURL = canvas.toDataURL('image/' + extName)

        const newName = file.name.replace(/([^\.]+)$/, extName)

        resolve(base64ToFile(canvasURL, newName))
      }

      image.src = src
    }

    reader.readAsDataURL(file)

    reader.onerror = function(error) {
      reject(error)
    }
  })
}

// 压缩图片
export const compressImage = (file, quality = 0.2) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader() 

    reader.onload = (event) => {
      const { target: { result: src } } = event

      const image = new Image() 

      image.onload = async () => {
        const canvas = document.createElement('canvas') 
        canvas.width = image.width
        canvas.height = image.height

        const ctx = canvas.getContext('2d')
        ctx.drawImage(image, 0, 0, image.width, image.height) 

        const extName = 'jpeg'

        const canvasURL = canvas.toDataURL('image/' + extName, quality)

        const newName = file.name.replace(/([^\.]+)$/, extName)

        resolve(base64ToFile(canvasURL, newName))
      }

      image.src = src
    }

    reader.readAsDataURL(file)

    reader.onerror = function(error) {
      reject(error)
    }
  })
}

// 下载文件
export const downloadFile = (url, callback) => {
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = url

  iframe.onerror = () => {
    document.head.removeChild(iframe)
    callback()
  }

  document.head.appendChild(iframe)

  // // setTimeout(() => {
  // //   document.head.removeChild(iframe)
  // // }, 60000)
}