const fs = require('fs');

exports.dataFetch = function(req, res) {
  return new Promise((resolve, reject) => {
    fs.readFile('src/results.json', function(error, data) {
      const jsonData = JSON.parse(data.toString());
      const filteredDada = jsonData.data.filter(genreBooks => {
        return genreBooks.doelgroep === 'ageYouth';
      })
      const filteredData = filteredDada.filter(imgBooks => {
        return imgBooks.cover_image !== null;
      })

      let result = {
        amount: 9,
        val: filteredData
      }
      // const newNine = await getUnique(9, filteredData);
      resolve(result);
    });
  })


}

exports.clickedBooks = function(body, ) {
return new Promise((resolve, reject) => {
  const resh = [];
  fs.readFile('src/results.json', function(error, data) {
    const jsonData = JSON.parse(data.toString());
    const filteredDada = jsonData.data.filter(genreBooks => {
      return genreBooks.doelgroep === 'ageYouth';
    })
    const filteredData = filteredDada.filter(imgBooks => {
      return imgBooks.cover_image !== null;
    })

         Object.keys(body).forEach(book=>{
             // console.log(book)
             filteredData.forEach(item=>{
               if (book === item.title){
                  resh.push(item)
               }
           })
           // console.log(resh, 'coming from helper')
           resolve(resh);
           //check of title in filtered data zit----- Done
           //zo ja haal ze eruit en stop ze in een array----- Done
           // render array op detail page
           // render 20 willekeurige items op detail page:----- Done
         })
})

})
}

exports.getUnique = function(count, data) {
  return new Promise((resolve, reject) => {
    const tmp = data.slice(data);
    const ret = [];
    for (let i = 0; i < count; i++) {
      let index = Math.floor(Math.random() * tmp.length);
      let removed = tmp.splice(index, 1);

      ret.push(removed[0]);
    }
    resolve(ret);
  })
}
