# Práctica 9/10 - Sharingan generativo con GLSL

## Autor
- Realizado por Daniel Pérez Sosa, estudiante de la EII en el GII.

## Descripción

La práctica consiste en crear un fragment shader generativo y dinámico utilizando GLSL y el editor de The Book of Shaders.

Para la visualización se ha creado un Sharingan inspirado en Naruto, formado completamente mediante operaciones matemáticas dentro del fragment shader, sin utilizar imágenes ni texturas externas.

El Sharingan está compuesto por un iris rojo, una pupila negra y tres tomoe distribuidos alrededor de la pupila. Los tomoe realizan un movimiento orbital continuo manteniendo su orientación hacia el exterior del iris.

También se ha añadido un efecto de vórtice animado que gira en la misma dirección que los tomoe para simular el efecto de absorción asociado a la habilidad Kamui.

Además, se incluyen pequeñas marcas alrededor de la órbita para mejorar visualmente la representación del Sharingan.

## Funcionalidades
- Generación completa del Sharingan mediante un fragment shader
- Iris circular rojo generado matemáticamente
- Pupila negra situada en el centro
- Tres tomoe distribuidos uniformemente alrededor de la pupila
- Movimiento orbital animado de los tomoe mediante 'u_time'
- Orientación de los tomoe hacia el exterior mientras realizan la órbita
- Efecto de vórtice animado para simular absorción
- Marcas alrededor de la órbita de los tomoe
- Adaptación automática del dibujo al tamaño de la ventana mediante 'u_resolution'
- Uso de funciones trigonométricas y operaciones sobre coordenadas para generar toda la visualización
- Versión simplificada del shader con un tamaño inferior a 512 bytes

## Controles
| Acción | Control |
| --- | --- |
| Ejecutar la animación | Automático mediante 'u_time' |
| Cambiar el tamaño de la visualización | Automático mediante 'u_resolution' |
| Modificar la velocidad de giro | Modificar el valor de la variable 'vel' |

## Tecnologías
- GLSL
- Fragment Shaders
- [The Book of Shaders]\(https\://thebookofshaders.com/)
- Funciones 'sin', 'cos', 'atan', 'length', 'step' y 'smoothstep'
- Uniforms 'u_time' y 'u_resolution'

## Código reducido

Se ha realizado una versión simplificada del fragment shader para cumplir con el objetivo de mantener el código por debajo de los 512 bytes.

Esta versión conserva los principales elementos de la visualización: iris, pupila, tomoe y efecto dinámico de absorción.

## Captura de ejecución

Video: AÑADIR ENLACE DEL VIDEO

## Fuentes y recursos

- [The Book of Shaders]\(https\://thebookofshaders.com/)
- [Documentación de GLSL]\(https\://www.khronos.org/opengl/wiki/OpenGL_Shading_Language)
- Material proporcionado en las sesiones 9 y 10 de Informática Gráfica
- Naruto / Sharingan utilizado únicamente como referencia visual para el diseño del patrón generativo

## Asistencia mediante inteligencia artificial

Durante el desarrollo se utilizó ChatGPT como apoyo para estudiar diferentes posibilidades de creación de patrones generativos mediante fragment shaders y adaptar las técnicas vistas en las sesiones 9 y 10 a una visualización propia. Se utilizó como ayuda para trabajar con coordenadas normalizadas, generar círculos y formas mediante funciones matemáticas, distribuir los tres tomoe alrededor de la pupila, realizar su movimiento orbital mediante 'u_time' y crear el efecto de vórtice asociado a la absorción. También se utilizó como apoyo para simplificar y reducir el código con el objetivo de obtener una versión inferior a 512 bytes. (AÑADIR ENLACE DE LA CONVERSACIÓN DE CHATGPT)\
