export const WELCOME_NOTE = "Welcome to Getsafe's Developer Insurance";
export const GET_STARTED = "Get started!";
export const ERROR_MSG =
  "Please enter the value in the above field to continue";
export const AGE = "Age:";
export const EMAIL = "Email:";
export const FIRST_NAME = "First Name:";
export const LAST_NAME = "Last Name:";
export const NEXT = "Next";
export const PURCHASE = "Purchase";
export const DEVELOPER_INSURANCE = "Developer Insurance";
export const VALID_NAME_ERROR =
  "Please enter a valid value. No special characters and numbers are allowed.";
export const VALID_EMAIL_ERROR =
  "Please enter a valid email in the format xxx@xxx.com. No special characters except '@' and '.' are allowed.";
export const VALID_AGE_ERROR = "Please enter a valid age.";

export enum ProductIds {
  devIns = "dev_ins"
}

export const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: DEVELOPER_INSURANCE
};

export const NAME_REGEX = new RegExp("[a-zA-Z]");
export const EMAIL_REGEX = new RegExp("[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]");
