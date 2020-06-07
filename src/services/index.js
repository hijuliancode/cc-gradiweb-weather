const API_URL = 'https://api.openweathermap.org/data/2.5'
const API_KEY = '19efbb79d2b3cdabdd6764b45ffec8c3'
// export const API = () => {
//   getForecasts() {}
//   getPlaces() {}
//   getLocations() {}

//   postPlace() {}
//   postLocation() {}

//   deleteLocation() {}
// }

export const getCurrentCity = (city = 'Bogota') => {
  const url = `${API_URL}/weather?q=${city}&appid=${API_KEY}`
  sendHTTPRequest('GET', url)
    .then(responseData => {
      console.log('getCurrentCity =>', responseData)
      return responseData
    })
    .catch(err => {
      console.error(new Error(err))
    })
}
export const getForecasts = (city = 'Bogota') => {
  const url = `${API_URL}/forecast?q=${city}&appid=${API_KEY}`
  sendHTTPRequest('GET', url)
    .then(responseData => {
      console.log('getForecasts =>', responseData)
      return responseData
    })
    .catch(err => {
      console.error(new Error(err))
    })
}
export const getReviewers = () => {
  const url = 'https://reqres.in/api/users?page=1';
  sendHTTPRequest('GET', url)
    .then(responseData => {
      console.log('getReviewers =>', responseData)
      return responseData
    })
    .catch(err => {
      console.error(new Error(err))
    })
}

export const postPlace = () => {}
export const getPlaces = () => {}
export const deletePlaces = () => {}

export const postLocation = () => {}
export const getLocations = () => {}
export const deleteLocations = () => {}

const sendHTTPRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const req = new XMLHttpRequest()
    req.open(method, url, true)
    req.responseType = 'json'
    if(data) {
      req.setRequestHeader('Content-Type', 'application/json')
    }
    req.onload = () => {
      if (req.status >= 400) {
        reject(req.response)
      } else {
        resolve(req.response)
      }
    }
    // Handle network Errors
    req.onerror = function() {
      reject(new Error('Network Error'))
    }
    req.send(JSON.stringify(data))
  })
  return promise
}
