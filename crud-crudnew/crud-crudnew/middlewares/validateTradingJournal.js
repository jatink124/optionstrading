const { body, validationResult } = require('express-validator');

const validateTradingJournal = [
  body('dateTime').isISO8601().withMessage('Invalid date format'),
  body('assetType').isIn(['nifty', 'banknifty']).withMessage('Invalid asset type'),
  body('optionType').isIn(['call', 'put']).withMessage('Invalid option type'),
  body('entryPrice').isFloat({ gt: 0 }).withMessage('Entry price must be a positive number'),
  body('exitPrice').isFloat({ gt: 0 }).withMessage('Exit price must be a positive number'),
  body('contractSize').isInt({ gt: 0 }).withMessage('Contract size must be a positive integer'),
  body('strategy').notEmpty().withMessage('Strategy is required'),
  body('reasonForEntry').notEmpty().withMessage('Reason for entry is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateTradingJournal;
