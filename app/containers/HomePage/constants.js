/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const LOAD_TOWN = 'boilerplate/Home/LOAD_TOWN';
export const LOAD_TOWN_SUCCESS = 'boilerplate/Home/LOAD_TOWN_SUCCESS';
export const LOAD_TOWN_ERROR = 'boilerplate/Home/LOAD_TOWN_ERROR';
