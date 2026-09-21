import express from "express";

const route = express.Router();

route.get("/recursos", (req, res) => {
    const recursos = [
        { nome: "Conversação", finalidade: "Responder perguntas e manter diálogos em linguagem natural.", exemplo: "Explicar um conceito ou resumir um texto." },
        { nome: "Escrita", finalidade: "Apoiar a criação e revisão de textos.", exemplo: "Criar um rascunho de e-mail ou roteiro." },
        { nome: "Programação", finalidade: "Auxiliar na explicação, criação e depuração de código.", exemplo: "Sugerir uma função em JavaScript." },
        { nome: "Estudo", finalidade: "Ajudar a organizar conteúdos e tirar dúvidas.", exemplo: "Montar um plano de estudos." },
        { nome: "Análise", finalidade: "Interpretar e estruturar informações fornecidas na conversa.", exemplo: "Comparar opções em uma lista." }
    ];

    res.render("estadios", { recursos });
});

export default route;
