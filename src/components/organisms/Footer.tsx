import { FC } from 'react';
import LanguagesDropdown from '../molecules/LanguagesDropdown';

const Footer: FC = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="px-4 text-center">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="w-full text-center text-sm text-muted-foreground">
            JJ20 演唱会回忆录 · 用音乐记录每一次相遇
            <span className="mt-3 block">
              © 2025 songcarin.cn 版权所有 ICP许可: 蜀ICP备2025179062
            </span>
          </p>

          <LanguagesDropdown />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
