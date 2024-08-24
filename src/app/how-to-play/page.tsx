import HowToPlayComponent from '@/components/how-to-play/Component';
import DesktopNav from '@/components/navbars/desktop/Component';
import MobileNav from '@/components/navbars/mobile/Component';

export default function Component() {
  return (
    <div className="min-h-screen bg-sky-500 p-6 md:p-12">
      <MobileNav />
      <DesktopNav />
      <HowToPlayComponent />
    </div>
  );
}
