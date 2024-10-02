import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16rem; /* 64 */
  background-color: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.09);
  padding: 2.25rem; /* 9 */
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* space-y-3 */
`;

export const Circle = styled.div`
  width: 6rem; /* 24 */
  height: 6rem; /* 24 */
  background-color: #7c3aed; /* bg-violet-500 */
  border-radius: 50%;
  position: absolute;
  right: -1.25rem; /* -right-5 */
  top: -1.75rem; /* -top-7 */
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const CircleText = styled.p`
  color: white;
  font-size: 1.5rem; /* text-2xl */
  position: absolute;
  bottom: 1.5rem; /* bottom-6 */
  left: 1.75rem; /* left-7 */
`;

export const IconContainer = styled.div`
  width: 3rem; /* w-12 */
  max-width: 50px;
  max-height: 100px;
  fill: #7c3aed; /* fill-violet-500 */
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.25rem; /* text-xl */
`;

export const Description = styled.p`
  font-size: 0.875rem; /* text-sm */
  color: #4b5563; /* text-zinc-500 */
  line-height: 1.5; /* leading-6 */
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
