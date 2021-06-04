const fastify = require("fastify")();

fastify.get("/cit/question", request, reply) => {
    reply
        .code(200)
        .headers("Content-Type", "application.json; charset=utf-8")
        .questions("[Q1, Q2, Q3]")
        .error("")  
}

fastify.get("/cit/answer", request, reply) => {
    reply
        .code(200)
        .headers("Content-Type", "application.json; charset=utf-8")
        .answers("[A1, A2, A3]")
        .error("")
}

fastify.get("/cit/questionanswer", request, reply) => {
    reply
        .code(200)
        .headers("Content-Type", "application.json; charset=utf-8")
        .questions_answers(
        {
            "question": "Q1",
            "answer": "A1"
        },
        {
            "question": "Q2",
            "answer": "A2"
        },
        {
            "question": "Q3",
            "answer": "A3"
        }
    );
        .error("")
    
}

fastify.get("/cit/question/:number", request, reply) => {
    reply
        .code(200)
        .headers("Content-Type", "application.json; charset=utf-8")
        .question("")
        .error("")
        .number()
}

fastify.get("/cit/answer/:number", request, reply) => {
    reply
        .code(200)
        .headers("Content-Type", "application.json; charset=utf-8")
        .answer("")
        .error("")
        .number()
}

fastify.get("/cit/questionanswer/:number", request, reply) => {
    reply
        .code(200)
        .headers("Content-Type", "application.json; charset=utf-8")
        .question("")
        .answer("")
        .error("")
        .number()
}

fastify.get( "*", request, reply) => {
    .error("Route not found")
    .code(404)
}






const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log (`Server listening on ${address}`)
});