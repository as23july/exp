const { constants } = require("../constants");
const errorhandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation Failed",
            message: err.message,
            stackTrace: err.stackTrace
            });
            break;
        case constants.NOT_FOUND:
            res.json({ title: "Not found",
            message: err.message,
            stackTrace: err.stackTrace
            });
        case constants.UNAUTHORISE:
            res.json({ title: "Un Authorise",
            message: err.message,
            stackTrace: err.stackTrace
            });
        case constants.FORBIDDEN:
            res.json({ title: "Forbidden",
            message: err.message,
            stackTrace: err.stackTrace
            });
        case constants.SERVER_ERROR:
            res.json({ title: "Server Error",
            message: err.message,
            stackTrace: err.stackTrace
            });

        default:
            console.log("no error");
            break;
    }


};

module.exports = errorhandler;