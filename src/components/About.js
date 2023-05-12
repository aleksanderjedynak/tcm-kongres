// const stats = [
//   {
//     id: 1,
//     name: "Pobierz Biuletyn PDF",
//     value: "BIULETYN",
//   },
//   { id: 2, name: "Zobacz regulamin", value: "REGILAMIN" },
// ];

export default function About() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Polska i TCM
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Praktyka i edukacja TCM w Polsce w ostatniej dekadzie szybko się
              rozwija. W wielu głównych miastach istnieją szkoły TCM, które
              wykładają podstawową i zaawansowaną akupunkturą i ziołami: Kraków,
              Katowice, Wrocław, Poznań, Gdańsk, Bydgoszcz, Warszawa. Kliniki i
              ośrodki medycyny chińskiej są dostępne w większości regionów
              Polski i cieszą się coraz większym zainteresowaniem tą formą
              medycyny.
            </p>

            <p className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-xl">
              Wycieczki
            </p>
            <p className="mt-6 text-base leading-8 text-gray-600">
              Dla osób zainteresowanych zwiedzaniem średniowiecznego Krakowa lub
              jego okolic pomożemy w organizacji wycieczek po Krakowie i
              Małopolsce wpisanych na listę Światowego Dziedzictwa UNESCO -
              takich jak Kopalnia Soli w Wieliczce, Ojcowski Park Narodowy,
              Pieniny lub Zakopane i Tatry.
            </p>
            <p className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-xl">
              Główne tematy
            </p>
            <p className="mt-6 text-base leading-8 text-gray-600">
              YangSheng Techniki akupunktury i moksybucji. Leczenie chorób
              przewlekłych i ostrych ziołami chińskimi.
            </p>
            {/*<dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">*/}
            {/*  {stats.map((stat) => (*/}
            {/*    <div*/}
            {/*      key={stat.id}*/}
            {/*      className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6"*/}
            {/*    >*/}
            {/*      <dt className="text-sm leading-6 text-gray-600">*/}
            {/*        {stat.name}*/}
            {/*      </dt>*/}
            {/*      <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">*/}
            {/*        {stat.value}*/}
            {/*      </dd>*/}
            {/*    </div>*/}
            {/*  ))}*/}
            {/*</dl>*/}
          </div>
        </div>
      </div>
      <img
        className="h-full w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
        src="https://tcm-kongres.pl/img/gallery/1.jpg"
        alt=""
      />
    </div>
  );
}
