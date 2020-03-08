const connection = require('../config/connection');

const getBurgers = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers', (err, burgersdata) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      resolve(burgersdata);
    });
  });
};
const createburger = (burgersObj) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burgers SET?', burgersObj, (err, burgersdata) => {
      if (err) {
        console.log(err);
      return reject(err);
      }
      resolve(burgersdata)
    })
  })
}
const updateBurgers = (burgersObj, burgersId) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE burgers SET ? WHERE id = ?', [burgersObj, burgersId], (err, burgersdata) => {
    
      if (err) {
        console.log(err);
        return reject(err);
    } 
    else if (burgersData.affectedRows === 0){
   return resolve({message: "Couldn't find that burger item!", code: 404});
   }
      resolve({ message: 'burgers menu updated successfully!', code:200 })
    })
  })
}


const deleteBurgers = (burgersId) => {
 return new Promise((resolve, reject) => {
  connection.query('DELETE FROM burgers WHERE id = ?', [burgersId],(err, burgerdata) => {
    if (err) {
      console.log(err);
      return reject(err);
    } else if (CharacterData.affectedRows === 0) {
      return resolve({ message: "couldn't find that burger id"});
    }

    resolve({ message:'Burger Devoured!'})
  });
  });
};

module.exports = {getBurgers, createburger, updateBurgers, deleteBurgers };