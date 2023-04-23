import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { DiamondIcon } from "@/components/DiamondIcon";

const navigation = [
  { name: "Start", href: "#" },
  { name: "O nas", href: "#" },
  { name: "Wykładowcy", href: "#" },
  { name: "Edycje", href: "#" },
  { name: "Vemue", href: "#" },
  { name: "Kup bilet", href: "#" },
  { name: "Organizatorzy", href: "#" },
  { name: "Pytania", href: "#" },
  { name: "Kontakt", href: "#" },
  { name: "EN", href: "#" },
];
export default function Headerq() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl">
          <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
            <nav
              className="flex items-center justify-between lg:justify-start"
              aria-label="Global"
            >
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">TCM Kongres</span>
                <img
                  alt="Your Company"
                  className="h-24 w-auto"
                  src={"https://tcm-kongres.pl/img/logo.png"}
                />
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  TCM KONGRES
                </h1>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  11-13 października 2019
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  To już czwarty Międzynarodowy Kongres Medycyny Chińskiej,
                  który odbywa się w Krakowie. Organizowany przez Polskie
                  Towarzystwo Tradycyjnej Medycyny Chińskiej (PTTMC). Celem
                  Kongresu jest promocja medycyny chińskiej oraz stworzenie
                  specjalnego miejsca spotkań polskich i międzynarodowych
                  praktyków medycyny chińskiej. Kongres koncentruje się na
                  promowaniu klinicznego zastosowania TCM oraz dzieleniu się
                  bogactwem wiedzy i doświadczenia w profilaktyce i leczeniu.
                  Jest to świetne miejsce spotkań w celu wymiany wiedzy na temat
                  tej wspaniałej starożytnej medycyny. Miejsce, w którym można
                  doładować się mądrością i zainspirować do dalszej pracy.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Kup swoj bilet <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={"https://tcm-kongres.pl/img/intro-bg2.jpg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
