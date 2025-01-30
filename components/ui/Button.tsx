import { cn } from '@/src/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

type buttonVariants = VariantProps<typeof buttonVariants>
type TButton = React.ButtonHTMLAttributes<HTMLButtonElement> & buttonVariants

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors ',
  {
    variants: {
      variant: {
        button: 'bg-Primary-button text-Neutral-Primary',
        buttonLight: 'bg-Primary-buttonLight',
        secondary: 'bg-Secondary'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      }
    }
  }
)

const Button = ({ className, size, variant, children, ...props }: TButton) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
