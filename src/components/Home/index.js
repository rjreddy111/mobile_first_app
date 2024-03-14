import {useState, useEffect} from 'react'
import {TailSpin} from 'react-loader-spinner'

import TableData from '../TableData'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const Home = () => {
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  })

  useEffect(() => {
    const getData = async () => {
      setApiResponse({
        status: apiStatusConstants.inProgress,
        data: null,
        errorMsg: null,
      })
      const url =
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10'

      const response = await fetch(url)
      const responseData = await response.json()

      if (response.ok) {
        setApiResponse(prevResponse => ({
          ...prevResponse,
          status: apiStatusConstants.success,
          data: responseData,
        }))
      }
    }
    getData()
  }, [])

  const renderFailureView = () => {}

  const renderSuccessView = () => {
    const {data} = apiResponse

    const formattedData = data.jokes.map(eachData => ({
      id: eachData.id,
      joke: eachData.joke,
    }))
    console.log(formattedData)
    return <TableData formattedData={formattedData} />
  }

  const renderLoadingView = () => (
    <div className="loading">
      <TailSpin type="roll" color="#ffffff" height="50" width="50" />
    </div>
  )

  const renderOutputResult = () => {
    const {status} = apiResponse
    switch (status) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }
  return <div className="main-page">{renderOutputResult()}</div>
}

export default Home
