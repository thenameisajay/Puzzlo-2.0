import {
  ArrowDown,
  ArrowUp,
  CaretUpDown,
  EyeSlash,
} from '@phosphor-icons/react';
import { type Column } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className, 'truncate')}>{title}</div>;
  }

  return (
    <div
      className={cn('flex items-center justify-center space-x-2', className)}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span>{title}</span>
            {title === 'No.' ? null : (
              <>
                <div className="flex items-center space-x-2">
                  {column.getIsSorted() === 'desc' ? (
                    <ArrowDown className="h-4 w-4" />
                  ) : column.getIsSorted() === 'asc' ? (
                    <ArrowUp className="h-4 w-4" />
                  ) : (
                    <CaretUpDown className="h-4 w-4" />
                  )}
                </div>
              </>
            )}
          </Button>
        </DropdownMenuTrigger>

        {title === 'No.' ? null : (
          <DropdownMenuContent align="start" className="w-auto max-w-xs">
            <DropdownMenuLabel>{title}</DropdownMenuLabel>

            <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
              <ArrowUp className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Asc
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
              <ArrowDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Desc
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
              <EyeSlash className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Hide
            </DropdownMenuItem>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
}
