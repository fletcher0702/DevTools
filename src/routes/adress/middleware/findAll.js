
const data = require('../../../models/adress/data');

export default function getAdresses(req, res) {
  return res.send().json(data);
}
