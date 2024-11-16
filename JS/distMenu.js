function fmenu(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido de la página cargada en el contenedor
            document.getElementById('cuerpoPag').innerHTML = data;
            
            // Configurar Parsley en el formulario cargado dinámicamente
            const form = document.getElementById('registroForm');
            if (form) {
                $(form).parsley({
                    trigger: 'input' 
                });

                
                form.addEventListener('submit', function (e) {
                    e.preventDefault(); 

                    // Validar el formulario usando Parsley
                    if ($(form).parsley().isValid()) {
                        alert('Formulario enviado con éxito.');

                        // Limpia los campos del formulario
                        form.reset();

                      
                        $(form).parsley().reset();
                    } else {
                        alert('Por favor, complete todos los campos correctamente.');
                    }
                });

                
                $('input, select').on('input', function () {
                    $(this).parsley().validate();
                });
            } else {
                console.error('El formulario no se encontró en la página cargada.');
            }

          
            const modalElement = document.getElementById('exampleModal');
            if (modalElement) {
                const modal = new bootstrap.Modal(modalElement);
                modal.show(); 
            } else {
                console.error('El modal no se encontró en la página cargada.');
            }
        })
        .catch(error => console.error('Error al cargar la página:', error));
}
