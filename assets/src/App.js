(() => {
  const VINETA = document.querySelectorAll("[data_vineta]");
  const LISTAS = document.querySelectorAll("[data-lista]");

  VINETA.forEach((opc) => {
    opc.addEventListener("click", () => {
      LISTAS.forEach((lista) => {
        const valida = !lista.classList.contains("accordion__text--ocultar");

        if (valida) {
          lista.classList.add("accordion__text--ocultar");
          let icon = document.querySelector(
            `[id="${lista.attributes["data-lista"].value}"]`
          );
          icon.src = "./assets/images/icon-plus.svg";
        } else {
          // If the list is already hidden, we do not need to do anything
          if (
            opc.attributes["data_vineta"].value ===
            lista.attributes["data-lista"].value
          ) {
            lista.classList.remove("accordion__text--ocultar");
            let icon = document.querySelector(
              `[id="${opc.attributes["data_vineta"].value}"]`
            );
            icon.src = icon.src.includes("icon-plus.svg")
              ? "./assets/images/icon-minus.svg"
              : "./assets/images/icon-plus.svg";
          } else {
            lista.classList.contains("accordion__text--ocultar")
              ? ""
              : lista.classList.add("accordion__text--ocultar");

            let icon = document.querySelector(
              `[id="${lista.attributes["data-lista"].value}"]`
            );

            icon.src = "./assets/images/icon-plus.svg";
          }
        }
      });
    });
  });
})();

//"./assets/images/icon-minus.svg"
//"./assets/images/icon-plus.svg"
