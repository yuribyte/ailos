import { padStart, random } from 'lodash-es';
import { names, uniqueNamesGenerator } from 'unique-names-generator';

import { UserAccountModel as Model } from '../core/model/user.model';

export namespace DataMock {
  const generateFullName = (): string => {
    return uniqueNamesGenerator({
      dictionaries: [names, names, names],
      length: 3,
      separator: ' ',
      style: 'capital'
    });
  };

  const randomAccountNumber = (): string => {
    const accountNumber = padStart(random(999999).toFixed(), 6, '0');
    const digit = random(9);

    return `${accountNumber}-${digit}`;
  };

  export const rawAccountData = (): Model.User => {
    return {
      name: generateFullName(),
      status: 'Regular',
      applicationAccountNumber: randomAccountNumber(),
      checkinAccountNumber: randomAccountNumber()
    };
  };
}
