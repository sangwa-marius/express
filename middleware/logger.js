const logger  = (req,res,next)=>{
  console.log(`${req.method} ${req.protocol}://localhost:3000${req.originalUrl}`);
  next()
}

export default logger;