
import styled from "styled-components";

const Frame = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  border-radius: 18px;
  background: #000;
`;

export default function VideoEmbed({ id }: { id: string; }) {
  return (
    <Frame
      src={`https://www.youtube.com/embed/${id}`}
      title='YouTube video'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
    />
  );
}
