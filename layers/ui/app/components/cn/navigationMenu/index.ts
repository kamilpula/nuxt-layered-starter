import { cva } from 'class-variance-authority'

export { default as CNNavigationMenu } from './CNNavigationMenu.vue'
export { default as CNNavigationMenuContent } from './CNNavigationMenuContent.vue'
export { default as CNNavigationMenuItem } from './CNNavigationMenuItem.vue'
export { default as CNNavigationMenuLink } from './CNNavigationMenuLink.vue'
export { default as CNNavigationMenuList } from './CNNavigationMenuList.vue'
export { default as CNNavigationMenuTrigger } from './CNNavigationMenuTrigger.vue'

export const navigationMenuTriggerStyle = cva(
  'bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50',
)
