import { GlobeAltIcon } from '@heroicons/react/24/outline';
<<<<<<< HEAD
import { inter } from '@/app/ui/fonts';
=======
import { lusitana } from '@/app/ui/fonts';
>>>>>>> 0e06572e51167caf3662a61b2e874cf186dd3e50

export default function AcmeLogo() {
  return (
    <div
<<<<<<< HEAD
      className={`${inter.className} flex flex-row items-center leading-none text-white`}
=======
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
>>>>>>> 0e06572e51167caf3662a61b2e874cf186dd3e50
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
