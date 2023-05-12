// const testimonials = [
//   [
//     [
//       {
//         body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
//         author: {
//           name: "Imie Nazwisko",
//           handle: "kontatk",
//
//         },
//       },
//       {
//         body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
//         author: {
//           name: "Imie Nazwisko",
//           handle: "kontatk",
//
//         },
//       },
//       {
//         body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
//         author: {
//           name: "Imie Nazwisko",
//           handle: "kontatk",
//
//         },
//       },
//       // More testimonials...
//     ],
//     [
//       {
//         body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
//         author: {
//           name: "Imie Nazwisko",
//           handle: "kontatk",
//
//         },
//       },
//       {
//         body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
//         author: {
//           name: "Imie Nazwisko",
//           handle: "kontatk",
//
//         },
//       },
//       {
//         body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
//         author: {
//           name: "Imie Nazwisko",
//           handle: "kontatk",
//
//         },
//       },
//       {
//         body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
//         author: {
//           name: "Imie Nazwisko",
//           handle: "kontatk",
//
//         },
//       },
//       // More testimonials...
//     ],
//   ],
//   [
//     [
//       {
//         body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
//         author: {
//           name: "Imie Nazwisko",
//           handle: "kontatk",
//
//         },
//       },
//       {
//         bio: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
//         author: {
//           name: "Imie Nazwisko",
//           handle: "kontatk",
//
//         },
//       },
//       // More testimonials...
//     ],
//     [
//       {
//         bio: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
//         author: {
//           name: "Imie Nazwisko",
//           handle: "kontatk",
//
//         },
//       },
//       // More testimonials...
//     ],
//   ],
// ];

const people = [
  {
    name: "Imie Nazwisko",
    role: 'Doctor',
 imageUrl: "https://tcm-kongres.pl/img/speakers/rani_43_640.png",
    bio: 'Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska',
  },
      {
    name: "Imie Nazwisko",
    role: 'Doctor',
 imageUrl: "https://tcm-kongres.pl/img/speakers/bartosz_43_640.png",
    bio: 'Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska',
  },
      {
    name: "Imie Nazwisko",
    role: 'Doctor',
 imageUrl: "https://tcm-kongres.pl/img/speakers/peter_43.jpg",
    bio: 'Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska',
  },
      {
    name: "Imie Nazwisko",
    role: 'Doctor',
 imageUrl: "https://tcm-kongres.pl/img/speakers/li_43_bw.png",
    bio: 'Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska',
  },
      {
    name: "Imie Nazwisko",
    role: 'Doctor',
 imageUrl: "https://tcm-kongres.pl/img/speakers/li_43_bw.png",
    bio: 'Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska',
  },
      {
    name: "Imie Nazwisko",
    role: 'Doctor',
 imageUrl: "https://tcm-kongres.pl/img/speakers/yair_43_640_480.jpg",
    bio: 'Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska',
  },
      {
    name: "Imie Nazwisko",
    role: 'Doctor',
 imageUrl: "https://tcm-kongres.pl/img/speakers/sun_43_bw.png",
    bio: 'Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska',
  },
      {
    name: "Imie Nazwisko",
    role: 'Doctor',
 imageUrl: "https://tcm-kongres.pl/img/speakers/grazyna_43.jpg",
    bio: 'Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska',
  },
      {
    name: "Imie Nazwisko",
    role: 'Doctor',
 imageUrl: "https://tcm-kongres.pl/img/speakers/shulan_43.png",
    bio: 'Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska',
  },
      {
    name: "Imie Nazwisko",
    role: 'Doctor',
 imageUrl: "https://tcm-kongres.pl/img/speakers/ling.jpg",
    bio: 'Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska',
  },

  // More people...
]

export default function Testimonials() {
  return (
          <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nasi wykładowcy</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Jakis tekst do do wpisania, kilka slow jakie chcemy wyswietlic.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
