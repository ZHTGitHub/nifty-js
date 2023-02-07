declare function fileToBlob(file: File): Promise

declare function fileToBase64(file: File): Promise

declare function base64ToFile(base64: string, name: string): File

declare function formatConvert(file: File, extName: 'jpeg' | 'jpg' | 'png'): Promise

declare function compressFile(file: File, quality: number): Promise