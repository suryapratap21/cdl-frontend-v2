const badgeVariants: any = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-gray-100 text-gray-800',
  active: 'bg-green-500 text-white',
  inactive: 'bg-gray-300 text-gray-500',
  // Add more variants as needed
}
export function Badge({ className, variant = 'secondary', children }: any) {
  const variantStyle: any = badgeVariants[variant] || badgeVariants.secondary

  return (
    <span
      className={`inline-flex items-center ${variantStyle} rounded-full px-3 py-1 text-xs font-medium`}
    >
      {children}
    </span>
  )
}
