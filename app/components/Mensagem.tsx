import Link from "next/link"
export default function Mensagem(){
    return (
        <div className="flex flex-row mt-2 gap-1 text-sm curto">
            <div className="">Não tem uma conta?</div> 

            <Link href='./page2'>
            <div className="cadastrar">Cadastre-se</div>
            </Link>
            {/* Ao apertar a div branca move-se  */}
        </div>
    )
}