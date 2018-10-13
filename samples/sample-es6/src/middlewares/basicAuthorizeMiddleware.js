export function basicAuthorizeMiddleware(user, password) {
  return (req, res, next) => {

    const header = req.headers['authorization'] || '',        // get the header
      token = header.split(/\s+/).pop() || '',            // and the encoded auth token
      auth = new Buffer.from(token, 'base64').toString(),    // convert from base64
      parts = auth.split(/:/),                          // split on colon
      userName = parts[0],
      userPassword = parts[1];

    if (userName !== user || userPassword !== password) {
      return res.status(401).json({message: 'Unauthorized'});
    }

    return next();
  };
}