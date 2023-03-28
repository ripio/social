import useStaffMode from '@components/utils/hooks/useStaffMode';
import { Trans } from '@lingui/macro';
import { APP_NAME } from 'data/constants';
import type { FC } from 'react';

import Locale from './Locale';

const Footer: FC = () => {
  const { allowed: staffMode } = useStaffMode();

  return (
    <footer className={`sticky text-sm leading-7 ${staffMode ? 'top-28' : 'top-20'}`} data-testid="footer">
      <div className={'mt-4 flex flex-wrap gap-x-[12px] px-3 lg:px-0'}>
        <span className="lt-text-gray-500 font-bold">
          &copy; {new Date().getFullYear()} {APP_NAME}
        </span>
        <a href="https://github.com/ripio/social" target="_blank" rel="noreferrer noopener">
          <Trans>GitHub</Trans>
        </a>
      </div>
      <div className="mt-2 flex space-x-4 px-3 lg:px-0">
        <Locale />
        <a
          className="hover:font-bold"
          href={`https://vercel.com/?utm_source=${APP_NAME}&utm_campaign=oss`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Trans>▲ Powered by Vercel</Trans>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
