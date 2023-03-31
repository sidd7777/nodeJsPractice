// @desc    get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: "Show all bootcamps",
        hello: req.hello
    });
};
 

// @desc    get bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ "success" : true, msg : `Show Bootcamp ${req.params.id}` });
};


// @desc    CREATE new bootcamp
// @route   POST /api/v1/bootcamps
// @access  PRIVATE

exports.createBootcamps = (req, res, next) => {
    res.status(200).json({ "success" : true, msg : "add new bootcamp" });
};

// @desc    update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  PRIVATE

exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ "success": true, msg: `update bootcamp ${req.params.id}` });
};

// @desc    DELETE  bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  PRIVATE

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ "success": true, msg: `Delete bootcamp ${req.params.id}` });
    
};