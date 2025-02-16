'use client';

import * as React from 'react';
import { useState } from 'react';
import DataTable from '@/components/shared/data-table';
// import { Button } from "@/components/ui/button";
import { SlidersHorizontalIcon } from 'lucide-react';
import { columns } from './columns';
import { Input } from '@/components/ui/input';
import './indec.css';
// import Test from './test.tsx'

type TStudentsTableProps = {
  page: number;
  totalUsers: number;
  pageCount: number;
};

import * as Menubar from '@radix-ui/react-menubar';
import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';

const MenubarMenu = Menubar.Menu;
const MenubarSub = Menubar.Sub;

const MenubarRoot = React.forwardRef<
  React.ElementRef<typeof Menubar.Root>,
  React.ComponentPropsWithoutRef<typeof Menubar.Root>
>(({ className, ...props }, ref) => (
  <Menubar.Root
    ref={ref}
    className={cn(
      'flex h-10 items-center space-x-1 rounded-md border bg-background p-1',
      className
    )}
    {...props}
  />
));
MenubarRoot.displayName = Menubar.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof Menubar.Trigger>,
  React.ComponentPropsWithoutRef<typeof Menubar.Trigger>
>(({ className, ...props }, ref) => (
  <Menubar.Trigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      className
    )}
    {...props}
  />
));
MenubarTrigger.displayName = Menubar.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof Menubar.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof Menubar.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <Menubar.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </Menubar.SubTrigger>
));
MenubarSubTrigger.displayName = Menubar.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof Menubar.SubContent>,
  React.ComponentPropsWithoutRef<typeof Menubar.SubContent>
