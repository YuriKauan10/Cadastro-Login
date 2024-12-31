import Input from "./components/Input"
import Mensagem from "./components/Mensagem"


export default function Home() {
  return (
    <div className="flex justify-center mt-40">
      <div className="caixa1 flex flex-col justify-center items-center">
          <h1 className="titulo mb-5">Welcome</h1>
          <Input/>
          <Mensagem/>
          <div>
            <button className="botao2">Login</button>
          </div>
      </div>
      <div className="caixa2">

      </div>
    </div>
  )  
  
}
