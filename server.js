const express       = require('express'),
      axios         = require('axios'),
      cors          = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get('/api',  async(req, res) => {
  const result = await axios.get('http://www.colourlovers.com/api/palettes/new?format=json');
  res.send(JSON.stringify(result.data));
})

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));