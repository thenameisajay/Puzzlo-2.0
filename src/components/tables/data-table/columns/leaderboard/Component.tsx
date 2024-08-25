import { type ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '@/components/tables/data-table/headers/Component';
import { type LeaderboardEntryFormTypes } from '@/types/interfaces/leaderboard/types';

export const LeaderboardColumns: ColumnDef<LeaderboardEntryFormTypes>[] = [
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No." />
    ),
    accessorKey: 'no',

    cell: ({ row }) => row.index + 1,
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    accessorKey: 'username',
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Score" />
    ),
    accessorKey: 'score',
  },
];
