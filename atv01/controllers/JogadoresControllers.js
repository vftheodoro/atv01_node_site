import express from "express";
const route = express.Router();

route.get("/modelos", (req, res) => {
    const modelos = [
        { nome: "GPT-1", ano: 2018, destaque: "Introduziu o pré-treinamento generativo para tarefas de linguagem." },
        { nome: "GPT-2", ano: 2019, destaque: "Ampliou a qualidade na geração de textos coerentes." },
        { nome: "GPT-3", ano: 2020, destaque: "Aumentou significativamente a escala dos modelos de linguagem." },
        { nome: "GPT-3.5", ano: 2022, destaque: "Foi a base inicial utilizada pelo ChatGPT." },
        { nome: "GPT-4", ano: 2023, destaque: "Trouxe capacidades avançadas de raciocínio e compreensão multimodal." }
    ];

    res.render("jogadores", { modelos });
})

export default route;
