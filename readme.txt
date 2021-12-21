 const axios = require('axios').default;



 axios.get('https://api.easybroker.com/v1/properties?page=1&limit=20', {
    headers: {
      'X-Authorization': `Bearer ${APIKEY}`
    }
  })
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    console.error(error)
  })


hjg8afdth1k4e2mmq0vulhveerlq1e