import { IcMan, IcWoman, IcDog, IcUser } from '@svg/index';
import React from 'react';

export const PROFILE_ICONS = [IcMan, IcWoman, IcDog, IcUser];

export const PROFILE_ICON_MAP: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  man: IcMan,
  woman: IcWoman,
  dog: IcDog,
  user: IcUser,
};

export function getProfileIconByName(name: string) {
  return PROFILE_ICON_MAP[name] || IcUser;
}
