export default function Input(){
    return (
        <div className="flex flex-col gap-5">
            <input type="text" placeholder="Email" className="inputTexto"/>
            <input type="password" className="inputSenha" placeholder="Senha"/>
        </div>
    )
}