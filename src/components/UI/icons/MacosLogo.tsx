import { IconProps } from '@chakra-ui/react';
import { createIcon } from '@chakra-ui/icons';

const [w, h] = [25, 30];

const Icon = createIcon({
  displayName: 'MacosLogo',
  viewBox: `0 0 ${w} ${h}`,
  path: (
    <svg width={w} height={h} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M25 22.01c-.982 2.85-3.924 7.896-6.954 7.951-2.01.039-2.656-1.191-4.954-1.191-2.296 0-3.015 1.154-4.915 1.229C4.962 30.122 0 22.715 0 16.254 0 10.32 4.135 7.38 7.747 7.325c1.938-.035 3.768 1.307 4.95 1.307 1.186 0 3.408-1.613 5.744-1.377.978.041 3.724.394 5.487 2.972C19.25 13.279 19.98 19.663 25 22.009zM18.473 0c-3.533.143-6.416 3.849-6.013 6.914 3.265.254 6.398-3.406 6.013-6.914z'
        fill='currentColor'
      />
    </svg>
  )
});

export const MacosLogo: React.FC<IconProps> = props => <Icon h={h} w={w} color='bg' {...props} />;
