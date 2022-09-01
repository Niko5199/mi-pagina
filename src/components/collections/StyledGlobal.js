import { css } from "styled-components";

// * La diferencia entre usar styled y css
// * es que css nos devuelve una plantilla literal
// * con todos los cambios en css que queramos aplicar

// * Mientras que styled aplica cambios a un elemento
// * en especifico

// * El css se usa solo para inyectar estilos sin necesidad
// * de crear un componente

const titleStyles = css`
  font-size: min(5rem, 10vw);
  margin: 0px;
`;

export { titleStyles };
