async function CadastrarCliente() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("CPF").value;
    let senha = document.getElementById("senha").value;
    let birthday = document.getElementById("birthday").value;
    let terms = document.getElementById("terms").checked;


    const url = "https://go-wash-api.onrender.com/api/user"

    
    let parametros = {
        "name": nome,
        "email": email,
        "user_type_id": 1,
        "password": senha,
        "cpf_cnpj": cpf,
        "terms": terms,
        "birthday": birthday,
    }

    


    if (nome == "" || email == "" || cpf == "" || senha == "" || birthday == "") {
        alert("Preencha todos os campos!");
        return
    }

    let api  = await fetch (url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(parametros)
    });
    
    if(api.ok){
        let resposta = await api.json();
        console.log(resposta);
        alert("Cliente cadastrado com sucesso!");
        return
    }
    let respostaerro = await api.json();
    console.log(respostaerro);

}

