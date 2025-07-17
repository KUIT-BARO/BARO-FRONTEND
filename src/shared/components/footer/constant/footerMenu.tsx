import {
  IcClockBlack,
  IcPlusBlue,
  IcClockWhite,
  IcHome,
  IcHomeBlack,
  IcPerson,
  IcPersonBlack,
  IcSearch,
  IcSearchBlack,
} from '@svg/index';

export const MENUS = [
  {
    id: 'HOME',
    text: '홈',
    icon: <IcHome width="2.4rem" height="2.4rem" />,
    iconClick: <IcHomeBlack width="2.4rem" height="2.4rem" />,
  },
  {
    id: 'SEARCH',
    text: '탐색',
    icon: <IcSearch width="2.4rem" height="2.4rem" />,
    iconClick: <IcSearchBlack width="2.4rem" height="2.4rem" />,
  },
  {
    id: 'PROMISE',
    text: '',
    icon: <IcPlusBlue width="3.9rem" height="3.9rem" />,
    iconClick: <IcPlusBlue width="3.9rem" height="3.9rem" />,
  },
  {
    id: 'PROMISES',
    text: '약속',
    icon: <IcClockWhite width="2.4rem" height="2.4rem" />,
    iconClick: <IcClockBlack width="2.4rem" height="2.4rem" />,
  },
  {
    id: 'PERSON',
    text: '나',
    icon: <IcPerson width="2.4rem" height="2.4rem" />,
    iconClick: <IcPersonBlack width="2.4rem" height="2.4rem" />,
  },
];
