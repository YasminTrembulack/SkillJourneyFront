import styled from "styled-components";

export const StyledWrapper = styled.div`
    flex-grow: 1;

    .card {
        --border-radius: 0.75rem;
        --primary-color: #7257fa;
        --secondary-color: #3c3852;
        font-family: "Arial";
        padding: 1rem;
        cursor: pointer;
        border-radius: var(--border-radius);
        background: #f5f5f5;
        box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 3%);
        position: relative;
        display: flex;
        flex-direction: column; 
        justify-content: space-between;
        height: 180px;
    }
    .card:hover{
        transform: translateY(-8px);
        transition: 0.3s ease, opacity 1s ease;
    }

    .card > * + * {
        margin-top: 1.1em;
    }
    .card .card__top{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .card .card__botton{
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 20px;
    }

    .card .card__content {
        color: var(--secondary-color);
        font-size: 0.86rem;
        flex-grow: 1; /* Faz o conteúdo ocupar o espaço restante */
        overflow: hidden; /* Oculta o conteúdo que excede o espaço */
        text-overflow: ellipsis;
        display: -webkit-box; /* Define um contêiner flexível para o texto */
        -webkit-box-orient: vertical; /* Orienta o box verticalmente */
        -webkit-line-clamp: 2; /* Limita a 3 linhas */
        max-height: 2.7em; /* Define uma altura máxima para o texto */
    }

    .card .card__title {
        padding: 0;
        font-size: 1.3rem;
        font-weight: bold;
        overflow: hidden; 
        text-overflow: ellipsis;
        word-break: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; 
        max-height: 54px;
    }

    .card .card__date {
        color: #6e6b80;
        font-size: 0.8rem;
    }

    .card .card__arrow {
        position: absolute;
        background: var(--primary-color);
        padding: 0.4rem;
        border-top-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
        bottom: 0;
        right: 0;
        transition: 0.2s;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card svg {
        transition: 0.2s;
    }

    /* hover */
    .card:hover .card__title {
        color: #f3aa00;
        text-decoration: underline;
    }

    .card:hover .card__arrow {
        background: #111;
    }

    .card:hover .card__arrow svg {
        transform: translateX(3px);
    }
`;
