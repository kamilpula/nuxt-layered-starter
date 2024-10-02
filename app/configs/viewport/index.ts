import { ViewportBreakpoint } from '../../../types/enums'

// Values matching tailwindcss breakpoints
export const viewportBreakpoints = {
  [ViewportBreakpoint.XS]: 320,
  [ViewportBreakpoint.SM]: 640, // >= Tablet
  [ViewportBreakpoint.MD]: 768,
  [ViewportBreakpoint.LG]: 1024, // >= Desktop
  [ViewportBreakpoint.XL]: 1280,
  [ViewportBreakpoint['2XL']]: 1440,
} as const
