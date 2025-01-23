import type { ToastRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'

export { default as CNToast } from './CNToast.vue'
export { default as CNToastAction } from './CNToastAction.vue'
export { default as CNToastClose } from './CNToastClose.vue'
export { default as CNToastDescription } from './CNToastDescription.vue'
export { default as CNToastProvider } from './CNToastProvider.vue'
export { default as CNToastTitle } from './CNToastTitle.vue'
export { default as CNToastToaster } from './CNToastToaster.vue'
export { default as CNToastViewport } from './CNToastViewport.vue'

export const toastVariants = cva(
  'data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground border',
        destructive: 'destructive border-destructive bg-destructive text-destructive-foreground group',
        success: 'success border-success bg-success text-success-foreground group',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

type ToastVariants = VariantProps<typeof toastVariants>

export interface ToastProps extends ToastRootProps {
  class?: HTMLAttributes['class']
  variant?: ToastVariants['variant']
  onOpenChange?: ((value: boolean) => void) | undefined
}
