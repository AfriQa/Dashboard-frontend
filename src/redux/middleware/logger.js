const logger = (param) => (store) => (next) => (action) => {
  console.log("Logging", action);
  return next(action);
};

export default logger;
