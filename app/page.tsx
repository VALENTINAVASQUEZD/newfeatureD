import ThemeSwitch from './components/ThemeSwitch';

export default function Home() {
  const name = "Rodrigo Delgado Canaria";
  const course = "Nutricion y Dietetica";
  const date = "6 de Noviembre, 2024";

  return (
    <main className="flex items-center justify-center min-h-screen bg-primary-300 p-8 dark:bg-primary-900 font-[family-name:var(--font-tiny-regular-mono)]">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg p-10 border-4 border-primary dark:bg-gray-800">
        <ThemeSwitch />
        <div className="border-2 border-dashed border-primary p-8 rounded-lg">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-4 uppercase tracking-wide">
            Certificado de Logro
          </h1>

          <p className="text-lg text-center text-gray-700 dark:text-gray-300 italic mb-8">
            Se otorga el presente diploma a
          </p>

          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-4">
            {name}
          </h2>

          <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
            en reconocimiento por completar satisfactoriamente el curso de
          </p>

          <h3 className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100 mb-6">
            {course}
          </h3>

          <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
            Otorgado el <span className="font-semibold">{date}</span>
          </p>

          <div className="flex justify-between mt-12">
            <div className="text-center">
              <p className="text-gray-700 dark:text-gray-300 mb-1">____________________________</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Firma del Instructor</p>
            </div>

            <div className="text-center">
              <p className="text-gray-700 dark:text-gray-300 mb-1">____________________________</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Firma del Director</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
