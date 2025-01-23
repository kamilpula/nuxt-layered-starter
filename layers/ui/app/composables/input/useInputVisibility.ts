export function useInputVisibility() {
  const isRevealed = ref(false)

  function toggleVisibility() {
    isRevealed.value = !isRevealed.value
  }

  const inputType = computed(() => (isRevealed.value ? 'text' : 'password'))

  const inputIcon = computed(() => (isRevealed.value ? 'uil:eye-slash' : 'uil:eye'))

  return { isRevealed, toggleVisibility, inputType, inputIcon }
}
