Lista de responsabilidades: (no terminada)

- App

  - Renderiza todos los componentes dentro del contenedor

  - Tiene funciones OnClick desde Keyboard

    - Comprueba cuantas cifras hay en el Display

    - Si en Display está menor de 9 cifras le envía la cifra

    - Envia true al Info, cuando

- Info

        - Recibir true o false para añadir or quitar clasName "off" cuando se pulsa el botón "Llamar" y mientras dure la llamada

       - Mostrar el mensaje "Llamando..." cuando recibe el valor true

- Display

       - Renderiza el campo.

       - Reciba las cifras y les muestra en el campo

       -

- Actions

  - Renderiza el contenedor para botones

  - Recibe actionOnClick

  - Action

         - Renderiza un boton

- Keyboard

  - Tiene contenedor para teclas y renderiza todas las teclas con números y Delete. (<li> Key </li>

  - Recibe una actionOnClick.

  - Key

          - Renderizar una tecla (button con className("key"))
