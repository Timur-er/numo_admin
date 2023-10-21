import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { i18n } from '../../../I18n'

const data = [
  {
    name: 'Jan',
    subs: 4000,
    unsubs: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    subs: 3000,
    unsubs: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    subs: 2000,
    unsubs: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    subs: 2780,
    unsubs: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    subs: 1890,
    unsubs: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    subs: 2390,
    unsubs: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    subs: 3490,
    unsubs: 4300,
    amt: 2100,
  },
];

const Plot = () => {
  return (
    <div className="w-[30rem] h-[20rem] m-auto mt-5">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line name={i18n.subs} type="monotone" dataKey="subs" stroke="#1964FF" activeDot={{ r: 8 }} />
          <Line name={i18n.unsubs} type="monotone" dataKey="unsubs" stroke="red" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Plot