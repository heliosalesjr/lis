"use client";
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './contact.css';

export function Contact() {
    const [result, setResult] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, // Access Key from .env
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Muito obrigado!",
                text: "Sua mensagem foi enviada!",
                icon: "success"
            });
            e.target.reset();  // Reset the form after successful submission
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    return (
        <>
            <section
                className="relative contact-container flex justify-center items-center"
                style={{
                    backgroundImage: "url('img/call3.jpg')", // Caminho da sua imagem
                    backgroundSize: "cover",  // Faz a imagem cobrir todo o fundo
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh", // Ocupa toda a altura da tela
                }}
            >
                {/* Camada de cor sobre a imagem para melhorar a legibilidade */}
                <div className="absolute inset-0 bg-sky-800 opacity-40 z-10"></div>
                
                {/* Conteúdo */}
                <div id="contato" className="relative z-20 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                    
                    {/* Primeira coluna (h1 vazio) */}
                    <h1 className="text-transparent">.</h1>

                    {/* Segunda coluna com o formulário, sem alterações */}
                    <div className="flex flex-col justify-center items-center">
                        <form onSubmit={handleSubmit} className="space-y-6 w-full">
                            <h2 className="text-3xl font-black mb-4 text-center text-slate-700">Fale conosco</h2>
                            <div className='input-box'>
                                <label className="block mb-1">Nome</label>
                                <input type="text" className="field w-full p-2 border rounded-md" placeholder="Seu nome" name="name" required />
                            </div>
                            <div className='input-box'>
                                <label className="block mb-1">E-mail</label>
                                <input type="email" className="field w-full p-2 border rounded-md" placeholder="Seu e-mail" name="email" required />
                            </div>

                            <div className='input-box'>
                                <label className="block mb-1">Mensagem</label>
                                <textarea name='message' className="field w-full p-2 border rounded-md" placeholder="Escreva sua mensagem" required></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Enviar</button>

                            {result && <p className="text-red-500 text-center">{result}</p>}
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
