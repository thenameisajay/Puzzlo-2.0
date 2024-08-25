'use client';

import { type Table } from '@tanstack/react-table';
import { DataTableViewOptions } from '@/components/tables/data-table/view-options/Component';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {/* Empty for now , can add function later here */}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
