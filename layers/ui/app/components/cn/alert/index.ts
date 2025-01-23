import { cva, type VariantProps } from 'class-variance-authority'

export { default as CNAlert } from './CNAlert.vue'
export { default as CNAlertDescription } from './CNAlertDescription.vue'
export { default as CNAlertTitle } from './CNAlertTitle.vue'

export const alertVariants = cva(
  '[&>svg]:text-foreground relative flex w-full gap-1 rounded-lg border px-2 py-1',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive',
        warning: 'border-warning/50 text-warning dark:border-warning',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type AlertVariants = VariantProps<typeof alertVariants>
