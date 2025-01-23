export default function timeFormatting() {
  function getFormattedDurationText(time?: number) {
    if (!time)
      return ''

    return time > 1000 ? `${(time / 1000).toFixed(2)}s` : `${time.toFixed(2)}ms`
  }

  return {
    getFormattedDurationText,
  }
}
