export function useDialog() {
  const isOpened = ref(false)

  function openDialog() {
    isOpened.value = true
  }
  function closeDialog() {
    isOpened.value = false
  }

  return {
    isOpened,
    openDialog,
    closeDialog,
  }
}
