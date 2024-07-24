import type { FC } from 'react';

import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';

interface HeaderMobileProps { }

const HeaderMobile: FC<HeaderMobileProps> = ({ }) => {
  return (
    <Popover placement='bottom'>
      <PopoverTrigger>
        <button>CLICK</button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Popover Content</div>
          <div className="text-tiny">This is the popover content</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default HeaderMobile;