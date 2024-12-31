import Input from "../components/Input"

export default function Page2(){
    return (
        <div className="flex items-center justify-center h-screen">
            <div className=" caixa3">

                <div className="caixa4 ">

                <div className="text-gray-800 font-semibold titulo">
                    Cadastre-se
                </div>

                <div className="">
                    <Input/>
                </div>

                <div>
                    <button className="text-white font-semibold bg-orange-400 botao ">Enviar</button>
                </div>
                </div>
            </div>
        </div>
    )
}