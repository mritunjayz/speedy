import { useState, useRef } from 'react';
import PageHead from '@/components/shared/page-head.jsx';
import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs.js';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { PlusIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
// import RecentSales from './components/recent-sales.js';

// import TableOverview from './components/table.tsx'
import StudentsTable from '../students/components/students-table';

const statsData = {
  revenue: {
    title: 'Total Revenue',
    value: '$45,231.890',
    description: '+20.1% from last month',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  stream: {
    title: 'Total Stream',
    value: '+2350',
    description: '+180.1% from last month',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  usersTotal: {
    title: 'Total Users',
    value: '+57300',
    description: '+201 since last hour',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  usersActive: {
    title: 'Active Users',
    value: '+573',
    description: '+20 since last hour',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  artist: {
    title: 'Top Artist',
    value: 'Arjit Singh',
    description: 'In continue',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  data1: {
    title: 'Top Artist',
    value: 'Arjit Singh',
    description: 'In continue',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  data2: {
    title: 'Top Artist',
    value: 'Arjit Singh',
    description: 'In continue',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  data3: {
    title: 'Top Artist',
    value: 'Arjit Singh',
    description: 'In continue',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  data4: {
    title: 'Top Artist',
    value: 'Arjit Singh',
    description: 'In continue',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  data5: {
    title: 'Top Artist',
    value: 'Arjit Singh',
    description: 'In continue',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  data6: {
    title: 'Top Artist',
    value: 'Arjit Singh',
    description: 'In continue',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
};

type Checked = DropdownMenuCheckboxItemProps['checked'];

export default function DashboardPage() {
  const [cardList, setCardList] = useState([
    'revenue',
    'stream',
    'usersTotal',
    'artist',
    'usersActive'
  ]);
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const contRef = useRef<HTMLDivElement>(null);
  // const [showActivityBar, setShowActivityBar] = useState<Checked>(false)
  // const [showPanel, setShowPanel] = useState<Checked>(false)

  return (
    <>
      <PageHead title="Dashboard | App" />
      <div className="max-h-screen flex-1 space-y-4 overflow-y-auto p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Analytics
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '126px',
                transition: 'height 0.3s ease-out'
              }}
              ref={contRef}
            >
              <div
                className={`grid gap-5 transition-all duration-300 ease-in-out md:grid-cols-2 lg:grid-cols-5`}
                style={{ width: '92%' }}
              >
                {cardList.map((stat, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {statsData[stat].title}
                      </CardTitle>
                      {statsData[stat].icon}
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {statsData[stat].value}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {statsData[stat].description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div
                style={{
                  marginRight: '2%',
                  marginTop: '45px',
                  marginLeft: '2%'
                }}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      style={{ borderRadius: '20px' }}
                      onClick={() => {
                        console.log('llll');
                      }}
                    >
                      <PlusIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Analytics List</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      checked={cardList.includes('data1')}
                      onCheckedChange={(e) => {
                        console.log('llll', e);
                        setShowStatusBar(!showStatusBar);

                        const d = [...cardList];
                        if (d.includes('data1')) {
                          const re = d.filter((item) => item !== 'data1');

                          let heightMultipler = re.length / 5;
                          console.log(heightMultipler, re.length);
                          const isWholeNumber = heightMultipler % 1 === 0;
                          heightMultipler = isWholeNumber
                            ? heightMultipler
                            : Math.floor(heightMultipler) + 1;

                          if (contRef.current) {
                            contRef.current.style.height = `${126 * heightMultipler}px`;
                          }

                          setCardList(re); // Remove if present
                        } else {
                          let we = [...d, 'data1'];
                          let heightMultipler = we.length / 5;
                          console.log(heightMultipler, we.length);
                          const isWholeNumber = heightMultipler % 1 === 0;
                          heightMultipler = isWholeNumber
                            ? heightMultipler
                            : Math.floor(heightMultipler) + 1;

                          if (contRef.current) {
                            contRef.current.style.height = `${126 * heightMultipler}px`;
                          }
                          setCardList(we); // Add if not present
                        }
                      }}
                    >
                      Data 1
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={cardList.includes('data2')}
                      onCheckedChange={(e) => {
                        console.log('llll', e);
                        setShowStatusBar(!showStatusBar);
                        const d = [...cardList];
                        if (d.includes('data2')) {
                          setCardList(d.filter((item) => item !== 'data2')); // Remove if present
                        } else {
                          setCardList([...d, 'data2']); // Add if not present
                        }
                      }}
                    >
                      Data 2
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={cardList.includes('data3')}
                      onCheckedChange={(e) => {
                        console.log('llll', e);
                        setShowStatusBar(!showStatusBar);
                        const d = [...cardList];
                        if (d.includes('data3')) {
                          setCardList(d.filter((item) => item !== 'data3'));
                        } else {
                          setCardList([...d, 'data3']);
                        }
                      }}
                    >
                      Data 3
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={cardList.includes('data4')}
                      onCheckedChange={(e) => {
                        console.log('llll', e);
                        setShowStatusBar(!showStatusBar);
                        const d = [...cardList];
                        if (d.includes('data4')) {
                          setCardList(d.filter((item) => item !== 'data4')); // Remove if present
                        } else {
                          setCardList([...d, 'data4']); // Add if not present
                        }
                      }}
                    >
                      Data 4
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={cardList.includes('data5')}
                      onCheckedChange={(e) => {
                        setShowStatusBar(!showStatusBar);
                        const d = [...cardList];
                        if (d.includes('data5')) {
                          setCardList(d.filter((item) => item !== 'data5')); // Remove if present
                        } else {
                          setCardList([...d, 'data5']); // Add if not present
                        }
                      }}
                    >
                      Data 5
                    </DropdownMenuCheckboxItem>
                    {/* <DropdownMenuCheckboxItem
                      checked={cardList.includes('data6')}
                      onCheckedChange={(e) => {
                        console.log('llll', e)
                        setShowStatusBar(!showStatusBar)
                        const d = [...cardList];
                        d.push('data6')
                        setCardList(d)
                      }}
                    >
                      Data 6
                    </DropdownMenuCheckboxItem> */}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="">
              {/* <TableOverview /> */}
              <StudentsTable page={1} totalUsers={100} pageCount={10} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
