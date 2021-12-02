function efetuarLogin() {

    var url = "http://localhost:8080/mei";

    var usuario = {
        "email": document.getElementById("txtEmail").value,
        "senha": document.getElementById("txtSenha").value
    };

    var request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    }
    
    fetch(url, request)
    .then(response => response.json())
    .then(response => {
        localStorage.setItem("usuarioLogado", JSON.stringify(response))
        window.location = "mei.html";
    })
    .catch(err => {
        window.alert("Usuario ou senha incorretos")
    });

}

function checar()
{
 var botoes = document.getElementsByName("flexRadioDefault");

 for (var i = 0 in botoes) 
        if (botoes[0].checked){
        var url = "http://localhost:8080/mei";

        var usuario = {
            "email": document.getElementById("txtEmail").value,
            "senha": document.getElementById("txtSenha").value
        };

        var request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        }
    
        fetch(url, request)
        .then(response => response.json())
        .then(response => {
            localStorage.setItem("usuarioLogado", JSON.stringify(response))
            window.location = "mei.html";
        })
        .catch(err => {
            window.alert("Usuario ou senha incorretos")
        });

        i++

        }
        else {
            var url = "http://localhost:8080/acesso-me";

            var usuario = {
                "email": document.getElementById("txtEmail").value,
                "senha": document.getElementById("txtSenha").value
            };
        
            var request = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuario)
            }
            
            fetch(url, request)
            .then(response => response.json())
            .then(response => {
                localStorage.setItem("usuarioLogado", JSON.stringify(response))
                window.location = "mei.html";
            })
            .catch(err => {
                window.alert("Usuario ou senha incorretos")
            });

            i++
        }    
}
