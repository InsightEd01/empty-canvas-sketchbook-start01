
import { cn } from '@/lib/utils';

export function Spinner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-primary border-t-transparent',
        className
      )}
    />
  );
}

export function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/50 backdrop-blur-sm">
      <div className="bg-card p-6 rounded-lg shadow-lg flex flex-col items-center">
        <Spinner className="h-8 w-8 mb-4" />
        <p className="text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}

export function LoadingSpinner({ size = 'default', className }: { size?: 'sm' | 'default' | 'lg', className?: string }) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    default: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Spinner className={cn(sizeClasses[size], className)} />
    </div>
  );
}
