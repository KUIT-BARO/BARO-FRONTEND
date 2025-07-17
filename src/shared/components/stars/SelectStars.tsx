import { IcStarFill, IcStarNone,IcStarBigFill,IcStarBigNone,IcStarSmallFill,IcStarSmallNone } from '@svg/index.ts'

interface SelectStarsProps {
    size: 'small' | 'big' | 'default';
}

export function SelectStars({ size }: SelectStarsProps) {
  switch (size) {
  case 'small':
    return {
      Fill: <IcStarSmallFill />,
      None: <IcStarSmallNone />,
    };
  case 'big':
    return {
      Fill: <IcStarBigFill />,
      None: <IcStarBigNone />,
    };
  default:
    return {
      Fill: <IcStarFill />,
      None: <IcStarNone />,
    };
  }
}
