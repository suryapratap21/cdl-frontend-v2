import clsx from 'clsx'

export function Card({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        'rounded-lg border border-gray-300 bg-white p-4',
        className,
      )}
      {...props}
    />
  )
}
