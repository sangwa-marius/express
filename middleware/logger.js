import colors from 'colors';

const logger  = (req,res,next)=>{
  const methColors ={
    GET:'green',
    POST:'blue',
    DELETE:'red',
    PUT:'yellow'
  }
  const colors = methColors[req.method] || 'white';
  console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`[colors]);
  next()
}

export default logger;