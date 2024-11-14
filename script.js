document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".codigo-digit");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (event) => {
            if (input.value.length === 1 && index < inputs.length - 1) {
                // Passa o foco para o próximo campo se houver um próximo
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (event) => {
            if (event.key === "Backspace" && input.value.length === 0 && index > 0) {
                // Retorna o foco para o campo anterior ao apagar
                inputs[index - 1].focus();
            }
        });
    });
});
