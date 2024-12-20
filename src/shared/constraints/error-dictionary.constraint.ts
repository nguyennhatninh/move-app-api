export enum ERRORS_DICTIONARY {
  // Users
  EMAIL_EXISTED = 'Email already exists in the system. Please select another Email',
  USER_NOT_FOUND = 'User not found',

  // Auth

  WAIT_ONE_MINUTE = 'Please wait 1 minute to resend the code.',
  INVALID_OTP = 'Wrong code. Please try again',
  OTP_WRONG_MANY_TIMES = "You've entered the wrong OTP too many times. Your account is locked for 10 minutes. Please try again later",

  // CLASS VALIDATOR
  VALIDATION_ERROR = 'ValidationError',
  //
  AUTHORIZE_ERROR = 'You are not authorize',
  TOKEN_ERROR = 'Token invalid',
  RESET_PASSWORD_FAIL = 'Reset password failed',

  // USER
  NOT_FOUND_ANY_USER = 'Not found any user',

  SIZE_AVATAR_ERROR = 'The file size exceeds the maximum limit of 5MB. Please choose a smaller file and try again.',
  ALLOWED_FILE_TYPES = 'Invalid file format. Only JPG, PNG, and GIF are allowed.',
  DIMENSIONS_AVATAR_ERROR = 'Image dimensions should be between 100x100 and 2000x2000.',
  NOT_FOUND_ANY_COUNTRY = 'Not found any country',
  INVALID_STATE = 'Invalid state',

  //Token
  GENERATE_TOKEN_FAIL = 'Generate token fail',
  VERIFY_TOKEN_FAIL = 'Token is not valid',

  //Account
  NOT_FOUND_ACCOUNT = 'Not found account',
  UPDATE_PASSWORD_FAIL = 'Update password fail',
  PASSWORD_RESTRICTION = 'Your new password cannot be the same as your current or previous password. Please choose a different password.',
  PASSWORD_INCORRECT = 'You have entered an invalid password',
  WRONG_METHOD = 'Your method cant change password',

  // SOCIAL
  TRY_ANOTHER_LOGIN_METHOD = 'An account with this email already exists us  ing a different login method. Please use the original method to log in',
  NOT_FOUND_ANY_CHANNEL_OF_THIS_USER = 'Not found any channel of this user',
  NOT_FOUND_ANY_CHANNEL = 'Not found any channel ',

  //video
  UPLOAD_THUMBNAIL_FAIL = 'Thumbnail resolution should be at least 1280x720 pixels',
  UPLOAD_VIDEO_FAIL = 'Upload video fail',
  NOT_FOUND_VIDEO = 'Not found video',
  UPDATE_VIDEO_FAIL = 'Update video fail',

  //category
  NOT_FOUND_CATEGORY = 'Not found category',
  CAN_NOT_DELETE_VIDEOS = 'Can not delete videos',

  // Comment
  NOT_FOUND_COMMENT = 'Not found comment',
  NOT_UPDATE_COMMENT = 'Can not update comment',
  NOT_CREATE_COMMENT = 'Can not create comment',
  NOT_DELETE_COMMENT = 'Can not delete comment',
  NOT_FOUND_COMMENT_REACTION = 'Not found comment reaction',
  NOT_UPDATE_COMMENT_REACTION = 'Can not update comment reaction',
  NOT_CREATE_COMMENT_REACTION = 'Can not create comment reaction',
  NOT_DELETE_COMMENT_REACTION = 'Can not delete comment reaction',

  //Payment
  ADD_PAYMENT_METHOD_FAIL = 'Add payment method fail',
  DETACH_PAYMENT_METHOD_FAIL = 'Delete payment method fail',
  NOT_ENOUGH_REPS = 'Insufficient balance',
  ONLY_ONE_WITHDRAW_PER_DAY = 'You can only perform one cashout per day',
  ONLY_THREE_WITHDRAW_PER_WEEK = 'You can only perform three cashout per week',

  //Date
  START_DATE_AFTER_END_DATE = 'Start Date is after to End Date',
  START_DATE_AFTER_CURRENT_DATE = 'Start Date is after to Current Date',
  END_DATE_AFTER_CURRENT_DATE = 'End Date is after to Current Date',

  //video history
  NOT_CREATE_VIDEO_HISTORY = 'Can not create video history',
}
