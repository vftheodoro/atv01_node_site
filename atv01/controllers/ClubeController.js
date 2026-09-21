import express from "express";
const route = express.Router();

route.get("/historia", (req, res) => {
    const historia = [
        { ano: 2015, marco: "Fundação da OpenAI", descricao: "A organização foi criada para pesquisar inteligência artificial de forma segura e útil." },
        { ano: 2018, marco: "GPT", descricao: "Foi apresentado o primeiro modelo Generative Pre-trained Transformer." },
        { ano: 2019, marco: "GPT-2", descricao: "O modelo demonstrou avanços na geração de texto em linguagem natural." },
        { ano: 2020, marco: "GPT-3", descricao: "Uma nova geração ampliou a capacidade de produzir e compreender textos." },
        { ano: 2022, marco: "Lançamento do ChatGPT", descricao: "O ChatGPT foi disponibilizado ao público em uma interface de conversa." }
    ];

    res.render("clubes", { historia });
});


export default route;
