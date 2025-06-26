import type { Ref } from 'vue'
import { createContext } from 'reka-ui'

export { default as Command } from './CNCommand.vue'
export { default as CommandDialog } from './CNCommandDialog.vue'
export { default as CommandEmpty } from './CNCommandEmpty.vue'
export { default as CommandGroup } from './CNCommandGroup.vue'
export { default as CommandInput } from './CNCommandInput.vue'
export { default as CommandItem } from './CNCommandItem.vue'
export { default as CommandList } from './CNCommandList.vue'
export { default as CommandSeparator } from './CNCommandSeparator.vue'
export { default as CommandShortcut } from './CNCommandShortcut.vue'

export const [useCommand, provideCommandContext] = createContext<{
  allItems: Ref<Map<string, string>>
  allGroups: Ref<Map<string, Set<string>>>
  filterState: {
    search: string
    filtered: { count: number, items: Map<string, number>, groups: Set<string> }
  }
}>('Command')

export const [useCommandGroup, provideCommandGroupContext] = createContext<{
  id?: string
}>('CommandGroup')
