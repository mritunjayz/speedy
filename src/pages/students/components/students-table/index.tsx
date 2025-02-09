import { useState } from 'react';
import DataTable from '@/components/shared/data-table';
import { columns } from './columns';
import { Input } from '@/components/ui/input';

type TStudentsTableProps = {
  page: number;
  totalUsers: number;
  pageCount: number;
};

const tableData = [
  {
    songName: 'Blinding Lights',
    artist: 'The Weeknd',
    dateStreamed: '2025-02-10T14:30:00',
    streamCount: 1457823,
    userId: 'user_8392751'
  },
  {
    songName: 'Anti-Hero',
    artist: 'Taylor Swift',
    dateStreamed: '2025-02-10T09:15:00',
    streamCount: 982145,
    userId: 'user_4527890'
  },
  {
    songName: 'As It Was',
    artist: 'Harry Styles',
    dateStreamed: '2025-02-09T22:45:00',
    streamCount: 2134567,
    userId: 'user_9871234'
  },
  {
    songName: 'Flowers',
    artist: 'Miley Cyrus',
    dateStreamed: '2025-02-09T18:20:00',
    streamCount: 1678234,
    userId: 'user_2345678'
  },
  {
    songName: 'Stay With Me',
    artist: 'Sam Smith',
    dateStreamed: '2025-02-09T16:05:00',
    streamCount: 892345,
    userId: 'user_7654321'
  },
  {
    songName: 'Unholy',
    artist: 'Sam Smith & Kim Petras',
    dateStreamed: '2025-02-09T12:40:00',
    streamCount: 1234567,
    userId: 'user_1122334'
  },
  {
    songName: 'Shape of You',
    artist: 'Ed Sheeran',
    dateStreamed: '2025-02-09T10:15:00',
    streamCount: 3245678,
    userId: 'user_5544332'
  },
  {
    songName: 'Bad Guy',
    artist: 'Billie Eilish',
    dateStreamed: '2025-02-08T23:50:00',
    streamCount: 1789234,
    userId: 'user_9988776'
  },
  {
    songName: 'Levitating',
    artist: 'Dua Lipa',
    dateStreamed: '2025-02-08T20:30:00',
    streamCount: 1567890,
    userId: 'user_3344556'
  },
  {
    songName: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    dateStreamed: '2025-02-08T17:25:00',
    streamCount: 1890234,
    userId: 'user_7788990'
  },
  {
    songName: 'Heat Waves',
    artist: 'Glass Animals',
    dateStreamed: '2025-02-08T14:10:00',
    streamCount: 1345678,
    userId: 'user_1234567'
  },
  {
    songName: 'Shivers',
    artist: 'Ed Sheeran',
    dateStreamed: '2025-02-08T11:05:00',
    streamCount: 987654,
    userId: 'user_8877665'
  },
  {
    songName: 'Industry Baby',
    artist: 'Lil Nas X & Jack Harlow',
    dateStreamed: '2025-02-08T08:45:00',
    streamCount: 1678901,
    userId: 'user_2233445'
  }
  // {
  //   songName: "Stay",
  //   artist: "The Kid LAROI & Justin Bieber",
  //   dateStreamed: "2025-02-08T06:20:00",
  //   streamCount: 1456789,
  //   userId: "user_6677889"
  // }
];

export default function StudentsTable({ pageCount }: TStudentsTableProps) {
  const [data, setData] = useState(tableData);
  // const [search, setSearch] = useState("")

  const handleSearch = (event) => {
    console.log(event.target.value.trim(), 'kkkkkkkk');
    const value = event.target.value;
    // setSearch(value)
    // return
    if (value.trim() === '') {
      setData(tableData);
      return;
    }
    const filData = tableData.filter((item, index) => {
      const re = Object.values(item).filter((objValue) => {
        const d = (objValue as string)
          .toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase());
        console.log(d, 'hhhhhh', value);
        return d;
      });
      console.log(re.length);
      return re.length;
    });
    console.log(filData);
    setData([...filData]);
  };

  // useEffect(()=>{
  //   const filData = data.filter((item, index) => {
  //     const re = Object.values(item).filter((objValue) => {
  //       const d = (objValue as string)
  //         .toString()
  //         .toLowerCase()
  //         .includes(search.toString().toLowerCase());
  //         console.log(d, 'hhhhhh', search)
  //       return d;
  //     });
  //     console.log(re.length)
  //     return re.length;
  //   });
  //   console.log(filData)
  //   setData([...filData]);
  // }, [search])

  return (
    <>
      <div className="flex flex-1 gap-4 py-5" style={{ width: '25%' }}>
        <Input
          type="email"
          placeholder="Search People here"
          // defaultValue={search}
          onChange={handleSearch}
        />
      </div>
      {data && (
        <DataTable columns={columns} data={data} pageCount={pageCount} />
      )}
    </>
  );
}
