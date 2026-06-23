const errorMiddleware = (err, req, res, next) => {
    try {
        let error = {...err};

        error.message = err.message;

        console.log(err);

        if (err.name === 'CastError') {
            const message = 'Resource not found';
            error = new Error(message);
            error.statusCode = 404;
        }

        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map((error) => error.message);
            error = new Error(message.join(', '));
            error.statusCode = 400;
        }

        res.status(err.statusCode || 500).json({success: false, message: error.message || 'Server Error'});
    } catch (error) {
        next(error);
    }
}

export default errorMiddleware;