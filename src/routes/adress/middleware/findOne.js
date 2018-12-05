const data = require('../../../models/adress/data');

export default function findOne(req, res) {
  res.json(data.filter(poi => poi.title.toLowerCase().indexOf(req.params.search.toLowerCase()) !== -1 || (poi.details !== undefined ? poi.details.toLowerCase().indexOf(req.params.search.toLowerCase()) !== -1 : false)));
}
