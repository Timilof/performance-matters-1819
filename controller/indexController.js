const path = require('path');
const bodyParser = require('body-parser');
const { dataFetch, getUnique, clickedBooks } = require('../helpers/helper')


exports.index = async (req, res) => {
  let value = await dataFetch()
  let final = await getUnique(value.amount, value.val)
  res.render('index', {final:final});
}

exports.about = (req, res) => {
  res.render('about');
}

exports.handleRequest = async (req, res) => {
  // console.log('inside handle request', req.body);
let value = await dataFetch()
let final = await getUnique(20, value.val)
let cBooks = await clickedBooks(req.body);
console.log(cBooks, 'coming from handle request');
res.render('detail', {final:final});
// logic schrijven die praat met helper function en dingen doet met de data || opnieuw request, met de req.body
}

exports.notFound = (req, res) => {
  res.render('notFound');
}
