/*
 *
 * CreateAccount actions
 *
 */

import { DEFAULT_ACTION } from './constants';

export default function defaultAction(form) {
  console.log('submitAction = ', form);
  return {
    type: DEFAULT_ACTION,
    form,
  };
}
