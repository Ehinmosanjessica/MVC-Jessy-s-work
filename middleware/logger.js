    const date = new Date()
    

    const logger = (req, res, next) => {
        const result = `API with Endpoint ${req.url} and method: ${req.method} was called at:${date.toLocaleString()}`;

            console.log(result);

        next();
    }


    module.exports = logger