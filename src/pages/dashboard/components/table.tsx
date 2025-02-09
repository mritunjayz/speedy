import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import { Input } from '@/components/ui/input';

/*
Song Name
Artist
Date Streamed
Stream Count
User ID*/

const invoices = [
  {
    userId: 1,
    song: 'INV001',
    artist: 'Paid',
    date: '$250.00',
    stream: 'Credit Card'
  },
  {
    userId: 1,
    song: 'INV001',
    artist: 'Paid',
    date: '$250.00',
    stream: 'Credit Card'
  },
  {
    userId: 1,
    song: 'INV001',
    artist: 'Paid',
    date: '$250.00',
    stream: 'Credit Card'
  },
  {
    userId: 1,
    song: 'INV001',
    artist: 'Paid',
    date: '$250.00',
    stream: 'Credit Card'
  },
  {
    userId: 1,
    song: 'INV001',
    artist: 'Paid',
    date: '$250.00',
    stream: 'Credit Card'
  },
  {
    userId: 1,
    song: 'INV001',
    artist: 'Paid',
    date: '$250.00',
    stream: 'Credit Card'
  },
  {
    userId: 1,
    song: 'INV001',
    artist: 'Paid',
    date: '$250.00',
    stream: 'Credit Card'
  }
];

const handleSearch = (event) => {
  console.log(event.target.value);
};

//className="w-[100px]"
function TableDemo() {
  return (
    <>
      <div style={{ marginBottom: '10px', width: ' 25%' }}>
        <Input
          type="text"
          placeholder="Search Artist, Song"
          onChange={handleSearch}
        />
      </div>
      <div style={{ border: '1px solid #1e293b', borderRadius: '10px' }}>
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead>
                <div style={{ paddingLeft: '50%' }}>Id</div>
              </TableHead>
              <TableHead>Date Streamed</TableHead>
              <TableHead className="">Stream Count</TableHead>
              <TableHead className="w-[100px]">Song Name</TableHead>
              <TableHead>Artist</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <div style={{ paddingLeft: '50%' }}>{invoice.userId}</div>
                </TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.stream}</TableCell>
                <TableCell>{invoice.song}</TableCell>
                <TableCell>{invoice.artist}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
        </Table>
      </div>
    </>
  );
}

export default TableDemo;
