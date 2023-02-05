import { useState } from "react"
import { Input } from "../../form/Input"
import { Link } from "react-router-dom"

export const Register = () => {   

    const [user, setUser] = useState({})

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
     }

     const handleSubmit = e => {
        e.preventDefault()
     }

    return (
        <section className="max-w-xs mx-auto">
            <h1 className="text-3xl font-semibold text-primary">Registrar</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Telefone"
                    type="text"
                    name="phone"
                    placeholder="Digite seu telefone"
                    handleOnChange={handleChange}
                />
                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Confirmação de senha"
                    type="password"
                    name="ConfirmPassword"
                    placeholder="Confirme sua senha"
                    handleOnChange={handleChange}
                />
                <input type="submit" value="Cadastrar" className="bg-green-500 hover:bg-green-600 duration-300 text-white w-full cursor-pointer font-semibold rounded-md my-5 py-2" />
            </form>
            <p className="text-center">Já possui conta?  <Link to='/login' className="font-semibold text-primary">Clique aqui</Link></p>
        </section>
    )
}