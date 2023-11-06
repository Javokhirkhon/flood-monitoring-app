import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { Reading } from '../types'

const Graph = ({ readings }: { readings: Reading[] }) => (
  <ResponsiveContainer width='100%' height={500}>
    <LineChart data={readings}>
      <XAxis dataKey='dateTime' />
      <YAxis />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip />
      <Legend />
      <Line
        type='monotone'
        dataKey='value'
        stroke='#8884d8'
        activeDot={{ r: 8 }}
      />
    </LineChart>
  </ResponsiveContainer>
)

export default Graph
