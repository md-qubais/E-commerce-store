const notFound = (req, res, next) => {
  const error = new Error(`not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
  // calling the next middleware and passing the error so it can be called to next middleware
  //where req res next are by default added to params
  //we just need to pass error
};

const errorHandler = (err,req,res,next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode); //here we are setting the statusCode
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};


export {notFound,errorHandler}