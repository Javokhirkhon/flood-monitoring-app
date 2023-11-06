import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_URL } from '../App'
import {
  Box,
  Button,
  LinearProgress,
  TextField,
  Typography,
} from '@mui/material'
import useDebounce from '../hooks/useDebounce'

interface SearchProps {
  selectedStation: string
  setSelectedStation: (id: string) => void
}

const Search = ({ selectedStation, setSelectedStation }: SearchProps) => {
  const [inputValue, setInputValue] = useState('')
  const debouncedInput = useDebounce(inputValue, 300)
  const [isLoading, setIsLoading] = useState(false)
  const [stations, setStations] = useState([])

  useEffect(() => {
    // Clear stations and selected station when input changes
    setStations([])
    setSelectedStation('')

    // Fetch stations based on debounced input
    if (!debouncedInput) return

    setIsLoading(true)

    axios
      .get(API_URL + 'id/stations', { params: { search: debouncedInput } })
      .then((res) => {
        if (res.status === 200) {
          setStations(res.data.items)
        } else {
          console.error('Network response was not ok')
        }
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => setIsLoading(false))
  }, [debouncedInput, setSelectedStation])

  return (
    <Box my={4}>
      <TextField
        fullWidth
        type='search'
        variant='outlined'
        label='Search for a measurement station'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        sx={{ mb: 4 }}
      />
      {isLoading ? (
        <LinearProgress />
      ) : (
        stations?.map(({ label, notation }) => (
          <Button
            key={notation}
            fullWidth
            onClick={() => {
              setSelectedStation(notation)
              setStations([])
            }}
            variant='outlined'
            sx={{ mb: 2 }}
          >
            {label}
          </Button>
        ))
      )}
      {selectedStation && (
        <Typography fontWeight='bold'>
          Selected Station ID: {selectedStation}
        </Typography>
      )}
    </Box>
  )
}

export default Search
