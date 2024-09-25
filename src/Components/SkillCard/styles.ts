import styled from "styled-components";

export const StyledWrapper = styled.div`
    .card {
        width: 250px;
        height: 150px;
        perspective: 1000px;
    }
    
    .card-inner {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.999s;
    }
    
    .card:hover .card-inner {
        transform: rotateY(180deg);
    }
    
    .card-front,
    .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }
    
    .card-front {
        color: #000;
        display: flex;
        align-items: center;
        border: 10px solid;
        border-radius: 10px;
        justify-content: center;
        font-size: 24px;
        transform: rotateY(0deg);
        background-color:#f1f1f3;
        font-weight: 500;
    }
    
    .card-back {
        color: #fff;
        display: flex;
        align-items: center;
        border: 10px solid;
        border-radius: 10px;
        justify-content: center;
        font-size: 20px;
        transform: rotateY(180deg);
    }
    
`;