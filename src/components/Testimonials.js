const testimonials = [
  [
    [
      {
        body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
        author: {
          name: "Imie Nazwisko",
          handle: "kontatk",
          imageUrl: "https://tcm-kongres.pl/img/speakers/rani_43_640.png",
        },
      },
      {
        body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
        author: {
          name: "Imie Nazwisko",
          handle: "kontatk",
          imageUrl: "https://tcm-kongres.pl/img/speakers/bartosz_43_640.png",
        },
      },
      {
        body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
        author: {
          name: "Imie Nazwisko",
          handle: "kontatk",
          imageUrl: "https://tcm-kongres.pl/img/speakers/peter_43.jpg",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
        author: {
          name: "Imie Nazwisko",
          handle: "kontatk",
          imageUrl: "https://tcm-kongres.pl/img/speakers/li_43_bw.png",
        },
      },
      {
        body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
        author: {
          name: "Imie Nazwisko",
          handle: "kontatk",
          imageUrl: "https://tcm-kongres.pl/img/speakers/li_43_bw.png",
        },
      },
      {
        body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
        author: {
          name: "Imie Nazwisko",
          handle: "kontatk",
          imageUrl: "https://tcm-kongres.pl/img/speakers/yair_43_640_480.jpg",
        },
      },
      {
        body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
        author: {
          name: "Imie Nazwisko",
          handle: "kontatk",
          imageUrl: "https://tcm-kongres.pl/img/speakers/sun_43_bw.png",
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
        author: {
          name: "Imie Nazwisko",
          handle: "kontatk",
          imageUrl: "https://tcm-kongres.pl/img/speakers/grazyna_43.jpg",
        },
      },
      {
        body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
        author: {
          name: "Imie Nazwisko",
          handle: "kontatk",
          imageUrl: "https://tcm-kongres.pl/img/speakers/shulan_43.png",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Tekst od Autora, prosba o opis od Autora. Cytat lub to czym chce sie podzielic na stornie.",
        author: {
          name: "Imie Nazwisko",
          handle: "kontatk",
          imageUrl: "https://tcm-kongres.pl/img/speakers/ling.jpg",
        },
      },
      // More testimonials...
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
  return (
    <div className="relative bg-white pb-32 pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nasi wykładowcy
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                          src={testimonial.author.imageUrl}
                          alt=""
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
