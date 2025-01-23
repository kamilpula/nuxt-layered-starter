import type { StatusColorKey } from '#ui/types/statusColor'
import { STATUS_COLOR } from '#ui/constants/status/statusColor'

interface StatusColorProps {
  text?: boolean
  bg?: boolean
  border?: boolean
}

export function getStatusColorClasses(status: StatusColorKey, config: StatusColorProps): string {
  const colorParts: string[] = []

  const { text, background, border } = STATUS_COLOR[status]

  if (config.text)
    colorParts.push(text)

  if (config.bg)

    colorParts.push(background)

  if (config.border)
    colorParts.push(border)

  return cn(colorParts.join(' '))
}
