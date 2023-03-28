import MenuTransition from '@components/Shared/MenuTransition';
import { Menu } from '@headlessui/react';
import { DotsVerticalIcon } from '@heroicons/react/outline';
import { stopEventPropagation } from '@lib/stopEventPropagation';
import clsx from 'clsx';
import type { Publication } from 'lens';
import type { FC } from 'react';
import { Fragment } from 'react';

import Embed from './Embed';
import Permalink from './Permalink';

interface PublicationMenuProps {
  publication: Publication;
}

const PublicationMenu: FC<PublicationMenuProps> = ({ publication }) => {
  const iconClassName = 'w-[15px] sm:w-[18px]';

  return (
    <Menu as="div" className="relative">
      <Menu.Button as={Fragment}>
        <button
          className="rounded-full p-1.5 hover:bg-gray-300 hover:bg-opacity-20"
          onClick={stopEventPropagation}
          aria-label="More"
          data-testid={`publication-${publication.id}-menu`}
        >
          <DotsVerticalIcon className={clsx('lt-text-gray-500', iconClassName)} />
        </button>
      </Menu.Button>
      <MenuTransition>
        <Menu.Items
          static
          className="absolute right-0 z-[5] mt-1 w-max rounded-xl border bg-white shadow-sm focus:outline-none dark:border-gray-700 dark:bg-gray-900"
          data-testid={`publication-${publication.id}-menu-items`}
        >
          <Embed publication={publication} />
          <Permalink publication={publication} />
        </Menu.Items>
      </MenuTransition>
    </Menu>
  );
};

export default PublicationMenu;
