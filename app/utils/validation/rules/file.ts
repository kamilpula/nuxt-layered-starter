import type { RulePartial } from '~~/types/app/rules'
import { z } from 'zod'

export function singleFileRule({ fileSize, required, filePreviews, allowedExtensions }: { fileSize: RulePartial<number>, required: RulePartial<boolean>, filePreviews?: string[], allowedExtensions: RulePartial<string[]> }) {
  const isFileRequired = (file: File | undefined): boolean => required.value && (file !== undefined || filePreviews?.[0] !== undefined)
  const isFileSizeValid = (file: File | undefined): boolean => {
    if (required.value && file !== undefined)
      return file.size <= fileSize.value

    if (required.value && filePreviews?.[0] !== undefined)
      return true

    return !required.value
  }

  const isFileExtensionValid = (file: File | undefined): boolean => {
    if (!file)
      return true

    const fileExtension = file.name.split('.').pop()

    return allowedExtensions.value.includes(fileExtension ?? '')
  }

  return z.custom<File>()
    .refine(isFileRequired, { message: required.message })
    .refine(isFileSizeValid, { message: fileSize.message })
    .refine(isFileExtensionValid, { message: allowedExtensions.message })
}

export function fileListRule({ fileSize, fileCount, filePreviewsLength, allowedExtensions }: { fileSize: RulePartial<number>, fileCount: RulePartial<{ min: number, max: number }>, filePreviewsLength?: number | null, allowedExtensions: RulePartial<string[]> }) {
  const isTotalFileCountValid = (): boolean => {
    const totalFilesCount = filePreviewsLength ?? 0

    return totalFilesCount >= fileCount.value.min && totalFilesCount <= fileCount.value.max
  }

  const areAllFilesSizeValid = (files: File[] | undefined): boolean => {
    // If there are no files, we don't need to check the size
    if (!files)
      return true

    return files.every(file => file.size <= fileSize.value)
  }

  const areAllFilesExtensionValid = (files: File[] | undefined): boolean => {
    // If there are no files, we don't need to check the extension
    if (!files)
      return true

    return files.every((file) => {
      const fileExtension = file.name.split('.').pop()

      return allowedExtensions.value.includes(fileExtension ?? '')
    })
  }

  return z.custom<File[]>()
    .refine(isTotalFileCountValid, { message: fileCount.message })
    .refine(areAllFilesSizeValid, { message: fileSize.message })
    .refine(areAllFilesExtensionValid, { message: allowedExtensions.message })
}
