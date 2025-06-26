import type { VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'vue'
import { cva } from 'class-variance-authority'

export interface SidebarProps {
  side?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
  class?: HTMLAttributes['class']
}

export { default as Sidebar } from './CNSidebar.vue'
export { default as SidebarContent } from './CNSidebarContent.vue'
export { default as SidebarFooter } from './CNSidebarFooter.vue'
export { default as SidebarGroup } from './CNSidebarGroup.vue'
export { default as SidebarGroupAction } from './CNSidebarGroupAction.vue'
export { default as SidebarGroupContent } from './CNSidebarGroupContent.vue'
export { default as SidebarGroupLabel } from './CNSidebarGroupLabel.vue'
export { default as SidebarHeader } from './CNSidebarHeader.vue'
export { default as SidebarInput } from './CNSidebarInput.vue'
export { default as SidebarInset } from './CNSidebarInset.vue'
export { default as SidebarMenu } from './CNSidebarMenu.vue'
export { default as SidebarMenuAction } from './CNSidebarMenuAction.vue'
export { default as SidebarMenuBadge } from './CNSidebarMenuBadge.vue'
export { default as SidebarMenuButton } from './CNSidebarMenuButton.vue'
export { default as SidebarMenuItem } from './CNSidebarMenuItem.vue'
export { default as SidebarMenuSkeleton } from './CNSidebarMenuSkeleton.vue'
export { default as SidebarMenuSub } from './CNSidebarMenuSub.vue'
export { default as SidebarMenuSubButton } from './CNSidebarMenuSubButton.vue'
export { default as SidebarMenuSubItem } from './CNSidebarMenuSubItem.vue'
export { default as SidebarProvider } from './CNSidebarProvider.vue'
export { default as SidebarRail } from './CNSidebarRail.vue'
export { default as SidebarSeparator } from './CNSidebarSeparator.vue'
export { default as SidebarTrigger } from './CNSidebarTrigger.vue'

export { useSidebar } from './utils'

export const sidebarMenuButtonVariants = cva(
  'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        outline:
          'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
      },
      size: {
        default: 'h-8 text-sm',
        sm: 'h-7 text-xs',
        lg: 'h-12 text-sm group-data-[collapsible=icon]:p-0!',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type SidebarMenuButtonVariants = VariantProps<typeof sidebarMenuButtonVariants>
