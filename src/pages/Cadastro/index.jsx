import Logo from "../../assets/images/logo.svg";
import Inputs from "../../components/Inputs";

export default function CadastroPsicologo() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <div className="absolute inset-0 h-full w-full bg-[#2d3e3f] rounded-l-3xl shadow-2xl" />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <header className="w-full flex justify-between items-center">
              <img src={Logo} className="w-12" />
            </header>

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Cadastro
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-5">
              <div className="col-span-6 relative z-0">
              <Inputs type={"text"} label={"Nome Completo:"} />
              </div>

              <div className="col-span-6 relative z-0">
                <Inputs type={"email"} label={"Email:"} />
              </div>

              <div className="col-span-6 sm:col-span-3 relative z-0">
              <Inputs isSenha label={"Senha:"} />
              </div>

              <div className="col-span-6 sm:col-span-3 relative z-0">
              <Inputs isSenha label={"Confirmação de Senha:"} />
              </div>

              <div className="col-span-6 relative z-0">
                <Inputs type={"text"} label={"CPF:"} />
              </div>

              <div className="col-span-6 relative z-0">
                <Inputs type={"text"} label={"CRP:"} />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Cadastrar
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <a href="#" className="text-gray-700 underline">
                    Log in
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
