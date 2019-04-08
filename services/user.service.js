const constants = require('../constants/appSettings');

exports.getUserUid = async id => {
  const param = id.split("="); 
  if(param[0] === 'dni'){
    return constants.executeQuery(`SELECT * FROM user where dni = '${param[1]}'`);
  }
  return constants.executeQuery(`SELECT * FROM user where email = '${param[1]}'`);
};
exports.saveUser = async user => {
  const userOld = await constants.executeQuery(`SELECT * FROM user where dni = '${user.dni}'`);
  return userOld.length === 0 ? insertUser(user) : updateUser(user);
};
const insertUser = async user => {
  const result =  await constants.executeQuery(await generateQueryInsert(user));
  if(result.affectedRows > 0){
    return user;
  }
  return result;
};

const updateUser = async user => {
  const result = await constants.executeQuery(await generateQueryUpdate(user));
  if(result.affectedRows > 0){
    return user;
  }
  return result;
};

const generateQueryInsert = user =>{
  const { dni, email, name, newsletter, captation,address, postal_code, city,region, country ,observation} = user;
   return `INSERT INTO user (dni,email,name,captation,newsletter,address,postal_code,city, region, country,observation) 
    values ('${dni}','${email}','${name}','${newsletter}','${captation}','${address}','${postal_code}','${region}','${city}','${country}','${observation}')`;
}
const generateQueryUpdate = user =>{ 
  const { dni, email, name, newsletter, captation,address, postal_code, city,region, country ,observation} = user;
  return `UPDATE user set name = '${name}', email = '${email}', newsletter = '${newsletter}' ,
  captation ='${captation}', address ='${address}', postal_code = '${postal_code}'
  ,city = '${city}' ,region ='${region}' ,country = '${country}', observation = '${observation}'
    where dni = '${dni}'`;
  }
