import { IcStarFill, IcStarNone, IcStarHalf } from '@svg/index.ts'

interface SelectStarsProps {
    size: 'SMALL' | 'BIG' | 'DEFAULT';
}

export default function SelectStars({ size }: SelectStarsProps) {
  switch (size) {
  case 'SMALL':
    return {
      Fill: <IcStarFill width={16} height={16}/>,
      Half: <IcStarHalf width={16} height={16} />,
      None: <IcStarNone width={16} height={16}/>,
    };
  case 'BIG':
    return {
      Fill: <IcStarFill width={32} height={32} />,
      Half: <IcStarHalf width={32} height={32} />,
      None: <IcStarNone width={32} height={32} />,
    };
  default:
    return {
      Fill: <IcStarFill width={24} height={24} />,
      Half: <IcStarHalf width={24} height={24} />,
      None: <IcStarNone width={24} height={24} />,
    };
  }
}
