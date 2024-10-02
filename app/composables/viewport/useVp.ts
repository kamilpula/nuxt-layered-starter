import { ViewportBreakpoint } from '~~/types/enums'

const DEVICE_RANGES = {
  mobile: { breakpointEnd: ViewportBreakpoint.SM },
  tablet: { breakpointEnd: ViewportBreakpoint.LG, breakpointStart: ViewportBreakpoint.SM },
  desktop: { breakpointStart: ViewportBreakpoint.LG },
} as const

function isDeviceBreakpointMet(device: { breakpointStart?: ViewportBreakpoint, breakpointEnd?: ViewportBreakpoint }): boolean {
  const { isLessThan, isGreaterOrEquals } = useViewport()

  if (!device) {
    throw new Error('Device is not defined. Check your Viewport configuration. Supported device helpers are: `isMobile`, `isTablet`, `isDesktop`.')
  }

  if (device.breakpointEnd && device.breakpointStart) {
    return isLessThan(device.breakpointEnd) && isGreaterOrEquals(device.breakpointStart)
  }

  if (device.breakpointEnd) {
    return isLessThan(device.breakpointEnd)
  }

  if (device.breakpointStart) {
    return isGreaterOrEquals(device.breakpointStart)
  }

  return false
}

export const useVp = {
  isMobile: computed<boolean>(() => {
    return isDeviceBreakpointMet(DEVICE_RANGES.mobile)
  }),

  isTablet: computed<boolean>(() => {
    return isDeviceBreakpointMet(DEVICE_RANGES.tablet)
  }),

  isDesktop: computed<boolean>(() => {
    return isDeviceBreakpointMet(DEVICE_RANGES.desktop)
  }),
}
