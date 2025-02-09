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
    gender: 'female',
    id: 1,
    date_of_birth: '2002-04-26T00:00:00',
    job: 'Herbalist',
    city: 'Humphreyfurt',
    zipcode: '79574',
    latitude: 13.032103,
    profile_picture: 'https://api.slingacademy.com/public/sample-users/1.png',
    email: 'kayla.lopez.1@slingacademy.com',
    last_name: 'Lopez',
    first_name: 'Kayla',
    phone: '+1-697-415-3345x5215',
    street: '3388 Roger Wells Apt. 010',
    state: 'Vermont',
    country: 'Jordan',
    longitude: 112.16014
  },
  {
    gender: 'female',
    id: 2,
    date_of_birth: '1924-05-14T00:00:00',
    job: 'Technical author',
    city: 'West Angelaside',
    zipcode: '44459',
    latitude: 51.5214995,
    profile_picture: 'https://api.slingacademy.com/public/sample-users/2.png',
    email: 'tina.patrick.2@slingacademy.com',
    last_name: 'Patrick',
    first_name: 'Tina',
    phone: '800-865-4932',
    street: '4564 Gamble Light Suite 885',
    state: 'Kansas',
    country: 'Greenland',
    longitude: -21.22766
  },
  {
    gender: 'female',
    id: 3,
    date_of_birth: '1998-04-23T00:00:00',
    job: 'Psychologist, occupational',
    city: 'South Maria',
    zipcode: '69755',
    latitude: 61.273996,
    profile_picture: 'https://api.slingacademy.com/public/sample-users/3.png',
    email: 'brittany.bradford.3@slingacademy.com',
    last_name: 'Bradford',
    first_name: 'Brittany',
    phone: '205-439-1326',
    street: '0193 Amy Isle',
    state: 'Indiana',
    country: 'Micronesia',
    longitude: 147.58546
  },
  {
    gender: 'female',
    id: 4,
    date_of_birth: '1987-12-02T00:00:00',
    job: 'Proofreader',
    city: 'Danaberg',
    zipcode: '22397',
    latitude: -75.9252065,
    profile_picture: 'https://api.slingacademy.com/public/sample-users/4.png',
    email: 'lisa.thomas.4@slingacademy.com',
    last_name: 'Thomas',
    first_name: 'Lisa',
    phone: '(660)262-7257',
    street: '3500 Miller Springs Suite 728',
    state: 'Connecticut',
    country: 'Sudan',
    longitude: -88.334238
  },
  {
    gender: 'female',
    id: 5,
    date_of_birth: '1995-08-13T00:00:00',
    job: 'Health service manager',
    city: 'North Paul',
    zipcode: '44517',
    latitude: -16.2496365,
    profile_picture: 'https://api.slingacademy.com/public/sample-users/5.png',
    email: 'danielle.taylor.5@slingacademy.com',
    last_name: 'Taylor',
    first_name: 'Danielle',
    phone: '+1-308-453-1561',
    street: '7784 Obrien Hollow Suite 953',
    state: 'Pennsylvania',
    country: 'Oman',
    longitude: -87.298799
  },
  {
    gender: 'male',
    id: 6,
    date_of_birth: '1902-08-06T00:00:00',
    job: 'Financial manager',
    city: 'Amymouth',
    zipcode: '52484',
    latitude: -78.303175,
    profile_picture: 'https://api.slingacademy.com/public/sample-users/6.png',
    email: 'joshua.delgado.6@slingacademy.com',
    last_name: 'Delgado',
    first_name: 'Joshua',
    phone: '216-424-8988x0838',
    street: '1663 Simmons Points',
    state: 'Colorado',
    country: 'Angola',
    longitude: -141.625538
  },
  {
    gender: 'male',
    id: 7,
    date_of_birth: '1911-01-21T00:00:00',
    job: 'Child psychotherapist',
    city: 'New Valerieton',
    zipcode: '84185',
    latitude: -71.2706315,
    profile_picture: 'https://api.slingacademy.com/public/sample-users/7.png',
    email: 'kyle.brown.7@slingacademy.com',
    last_name: 'Brown',
    first_name: 'Kyle',
    phone: '+1-602-863-6880x1291',
    street: '203 Taylor Place Apt. 725',
    state: 'West Virginia',
    country: 'Burundi',
    longitude: -11.632148
  },
  {
    gender: 'female',
    id: 8,
    date_of_birth: '1952-09-23T00:00:00',
    job: 'Aeronautical engineer',
    city: 'Dustinstad',
    zipcode: '45577',
    latitude: 63.089701,
    profile_picture: 'https://api.slingacademy.com/public/sample-users/8.png',
    email: 'janice.ramirez.8@slingacademy.com',
    last_name: 'Ramirez',
    first_name: 'Janice',
    phone: '001-353-958-2737x873',
    street: '02762 Thomas Viaduct',
    state: 'South Carolina',
    country: 'Burkina Faso',
    longitude: -84.763775
  },
  {
    gender: 'female',
    id: 9,
    date_of_birth: '1988-10-31T00:00:00',
    job: 'Doctor, hospital',
    city: 'Blackport',
    zipcode: '50819',
    latitude: 29.278317,
    profile_picture: 'https://api.slingacademy.com/public/sample-users/9.png',
    email: 'tonya.berg.9@slingacademy.com',
    last_name: 'Berg',
    first_name: 'Tonya',
    phone: '548.357.1630x659',
    street: '1612 Amanda Lights Suite 512',
    state: 'Maryland',
    country: 'Belize',
    longitude: -51.450622
  },
  {
    gender: 'male',
    id: 10,
    date_of_birth: '1903-03-30T00:00:00',
    job: 'Television production assistant',
    city: 'Cooperborough',
    zipcode: '85674',
    latitude: 40.834485,
    profile_picture: 'https://api.slingacademy.com/public/sample-users/10.png',
    email: 'timothy.lutz.10@slingacademy.com',
    last_name: 'Lutz',
    first_name: 'Timothy',
    phone: '615-244-8902',
    street: '4545 Ashley Plains',
    state: 'Utah',
    country: 'Guadeloupe',
    longitude: 135.393211
  }
];

export default function StudentsTable({ pageCount }: TStudentsTableProps) {
  const [data, setData] = useState(tableData);

  const handleSearch = (event) => {
    console.log(event);
    const value = event.target.value;
    if (value.trim() === '') {
      setData(tableData);
      return;
    }
    const filData = data.filter((item, index) => {
      const re = Object.values(item).filter((objValue) => {
        const d = (objValue as string)
          .toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase());
        return d;
      });
      // console.log(re);
      return re.length;
    });
    setData([...filData]);
  };

  return (
    <>
      <div className="flex flex-1 gap-4 py-5" style={{ width: '25%' }}>
        <Input
          type="email"
          placeholder="Search People here"
          onChange={handleSearch}
        />
      </div>
      {data && (
        <DataTable columns={columns} data={data} pageCount={pageCount} />
      )}
    </>
  );
}
