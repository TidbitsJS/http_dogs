const httpStatusCodes = [
    // Informational 1xx
    100, 101, 102, 103,

    // Successful 2xx
    200, 201, 202, 203, 204, 205, 206, 207, 208, 226,

    // Redirection 3xx
    300, 301, 302, 303, 304, 305, 306, 307, 308,

    // Client Errors 4xx
    400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410,
    411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423,
    424, 426, 428, 429, 431, 451,

    // Server Errors 5xx
    500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511
];

export default httpStatusCodes
