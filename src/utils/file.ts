export const downloadFile = (filename: string, content: string, filenameType: string): void => {
  const element = document.createElement('a')
  const file = new Blob([content], { type: 'text/plain' })
  element.href = URL.createObjectURL(file)
  element.download = `${filename}.${filenameType}}`
  document.body.appendChild(element) // Required for this to work in FireFox
  element.click()
}

interface UploadFileOptions {
  replaceSuffix?: string
}

interface UploadFileResult {
  content: string
  filename: string
}

export const uploadFileText = async (file: File, options?: UploadFileOptions): Promise<UploadFileResult> => {
  return await new Promise((resolve, reject) => {
    let content = ''
    const filename = file.name.replace(/\.[^/.]+$/, options?.replaceSuffix ?? '')
    const reader = new FileReader()
    reader.onload = (e) => {
      if (e.target?.result) {
        content = e.target.result as string

        resolve({ content, filename })
      }
    }

    reader.onerror = (e) => {
      reject(e)
    }
    reader.readAsText(file)
  })
}
