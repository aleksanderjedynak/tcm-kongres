const features = [
  {
    name: "Polskie Towarzystwo Tradycyjnej Medycyny Chińskiej",
    description: "www.pttmc.org",
    link: "www.pttmc.org",
  },
  {
    name: "Instytut Medycyny Chińskiej i Profilaktyki Zdrowia",
    description: "www.medycyna-chinska.com",
  },
  {
    name: "Centrum Medycyny Chińskiej, Kraków",
    description: "www.medycynachinska.org",
  },
  {
    name: "TCM Academy of Chinese Medicine",
    description: "www.tcm.ac",
  },
];

//todo: poprawa gradientu

export default function Organizers() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Organizatorzy
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Organizatorami wydarzenia są eksperci z dziedziny medycyny chińskiej
            oraz lokalne instytucje naukowe z Krakowa. Ich misją jest
            propagowanie wiedzy o medycynie chińskiej oraz umożliwienie wymiany
            doświadczeń pomiędzy specjalistami z Polski i zagranicy. Dzięki ich
            zaangażowaniu, uczestnicy będą mieli okazję uczestniczyć w
            inspirujących wykładach, warsztatach oraz dyskusjach, które pozwolą
            na zdobycie praktycznej wiedzy oraz nawiązanie cennych kontaktów w
            branży.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16  text-center">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <a
                  href={feature.description}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  {feature.description}
                </a>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
