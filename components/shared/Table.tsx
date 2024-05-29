import React from 'react';
import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  ColumnDef
} from '@tanstack/react-table';
import player from '@/public/assets/player.png';
type Player = {
  date: string;
  player: string;
  from: string;
  to: string;
  price: string;
  image: string; // URL of the player's image
};

const data: Player[] = [
  {
    date: '20-07-2023',
    player: 'Khaled Abdel-fattah',
    from: 'Smouha',
    to: 'Al-Ahly',
    price: '30M$',
    image: player
  },
  {
    date: '17-06-2023',
    player: 'Zeiad Tarek',
    from: 'Al-Ahly',
    to: 'Smouha',
    price: '10M$',
    image: player
  },
  {
    date: '20-04-2023',
    player: 'Hossam Hassan',
    from: 'El-Ettihad',
    to: 'Pyramids FC',
    price: '10M$',
    image: player
  },
  {
    date: '14-12-2022',
    player: 'Belal El-Sayed',
    from: 'Pyramids FC',
    to: 'El-Ettihad',
    price: '30M$',
    image: player
  }
  // Add more rows as needed
];

const columnHelper = createColumnHelper<Player>();

const columns: ColumnDef<Player>[] = [
  columnHelper.accessor('date', {
    header: 'Date'
  }),
  columnHelper.accessor('player', {
    header: 'Player',
    cell: info => (
      <div className="flex items-center">
        <img
          src={info.row.original.image}
          alt={info.row.original.player}
          className="w-8 h-8 rounded-full mr-2"
        />
        <span>{info.getValue()}</span>
      </div>
    )
  }),
  columnHelper.accessor('from', {
    header: 'From'
  }),
  columnHelper.accessor('to', {
    header: 'To'
  }),
  columnHelper.accessor('price', {
    header: 'Price'
  })
];

const PlayerTable: React.FC = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td
                  key={cell.id}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
