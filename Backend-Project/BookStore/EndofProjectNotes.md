We can more optimized our project by implementing the Error Handling techniques. Few of them are:

    -- try and catch blocks
    -- async function and middlewares
    -- wrapAsync        // separate file
    -- Custom ExpressError      // separate file
    -- Error.ejs        // our own way of displaying errors(alerts, banners, text etc) in separate file
    -- Schema Validations       // Error handling from DB side. e.g, individual fields etc which must be required. JOI NPM makes our Schema Validations easy. JOI schema is server side schema, not the mongoose schema.