>(({ className, ...props }, ref) => (
  <Menubar.SubContent
    ref={ref}
    className={cn(
      ' sub-menu z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
MenubarSubContent.displayName = Menubar.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof Menubar.Content>,
  React.ComponentPropsWithoutRef<typeof Menubar.Content>
>(
  (
    { className, align = 'start', alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <Menubar.Portal>
      <Menubar.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      />
    </Menubar.Portal>
  )
);
MenubarContent.displayName = Menubar.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof Menubar.Item>,
  React.ComponentPropsWithoutRef<typeof Menubar.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Menubar.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
MenubarItem.displayName = Menubar.Item.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof Menubar.Separator>,
  React.ComponentPropsWithoutRef<typeof Menubar.Separator>
>(({ className, ...props }, ref) => (
  <Menubar.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
MenubarSeparator.displayName = Menubar.Separator.displayName;

const tableData = [
  {
    songName: 'Blinding Lights',
    artist: 'The Weeknd',
    dateStreamed: '2025-02-10T14:30:00',
    streamCount: 1457823,
    userId: '8392751'
  },
  {
    songName: 'Anti-Hero',
    artist: 'Taylor Swift',
    dateStreamed: '2025-02-10T09:15:00',
    streamCount: 982145,
    userId: '4527890'
  },
  {
    songName: 'As It Was',
    artist: 'Harry Styles',
    dateStreamed: '2025-02-09T22:45:00',
    streamCount: 2134567,
    userId: '9871234'
  },
  {
    songName: 'Flowers',
    artist: 'Miley Cyrus',
    dateStreamed: '2025-02-09T18:20:00',
    streamCount: 1678234,
    userId: '2345678'
  },
  {
    songName: 'Stay With Me',
    artist: 'Sam Smith',
    dateStreamed: '2025-02-09T16:05:00',
    streamCount: 892345,
    userId: '7654321'
  },
  {
    songName: 'Unholy',
    artist: 'Sam Smith & Kim Petras',
    dateStreamed: '2025-02-09T12:40:00',
    streamCount: 1234567,
    userId: '1122334'
  },
  {
    songName: 'Shape of You',
    artist: 'Ed Sheeran',
    dateStreamed: '2025-02-09T10:15:00',
    streamCount: 3245678,
    userId: '5544332'
  },
  {
    songName: 'Bad Guy',
    artist: 'Billie Eilish',
    dateStreamed: '2025-02-08T23:50:00',
    streamCount: 1789234,
    userId: '9988776'
  },
  {
    songName: 'Levitating',
    artist: 'Dua Lipa',
    dateStreamed: '2025-02-08T20:30:00',
    streamCount: 1567890,
    userId: '3344556'
  },
  {
    songName: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    dateStreamed: '2025-02-08T17:25:00',
    streamCount: 1890234,
    userId: '7788990'
  },
  {
    songName: 'Heat Waves',
    artist: 'Glass Animals',
    dateStreamed: '2025-02-08T14:10:00',
    streamCount: 1345678,
    userId: '1234567'
  },
  {
    songName: 'Shivers',
    artist: 'Ed Sheeran',
    dateStreamed: '2025-02-08T11:05:00',
    streamCount: 987654,
    userId: '8877665'
  },
  {
    songName: 'Industry Baby',
    artist: 'Lil Nas X & Jack Harlow',
    dateStreamed: '2025-02-08T08:45:00',
    streamCount: 1678901,
    userId: '2233445'
  }
];
// {
//   songName: "Stay",
//   artist: "The Kid LAROI & Justin Bieber",
//   dateStreamed: "2025-02-08T06:20:00",
//   streamCount: 1456789,
//   userId: "user_6677889"
// }
// ];

export default function StudentsTable({ pageCount }: TStudentsTableProps) {
  const [data, setData] = useState(tableData);
  // const [search, setSearch] = useState("")

  const handleSearch = (event) => {
    const value = event.target.value;
    // setSearch(value)
    // return
    if (value.trim() === '') {
      setData(tableData);
      return;
    }

    const filData = tableData.filter((item, index) => {
      const re = Object.values(item).filter((objValue) => {
        if (item.songName.includes(value) || item.artist.includes(value)) {
          return true;
        }
        return false;
      });
      console.log(re.length);
      return re.length;
    });
    console.log(filData);
    setData([...filData]);
  };

  const handleColumSearch = (value, column, type) => {
    console.log(value, column, type, 'ffffff');

    let filData;
    if (type === 'contains') {
      filData = tableData.filter((item, index) => {
        if (
          item[column]
            .toString()
            .toLowerCase()
            .includes(value.toString().toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
    }

    if (type === 'start') {
      filData = tableData.filter((item, index) => {
        if (
          item[column]
            .toString()
            .toLowerCase()
            .startsWith(value.toString().toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
    }

    if (type === 'end') {
      filData = tableData.filter((item, index) => {
        if (
          item[column]
            .toString()
            .toLowerCase()
            .endsWith(value.toString().toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
    }

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
          placeholder="Search Artist, Songs Here"
          // defaultValue={search}
          onChange={handleSearch}
        />
        {/* <Test /> */}

        <MenubarRoot>
          <MenubarMenu>
            <MenubarTrigger>
              <SlidersHorizontalIcon />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>Artist</MenubarSubTrigger>
                <MenubarSubContent>
                  <div style={{ display: '' }}>
                    <p
                      style={{
                        marginBottom: '8px',
                        marginLeft: '2px',
                        fontSize: '0.875rem'
                      }}
                    >
                      Starts With
                    </p>
                    <Input
                      placeholder="Type here ..."
                      onChange={(event) => {
                        const value = event.target.value;
                        // setSearch(value)
                        // return
                        if (value.trim() === '') {
                          setData(tableData);
                          return;
                        }

                        handleColumSearch(value, 'artist', 'start');
                      }}
                    />
                  </div>
                  <div style={{ marginTop: '16px' }}>
                    <p
                      style={{
                        marginBottom: '8px',
                        marginLeft: '2px',
                        fontSize: '0.875rem'
                      }}
                    >
                      Ends With
                    </p>
                    <Input
                      placeholder="Type here ..."
                      onChange={(event) => {
                        const value = event.target.value;
                        // setSearch(value)
                        // return
                        if (value.trim() === '') {
                          setData(tableData);
                          return;
                        }

                        handleColumSearch(value, 'artist', 'end');
                      }}
                    />
                  </div>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />

              <MenubarSub>
                <MenubarSubTrigger>User ID</MenubarSubTrigger>
                <MenubarSubContent>
                  {/* <MenubarItem onSelect={(event) => event.preventDefault()}>Contains */}
                  <p
                    style={{
                      marginBottom: '8px',
                      marginLeft: '2px',
                      fontSize: '0.875rem'
                    }}
                  >
                    Contains
                  </p>
                  <Input
                    placeholder="Type here ..."
                    onChange={(event) => {
                      const value = event.target.value;
                      // setSearch(value)
                      // return
                      if (value.trim() === '') {
                        setData(tableData);
                        return;
                      }

                      handleColumSearch(value, 'userId', 'contains');
                    }}
                  />
                  {/* </MenubarItem> */}
                </MenubarSubContent>
              </MenubarSub>
              {/* <MenubarItem onSelect={(event) => event.preventDefault()}>Print...</MenubarItem> */}
            </MenubarContent>
          </MenubarMenu>
        </MenubarRoot>
      </div>
      {data && (
        <DataTable columns={columns} data={data} pageCount={pageCount} />
      )}
    </>
  );
}
