import React, { useEffect } from "react";

export function HomePage() {
  useEffect(() => {
    // Al montar, añadir una clase al cuerpo
    document.body.classList.add("home-page");
    // Limpieza después del desmontaje
    return () => {
      // Al desmontar, quitar la clase del cuerpo
      document.body.classList.remove("home-page");
    };
  }, []);

  return (
    <div className="homepage-content">
      <h1>
        Comunidad de recomendaciones de ofertas, lugares o viajes solo para ti
      </h1>
      <h2>Si te gusta viajar...</h2>
      <div className="welcome-container">
        <p className="welcome-message">¡Bienvenidos a Linkilandia!</p>
        <p>Siempre es un buen momento para planificar tu próximo viaje.</p>
        <p className="question-paragraph">¿Por qué elegirnos?</p>
        <p>
          En nuestra comunidad amamos descubrir nuevos destinos, paisajes en los
          que puede disfrutar todo el mundo, viajes adaptados para todas las
          edades.
        </p>
        <p className="question-paragraph">
          ¿Como podéis inspiraros y ayudar a otros viajeros?
        </p>
        <p className="last-paragraph">
          Aquí podréis añadir todos los enlaces que os parezcan interesantes o
          que puedan servir de inspiración para otros viajeros y ayudarlos a
          encontrar nuevos destinos, ofertas de vuelos, viajes, escapadas de fin
          de semana o viajes con niños...Por cada enlace que se añada, ayudarás
          a otro viajero como tú y al mismo tiempo podrás encontrar nuevas
          aventuras viajeras.
        </p>
      </div>
      <div className="homepage-content__paragraphs">
        <p>Aquí encontrarás lo que estás buscando</p>
        <p>Prepara tu viaje</p>
      </div>
      <div style={{ height: "60px" }}></div>{" "}
      {/* Este div proporciona el espacio adicional al final de la página */}
    </div>
  );
}
