import { type ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/tables/data-table/react-table/Component';

interface MainTableComponentProps<T> {
  columns: ColumnDef<T>[];
  tableData: T[];
}

export default function MainTableComponent<T>({
  columns,
  tableData,
}: MainTableComponentProps<T>) {
  return (
    <>
      <section className="min-w-full">
        <div className="mt-6 min-w-full rounded-lg border bg-white p-4 shadow-md">
          <DataTable columns={columns} data={tableData} />
        </div>
      </section>
    </>
  );
}
