import type { VNode } from 'vue'

interface State {
  component: VNode | null
}

const state = ref<State>({
  component: null,
})

function setComponent(component: VNode) {
  state.value.component = component
}

function resetComponent() {
  state.value.component = null
}

export function useRemoteRenderer() {
  return {
    setComponent,
    currentComponent: computed(() => state.value.component),
    resetComponent,
  }
}
