$(function () {
  let operacao = "A";
  let tbClientes = localStorage.getItem("tbClientes");
  tbClientes = JSON.parse(tbClientes);

  if (tbClientes === null) tbClientes = [];

  function Adicionar() {
    let cli = GetCliente("Codigo", $("txtCodigo").val());

    if (cli !== null) {
      alert("Código cadastrado");
      return;
    }

    let cliente = JSON.stringify({
      Codigo: $("txtCodigo").val(),
      Nome: $("txtNome").val(),
      Telefone: $("txtTelefone").val(),
      Email: $("txtEmail").val(),
      DtCad: $("txtDtCad").val()
    });

    tbClientes.push(cliente);
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert('Registro adicionado');
    return true;
  }

  function Listar() {
    $("#tbListar").html("");
    $("#tbListar").html(
      "<thead>" +
      "<tr>" +
      "<th></th>" +
      "<th>Código</th>" +
      "<th>Nome</th>" +
      "<th>Telefone</th>" +
      "<th>Email</th>" +
      "<th>DtCadastro</th>" +
      "</tr>" +
      "</thead>" +
      "<tbody></tbody>"
    );

    for (const i in tbClientes) {
      if (Object.hasOwnProperty.call(tbClientes, i)) {
        const cli = tbClientes[i];
        "<td><img src='./images/edit.png' alt='+ i +' class='btnEditar'><img src='./images/delete.png' alt='+ i +' class='btnDeletar'></td>"
        "<td>" + cli.Codigo + "</td>" +
          "<td>" + cli.Nome + "</td>" +
          "<td>" + cli.Telefone + "</td>" +
          "<td>" + cli.Email + "</td>" +
          "<td>" + cli.DtCadastro + "</td>" +
          "</tr>"
      }
    }
  }
})