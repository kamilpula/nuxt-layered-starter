import type { VNode } from 'vue'
import { Comment, Text } from 'vue'

// Vue3 has a bug where useSlots().foo returns a render function therefore making it not empty
// And `v-if(useSlots().foo)` will always be true. This composable is a workaround for that.
// https://github.com/vuejs/core/issues/4733
// https://github.com/vuejs/rfcs/discussions/453
export function useSlotContent() {
  const slots = useSlots()

  function hasSlotContent(slotKey: string, slotProps = {}): boolean {
    const slot = slots[slotKey]

    if (!slot)
      return false

    return slot(slotProps).some((vnode: VNode) => {
      if (vnode.type === Comment)
        return false
      if (Array.isArray(vnode.children) && !vnode.children.length)
        return false

      return (
        vnode.type !== Text
        || (typeof vnode.children === 'string' && vnode.children.trim() !== '')
      )
    })
  }

  return {
    hasSlotContent,
  }
}
