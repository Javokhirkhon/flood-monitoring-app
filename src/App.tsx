import { CircularProgress, Container, Divider, Typography } from '@mui/material'
import Graph from './components/Graph'
import Search from './components/Search'
import Table from './components/Table'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Reading } from './types'

export const API_URL = 'http://environment.data.gov.uk/flood-monitoring/'

const App = () => {
  const [selectedStation, setSelectedStation] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [readings, setReadings] = useState<Reading[]>([])

  useEffect(() => {
    // Fetch readings when a station is selected
    if (!selectedStation) return

    setIsLoading(true)

    // Calculate the start time for the last 24 hours
    const twentyFourHoursAgo = new Date()
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24)
    // Format the start time to fit the API's timestamp format
    const since = twentyFourHoursAgo.toISOString()

    // Fetch readings for the selected station for the last 24 hours
    axios
      .get(API_URL + `id/stations/${selectedStation}/readings`, {
        params: { since },
      })
      .then((res) => {
        if (res.status === 200) {
          setReadings(res.data.items)
        } else {
          console.error('Network response was not ok')
        }
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => setIsLoading(false))
  }, [selectedStation])

  return (
    <Container component='main' sx={{ textAlign: 'center', py: 8 }}>
      <Typography component='h1' variant='h4'>
        Flood Monitoring App
      </Typography>
      <Search {...{ selectedStation, setSelectedStation }} />
      {selectedStation && isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Graph readings={readings} />
          <Divider sx={{ my: 4 }} />
          <Table readings={readings} />
        </>
      )}
    </Container>
  )
}

export default App
