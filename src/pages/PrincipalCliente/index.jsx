import {
  ArrowLeft,
  ArrowUpRight,
  BookBookmark,
  Database,
  NotePencil,
  Trash,
  User,
  Wind,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";

export default function PrincipalCliente() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [modalEdt, setModalEdt] = useState(false);
  const [modalDel, setModalDel] = useState(false);
  const [eye, setEye] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [token, setToken] = useState("");
  const [id, setId] = useState("");
  const [currentPaciente, setCurrentPaciente] = useState({
    name: "",
    email: "",
  });

  // useEffect(() => {
  //   if (!state?.token || !state?.id) {
  //     navigate("/login");
  //   } else {
  //     setToken(state.token);
  //     setId(state.id);
  //   }
  // }, [navigate, state]);

  const edtDadosSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://api-mypeace.vercel.app/update/pacients/${id}`,
        {
          name: nome,
          email: email,
          password: senha,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMensagem(response.data.msg || "Dados editados com sucesso!");
      alert(mensagem)
      setModalEdt(false);
    } catch (error) {
      handleErrorResponse(error);
    }
  };

  async function deletar() {
    try {
      const response = await axios.post(
        `https://api-mypeace.vercel.app/delete/pacients/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMensagem(response.data.msg || "Paciente deletado com sucesso!");
      alert(mensagem)
      setModalDel(false);
    } catch (error) {
      handleErrorResponse(error);
    }
  }

  function handleErrorResponse(error) {
    if (error.response) {
      console.error("Detalhes do erro:", error.response.data);
      if (error.response.status === 401) {
        alert("Sessão expirada");
        navigate("/login");
      } else {
        setMensagem(
          error.response.data.msg ||
            "Erro ao processar a solicitação. Por favor, tente novamente mais tarde."
        );
        alert(mensagem)
      }
    } else {
      setMensagem(
        "Erro ao processar a solicitação. Por favor, tente novamente mais tarde."
      );
      alert(mensagem)
    }
  }

  function openEditModal(paciente) {
    if (paciente) {
      setCurrentPaciente(paciente);
      setNome(paciente.name);
      setEmail(paciente.email);
      setModalEdt(true);
    }
  }

  function openDeleteModal(paciente) {
    if (paciente) {
      setCurrentPaciente(paciente);
      setModalDel(true);
    }
  }
  return (
    <>
    {modalEdt && (
      <Modal isOpen={modalEdt} setIsOpen={setModalEdt} titulo={`Editar Dados`} form />
    )}
    {modalDel && (
      <Modal isOpen={modalDel} setIsOpen={setModalDel} titulo={`Excluir Conta`} del />
    )}
      <header className="p-3 z-50 w-full text-white">
        <div className=" bg-green-900 rounded-2xl px-6 py-4 shadow-xl flex items-center justify-between border-b-4 border-green-400">
          <div className="flex items-center gap-4">
            <div className="rounded-full border-2 border-green-500 w-16 h-16 flex items-center justify-center">
              <User fill="white" size={24} />
            </div>
            <div>
              <h1 className="font-bold">Olá, </h1>
              <h2 className="italic">Nome do Cliente</h2>
            </div>
          </div>
          <Link to="/" className="m-6 group relative w-max">
            <div className="flex items-center transition-all gap-1 hover:gap-2">
              <ArrowLeft size={20} />
              <h1 className="font-medium">Início</h1>
            </div>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </Link>
        </div>
      </header>
      <main className="max-w-[1440px] mx-auto 2xl:p-0 p-3">
        <h1 className="py-7 text-2xl font-bold">Acesso Rápido</h1>
        <section className="flex items-center justify-center md:gap-0 gap-5 md:justify-between flex-wrap">
          <div className="cursor-pointer w-36 h-44 bg-gray-200 rounded-md p-5 shadow-3D hover:border-b-4 hover:border-gray-500 transition-all flex flex-col justify-around">
            <BookBookmark size={40} />
            <h2 className="font-semibold text-lg">Diário</h2>
          </div>

          <div className="cursor-pointer w-36 h-44 bg-gray-200 rounded-md p-5 shadow-3D hover:border-b-4 hover:border-gray-500 transition-all flex flex-col justify-around">
            <Wind size={40} />
            <h2 className="font-semibold text-lg">Respiração Guiada</h2>
          </div>

          <div className="cursor-pointer w-36 h-44 bg-gray-200 rounded-md p-5 shadow-3D hover:border-b-4 hover:border-gray-500 transition-all flex flex-col justify-around">
            <Database size={40} />
            <h2 className="font-semibold text-lg">Registro Emoções</h2>
          </div>

          <div onClick={() => setModalEdt(true)} className="cursor-pointer w-36 h-44 bg-gray-200 rounded-md p-5 shadow-3D hover:border-b-4 hover:border-gray-500 transition-all flex flex-col justify-around">
            <NotePencil size={40} />
            <h2 className="font-semibold text-lg">Editar Dados</h2>
          </div>

          <div onClick={() => setModalDel(true)} className="cursor-pointer w-36 h-44 bg-gray-200 rounded-md p-5 shadow-3D hover:border-b-4 hover:border-gray-500 transition-all flex flex-col justify-around">
            <Trash size={40} />
            <h2 className="font-semibold text-lg">Deletar Conta</h2>
          </div>
        </section>
        <h1 className="py-11 text-2xl font-bold">Guias</h1>
        <section className="flex items-center flex-col gap-10">
          <div className="w-full h-40 bg-green-800 rounded-2xl transition-all shadow-xl hover:shadow-2xl text-white p-6 text-2xl relative">
            <h1 className="font-light leading-9">
              Confira seus últimos registros de
              <br />
              expressão de sentimentos.
            </h1>
            <button className="absolute bottom-0 right-0 p-5 bg-pink-500 shadow-3D rounded-tl-2xl rounded-br-xl hover:pb-6 transition-all flex items-center gap-2">
              <h6 className="text-sm">Acessar</h6>
              <ArrowUpRight weight="bold" />
            </button>
          </div>
          <div className="w-full h-40 bg-green-800 rounded-2xl transition-all shadow-xl hover:shadow-2xl text-white p-6 text-2xl relative">
            <h1 className="font-light leading-9">
              Problemas com ansiedade, ataque de pânico?
              <br />
              Acesse nossa respiração guiada.
            </h1>
            <button className="absolute bottom-0 right-0 p-5 bg-pink-500 shadow-3D rounded-tl-2xl rounded-br-xl hover:pb-6 transition-all flex items-center gap-2">
              <h6 className="text-sm">Acessar</h6>
              <ArrowUpRight weight="bold" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
