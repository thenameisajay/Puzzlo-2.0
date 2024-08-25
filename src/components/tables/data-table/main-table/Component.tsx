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
        <DataTable columns={columns} data={tableData} />
      </section>
    </>
  );
}
