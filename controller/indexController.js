const path = require('path');
const bodyParser = require('body-parser');
const {
  dataFetch,
  getUnique,
  clickedBooks
} = require('../helpers/helper')


exports.index = async (req, res) => {
  let value = await dataFetch()
  let final = await getUnique(value.amount, value.val)
  res.render('index', {
    final: final
  });
}

exports.offline = (req, res) => {
  res.render('offline');
}

exports.detail = async (req, res) => {
  let value = await dataFetch()
  let final = await getUnique(20, value.val)
  let cBooks = await clickedBooks(req.query);
  console.log(cBooks, 'coming from handle request');
  res.render('detail', {final: final, cBooks: cBooks});
}

exports.notFound = (req, res) => {
  res.render('notFound');
}
