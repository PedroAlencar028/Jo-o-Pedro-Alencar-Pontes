import { useEffect, useRef, useState } from "react"

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`
const intro =
  "Conectividade inteligente, eficiência elétrica e uma experiência de direção que combina desempenho premium com conforto urbano."
const description =
  "A VINCI foi pensada para quem busca mobilidade elétrica com presença visual, tecnologia avançada e conforto em cada detalhe."
const questions = [
  "Qual é a autonomia real da bateria em diferentes condições de condução?",
  "Quanto tempo o carro leva para carregar em tomadas residenciais e em carregadores rápidos?",
  "Como funciona a infraestrutura de recarga para viagens de longa distância?",
  "Qual é o tempo de garantia da bateria e qual a sua vida útil estimada?",
  "Quais são as principais economias em manutenção e impostos comparado a um carro a combustão?",
]
const answers = [
  "A referência apresentada indica até 520 km com uma carga. A autonomia varia conforme velocidade, temperatura, relevo e uso do ar-condicionado.",
  "O tempo depende da potência da tomada ou do carregador e do nível inicial da bateria. Consulte a ficha técnica e a concessionária para conhecer os tempos de recarga.",
  "Planeje as paradas em estações compatíveis com o veículo, verificando a disponibilidade e a potência dos pontos de recarga antes da viagem.",
  "A referência do modelo indica 10 anos de garantia. Consulte os termos de cobertura e as condições de uso com a concessionária.",
  "Veículos elétricos dispensam trocas de óleo do motor e têm menos componentes mecânicos. Benefícios tributários dependem da legislação da sua região.",
]
const features = [
  "Retrovisores inteligentes",
  "Freios de alta performance",
  "Carregador elétrico lateral",
  "Rodas de alto desempenho",
  "Antena 5G",
  "Design sofisticado",
  "Abertura automática",
  "Câmera de estacionamento",
]
const positions = [
  "left-[24%] top-[32%]",
  "left-[19%] top-[72%]",
  "left-[38%] top-[42%]",
  "left-[59%] top-[38%]",
  "left-[69%] top-[9%]",
  "left-[68%] top-[62%]",
  "left-[79%] top-[36%]",
  "left-[91%] top-[75%]",
]

function Logo({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="VINCI — página inicial"
      className="flex items-center gap-3 transition-opacity hover:opacity-80"
    >
      <img src={asset("cfe2f.svg")} alt="" className="h-10 w-10 md:h-12 md:w-12" />
      <span className="text-[1.9rem] font-light leading-none tracking-[0.38em] md:text-[2.6rem] md:tracking-[0.45em]">
        VINCI
      </span>
    </button>
  )
}

export default function App() {
  const [page, setPage] = useState("home")
  const [menu, setMenu] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [modal, setModal] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [hotspot, setHotspot] = useState<number | null>(null)
  const [splashVisible, setSplashVisible] = useState(true)
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if (modal) dialog.current?.showModal()
    else dialog.current?.close()
  }, [modal])
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(false)
        setMobileMenu(false)
      }
    }
    window.addEventListener("keydown", close)
    return () => window.removeEventListener("keydown", close)
  }, [])
  useEffect(() => {
    const timer = window.setTimeout(() => setSplashVisible(false), 1600)
    return () => window.clearTimeout(timer)
  }, [])
  const navigate = (next: string) => {
    setPage(next)
    setMenu(false)
    setMobileMenu(false)
    window.scrollTo({ top: 0, behavior: "instant" })
  }
  const open = (title: string) => {
    setSubmitted(false)
    setModal(title)
    setMenu(false)
  }
  const openLogin = () => {
    setSubmitted(false)
    setModal("Login")
    setMenu(false)
    setMobileMenu(false)
  }
  const buttons = (light = false) => (
    <div className="mt-7 flex flex-wrap gap-5">
      <button
        onClick={() => setMenu(!menu)}
        className="action bg-[#e51837] text-white shadow-[0_18px_38px_rgba(229,24,55,0.22)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#c8102c]"
      >
        MODELOS
      </button>
      <button
        onClick={() => open("Agende um test drive")}
        className={`action border transition-transform duration-200 hover:-translate-y-0.5 ${
          light
            ? "border-white/70 bg-white/5 text-white hover:bg-white/10"
            : "border-black/20 bg-transparent hover:bg-black/5"
        }`}
      >
        TEST DRIVE
      </button>
    </div>
  )

  return (
    <div className="min-h-dvh bg-white text-[#1a1a1a]">
      {splashVisible && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-[#f4f2f1] transition-opacity duration-700 ease-out">
          <div className="flex -translate-y-4 flex-col items-center justify-center transition-all duration-700">
            <img
              src={asset("cfe2f.svg")}
              alt="VINCI logo"
              className="h-40 w-40 animate-pulse md:h-52 md:w-52"
            />
            <div className="mt-8 text-[2.4rem] font-light tracking-[0.45em] text-[#131313] md:text-[3.4rem]">
              VINCI
            </div>
            <div className="mt-5 text-center text-[0.8rem] font-light tracking-[0.7em] text-[#4a4a4a] md:text-[1rem]">
              ELECTRIC VEHICLES
            </div>
          </div>
        </div>
      )}

      <header className="relative z-30 border-b border-black/5 bg-white/90 px-5 backdrop-blur-sm md:px-10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
          <Logo onClick={() => navigate("home")} />
          <nav
            aria-label="Navegação principal"
            className="hidden w-[58%] items-center justify-between text-[0.72rem] uppercase tracking-[0.28em] text-[#212121] md:flex"
          >
            <button className="transition-colors hover:text-[#e51837]" onClick={() => navigate("home")}>Home</button>
            <button
              className="transition-colors hover:text-[#e51837]"
              onClick={() =>
                document
                  .getElementById("footer")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Sobre
            </button>
            <button
              aria-expanded={menu}
              aria-controls="vehicles-menu"
              onClick={() => setMenu(!menu)}
              className={`h-20 border-b border-transparent transition-colors hover:text-[#e51837] ${
                menu ? "border-black text-[#111111]" : ""
              }`}
            >
              Veículos
            </button>
            <button className="transition-colors hover:text-[#e51837]" onClick={() => open("Serviços")}>Serviços</button>
            <button className="transition-colors hover:text-[#e51837]" onClick={() => open("Agende um test drive")}>
              Test Drive
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={openLogin}
              className="hidden rounded-sm border border-black/10 px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.25em] text-[#1a1a1a] transition-colors hover:border-[#e51837] hover:text-[#e51837] md:block"
            >
              Login
            </button>
            <button
              aria-label="Abrir navegação"
              aria-expanded={mobileMenu}
              className="text-3xl md:hidden"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? "×" : "☰"}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <nav className="absolute inset-x-0 top-20 flex flex-col gap-5 border-t border-gray-100 bg-white p-6 shadow-lg md:hidden">
            <button className="text-left uppercase tracking-[0.2em] hover:text-[#e51837]" onClick={() => navigate("home")}>HOME</button>
            <button
              className="text-left uppercase tracking-[0.2em] hover:text-[#e51837]"
              onClick={() => {
                setMenu(!menu)
                setMobileMenu(false)
              }}
            >
              VEÍCULOS
            </button>
            <button className="text-left uppercase tracking-[0.2em] hover:text-[#e51837]" onClick={() => open("Serviços")}>SERVIÇOS</button>
            <button className="text-left uppercase tracking-[0.2em] hover:text-[#e51837]" onClick={() => open("Agende um test drive")}>
              TEST DRIVE
            </button>
            <button className="mt-2 border border-black/10 px-4 py-3 text-left uppercase tracking-[0.2em] hover:border-[#e51837] hover:text-[#e51837]" onClick={openLogin}>
              LOGIN
            </button>
          </nav>
        )}
        {menu && (
          <section
            id="vehicles-menu"
            aria-label="Modelos de veículos"
            className="absolute inset-x-0 top-20 max-h-[80dvh] overflow-y-auto border-t border-gray-100 bg-white px-5 py-6 shadow-lg md:flex md:px-10"
          >
            <div className="grid flex-1 grid-cols-2 gap-5 md:grid-cols-3">
              {[
                "9cef1.png",
                "91b4d.png",
                "04d5a.png",
                "f9b7d.png",
                "9cef1.png",
                "9cef1.png",
              ].map((image, index) => (
                <div key={index} className="text-center">
                  <button onClick={() => navigate("model")} className="w-full">
                    <img
                      src={asset(image)}
                      alt={`VINCI modelo V${
                        index === 1 ? 3 : index === 2 ? 2 : 1
                      }`}
                      className={`mx-auto h-36 w-full object-contain ${
                        index === 3 ? "-scale-x-100" : ""
                      }`}
                    />
                  </button>
                  <p className="mt-2 font-medium tracking-[1.8px]">
                    MODELO V{index === 1 ? 3 : index === 2 ? 2 : 1}
                  </p>
                  <div className="flex justify-center gap-8 text-base">
                    <button
                      onClick={() => navigate("model")}
                      className="hover:underline"
                    >
                      Ver mais
                    </button>
                    <button
                      onClick={() => open("Comprar um VINCI")}
                      className="hover:underline"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-5 border-l border-gray-100 px-8 text-base tracking-[3px] md:mt-0 md:w-[30%]">
              <span className="border-b border-gray-100 pb-4 text-gray-400">
                NAVEGUE
              </span>
              {[
                "OFERTAS",
                "TEST DRIVE",
                "LOJAS",
                "SERVIÇOS",
                "SAC",
                "FINANCIAMENTO",
              ].map((label) => (
                <button
                  key={label}
                  className={`text-left ${
                    label === "TEST DRIVE" ? "text-[#e51837]" : ""
                  }`}
                  onClick={() => open(label)}
                >
                  {label}
                </button>
              ))}
            </div>
          </section>
        )}
      </header>

      <main>
        {page === "home" ? (
          <>
            <section className="relative h-152 overflow-hidden bg-[#0d0d0d] max-md:h-128">
              <img
                src={asset("c5a2e.png")}
                alt="VINCI Model V3 conectado a uma estação de recarga"
                className="absolute top-[-41.98%] h-[143.88%] w-full max-w-none object-cover saturate-100 max-md:object-[60%_center]"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/30 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#0a0a0a] to-transparent" />
              <div className="absolute bottom-18.5 left-5 right-5 text-white md:left-10">
                <h1 className="text-[clamp(2.8rem,5vw,5.2rem)] font-medium leading-[0.88] tracking-[-0.06em] uppercase">
                  VINCI MODEL V3
                </h1>
                <p className="body-font mt-5 max-w-176.5 text-base leading-8 text-white/80 md:text-xl">
                  {intro}
                </p>
                {buttons(true)}
              </div>
            </section>
            <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-18.5 md:grid-cols-2 md:px-10">
              {["c1b12.png", "078e8.png"].map((image, index) => (
                <article key={image} className="flex flex-col">
                  <div className="flex justify-between gap-4">
                    <h2 className="text-2xl leading-7 tracking-[9.6px]">
                      VINCI
                      <br />
                      MODEL V{index === 0 ? 2 : 1}
                    </h2>
                    <dl className="grid grid-cols-[auto_auto] gap-x-5 text-[18px] leading-6 tracking-[1.8px]">
                      {[
                        ["Potência;", "300 cavalos"],
                        ["Autonomia:", "500km por carga"],
                        ["Peso:", "1.500 kg"],
                        ["Tecnologia:", "GPS e Smartink"],
                      ].map(([label, value]) => (
                        <div key={label} className="contents">
                          <dt>{label}</dt>
                          <dd className="text-[#979797]">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <button
                    onClick={() => navigate("model")}
                    aria-label={`Conheça o Model V${index === 0 ? 2 : 1}`}
                  >
                    <img
                      src={asset(image)}
                      alt={
                        index === 0
                          ? "SUV VINCI Model V2 branco"
                          : "VINCI Model V1 vermelho"
                      }
                      className="mx-auto h-91.25 w-full object-contain md:h-100"
                    />
                  </button>
                  <div className="flex items-center justify-between gap-4 text-xl tracking-[2px]">
                    <p className="text-[#685757]">
                      A SUV mais robusta da categoria
                    </p>
                    <button
                      onClick={() => navigate("model")}
                      className="font-medium text-[#1a1a1a] underline decoration-[#e51837] decoration-2 underline-offset-4 transition-colors hover:text-[#e51837]"
                    >
                      CONHEÇA
                    </button>
                  </div>
                </article>
              ))}
            </section>
            <img
              src={asset("470e8.png")}
              alt="Veículo VINCI em uma estrada cercada por árvores"
              className="aspect-1440/593 w-full object-cover max-md:min-h-72"
            />
            <section className="mx-auto max-w-7xl px-5 py-16.25 md:px-10">
              {[
                "Agende um test drive",
                "veja ofertas",
                "encontre uma loja",
              ].map((label) => (
                <button
                  key={label}
                  onClick={() => open(label)}
                  className="group flex w-full items-center justify-between gap-5 border-b border-black/10 py-5 text-left text-[2rem] leading-[1.08] uppercase transition-all duration-200 hover:text-[#e51837] md:text-[4.3rem]"
                >
                  <span>{label}</span>
                  <img src={asset("4848a.svg")} alt="" className="rotate-90 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              ))}
            </section>
            <div className="relative aspect-1440/593 overflow-hidden max-md:min-h-72">
              <img
                src={asset("5b33a.png")}
                alt="Sedã elétrico VINCI na estrada"
                className="absolute top-[-46.56%] h-[162.11%] w-full object-cover"
              />
            </div>
          </>
        ) : (
          <>
            <section className="px-5 pb-12 text-center">
              <img
                src={asset("9cef1.png")}
                alt="VINCI Model V2 — vista lateral"
                className="mx-auto -mt-6 aspect-947/533 w-full max-w-236.75 object-contain"
              />
              <h1 className="text-5xl leading-none md:text-[72px]">
                VINCI MODEL V2
              </h1>
              <p className="body-font mx-auto mt-6 max-w-227.75 text-xl leading-9 text-[#666]">
                {intro}
              </p>
              <div className="flex justify-center">{buttons()}</div>
            </section>
            <section className="mx-auto max-w-250 px-5 pb-20 pt-8">
              <p className="light-font mb-10 text-center text-2xl uppercase text-[#666]">
                Tecnologia aliada ao futuro
              </p>
              <div className="grid grid-cols-3 divide-x divide-gray-200">
                {[
                  ["520 KM", "COM 1 CARGA"],
                  ["2.800 RPM", "DE TORQUE"],
                  ["10 ANOS", "GARANTIA"],
                ].map(([value, label]) => (
                  <div key={value} className="light-font px-3 md:px-10">
                    <p className="whitespace-nowrap text-[28px] leading-none md:text-[72px]">
                      {value}
                    </p>
                    <p className="mt-5 text-base md:text-2xl">{label}</p>
                  </div>
                ))}
              </div>
            </section>
            <div className="px-5 md:px-10">
              <img
                src={asset("567ae.png")}
                alt="VINCI na estrada à beira-mar"
                className="aspect-1360/520 w-full rounded-xl object-cover"
              />
            </div>
            <section className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              {[
                "RECARGA RÁPIDA",
                "PAINEL DE INSTRUMENTOS",
                "PONTOS DE RECARGA",
                "DESIGN PREMIADO",
              ].map((title, index) => (
                <article key={title}>
                  <div className="min-h-43.75 border-r border-gray-100 px-6.5 pb-8">
                    <h2 className="text-[26px]">{title}</h2>
                    <p className="body-font mt-4 text-base leading-7 text-[#979797]">
                      {description}
                    </p>
                  </div>
                  <img
                    src={asset(
                      ["92625.png", "4e718.png", "d1bd5.png", "e6985.png"][
                        index
                      ],
                    )}
                    alt={title}
                    className="aspect-360/272 w-full object-cover"
                  />
                </article>
              ))}
            </section>
            <section className="px-5 pt-16 md:px-10">
              <div className="flex flex-col justify-between gap-8 md:flex-row">
                <div className="max-w-97.5">
                  <h2 className="text-[36px]">VINCI MODEL V2</h2>
                  <p className="body-font mt-4 text-base leading-7 text-[#979797]">
                    {description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                  {features.map((feature, index) => (
                    <button
                      key={feature}
                      onClick={() => setHotspot(index)}
                      className="flex items-center gap-2 text-left text-base uppercase text-[#666]"
                    >
                      <span className="relative flex h-4.5 w-4.5 shrink-0 items-center justify-center">
                        <img
                          src={asset("108d8.svg")}
                          alt=""
                          className="absolute"
                        />
                        <span className="body-font relative text-xs text-white">
                          {String.fromCharCode(65 + index)}
                        </span>
                      </span>
                      {feature}
                    </button>
                  ))}
                </div>
              </div>
              <div className="relative mx-auto mt-7 aspect-1080/620 max-w-270">
                <img
                  src={asset("c1b12.png")}
                  alt="VINCI Model V2 — detalhes do exterior"
                  className="h-full w-full object-contain"
                />
                {features.map((feature, index) => (
                  <button
                    key={feature}
                    aria-label={feature}
                    onClick={() => setHotspot(hotspot === index ? null : index)}
                    className={`absolute ${positions[index]} flex h-4.5 w-4.5 items-center justify-center rounded-full ring-offset-4 hover:ring-2 hover:ring-red-300`}
                  >
                    <img src={asset("69a3a.svg")} alt="" className="absolute" />
                    <span className="body-font relative text-[12px] text-white">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </button>
                ))}
                {hotspot !== null && (
                  <div
                    role="status"
                    className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-5 border border-gray-200 bg-white px-6 py-3 shadow-sm"
                  >
                    <span>{features[hotspot]}</span>
                    <button
                      onClick={() => setHotspot(null)}
                      aria-label="Fechar detalhe"
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            </section>
            <section className="mx-auto max-w-270 px-5 pb-20 pt-12">
              <h2 className="text-center text-[36px]">FAQ</h2>
              <p className="light-font mb-8 mt-3 text-center text-2xl tracking-[2.4px] text-[#979797]">
                PERGUNTAS FREQUENTES
              </p>
              {questions.map((question, index) => (
                <details key={question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[26px] leading-8 uppercase">
                    {question}
                    <img
                      src={asset("99d5b.svg")}
                      alt=""
                      className="rotate-180 transition-transform group-open:rotate-0"
                    />
                  </summary>
                  <p className="body-font mt-5 max-w-225 text-base leading-7 text-[#666]">
                    {answers[index]}
                  </p>
                </details>
              ))}
            </section>
          </>
        )}
      </main>

      <footer
        id="footer"
        className={`bg-[#f3f1ef] px-5 pb-12 pt-18.5 md:px-10 ${
          page === "model" ? "border-t border-gray-200" : ""
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-[2.8fr_1fr_1fr_1fr]">
          <div>
            <Logo onClick={() => navigate("home")} />
          </div>
          {[
            [
              "SOBRE",
              "A Marca",
              "História",
              "Qualidade",
              "Onde estamos",
              "Investidores",
            ],
            ["CONTATO", "Fale Conosco", "Atendimento", "SAC"],
            ["SAC", "Canais Oficiais", "Redes Sociais", "Suporte"],
          ].map(([title, ...links]) => (
            <div key={title}>
              <h2 className="mb-9 text-2xl tracking-[4.8px]">{title}</h2>
              <div className="flex flex-col items-start">
                {links.map((label) => (
                  <button
                    key={label}
                    onClick={() => open(label)}
                    className="text-left text-xl leading-10.5 tracking-[4px] text-[#666] hover:text-[#e51837]"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-base leading-6 tracking-[5px] text-[#666]">
          ©COPYRIGHT 2026.
          <br />
          TODOS OS DIREITOS RESERVADOS.
        </p>
      </footer>

      <dialog
        ref={dialog}
        onCancel={() => setModal("")}
        onClose={() => setModal("")}
        className="fixed inset-0 m-auto w-[calc(100%-40px)] max-w-xl border border-gray-200 bg-white p-8 text-[#1a1a1a] shadow-xl backdrop:bg-black/50"
      >
        <div className="mb-6 flex items-start justify-between gap-5">
          <h2 className="text-4xl uppercase">{modal}</h2>
          <button
            onClick={() => setModal("")}
            aria-label="Fechar"
            className="text-3xl"
          >
            ×
          </button>
        </div>
        {submitted ? (
          <div role="status">
            <p className="body-font leading-7">
              {modal.toLowerCase().includes("login")
                ? "Login simulado com sucesso. Esta é apenas uma demonstração do fluxo de autenticação."
                : "Seus dados foram preenchidos. Esta é uma demonstração: nenhuma solicitação foi enviada."}
            </p>
            <button
              onClick={() => setModal("")}
              className="action mt-8 bg-[#e51837] text-white"
            >
              FECHAR
            </button>
          </div>
        ) : modal.toLowerCase().includes("login") ? (
          <form
            onSubmit={(event) => {
              event.preventDefault()
              setSubmitted(true)
            }}
            className="flex flex-col gap-5"
          >
            <p className="body-font text-sm leading-6 text-gray-500">
              Acesse sua conta VINCI para acompanhar pedidos, ofertas e agendamentos.
            </p>
            <label className="text-xl">
              E-mail
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                className="body-font mt-1 block w-full border border-gray-300 p-3 text-base"
              />
            </label>
            <label className="text-xl">
              Senha
              <input
                required
                name="password"
                type="password"
                autoComplete="current-password"
                className="body-font mt-1 block w-full border border-gray-300 p-3 text-base"
              />
            </label>
            <div className="flex items-center justify-between gap-3 text-sm text-gray-500">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                Lembrar-me
              </label>
              <button type="button" className="text-[#e51837] hover:underline">
                Esqueci minha senha
              </button>
            </div>
            <button
              type="submit"
              className="action mt-3 bg-[#e51837] text-white"
            >
              ENTRAR
            </button>
          </form>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault()
              setSubmitted(true)
            }}
            className="flex flex-col gap-5"
          >
            <p className="body-font text-sm leading-6 text-gray-500">
              Preencha seus dados para simular uma solicitação de atendimento.
            </p>
            <label className="text-xl">
              Nome
              <input
                required
                name="name"
                autoComplete="name"
                className="body-font mt-1 block w-full border border-gray-300 p-3 text-base"
              />
            </label>
            <label className="text-xl">
              E-mail
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                className="body-font mt-1 block w-full border border-gray-300 p-3 text-base"
              />
            </label>
            <label className="text-xl">
              Modelo
              <select
                name="model"
                className="mt-1 block w-full border border-gray-300 p-3 text-xl"
              >
                <option>VINCI MODEL V2</option>
                <option>VINCI MODEL V1</option>
                <option>VINCI MODEL V3</option>
              </select>
            </label>
            {modal.toLowerCase().includes("test drive") && (
              <label className="text-xl">
                Data desejada
                <input
                  required
                  name="date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className="mt-1 block w-full border border-gray-300 p-3"
                />
              </label>
            )}
            <button
              type="submit"
              className="action mt-3 bg-[#e51837] text-white"
            >
              SIMULAR SOLICITAÇÃO
            </button>
          </form>
        )}
      </dialog>
    </div>
  )
}
