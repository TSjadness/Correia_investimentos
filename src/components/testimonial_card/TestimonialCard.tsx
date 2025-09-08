import VideoEmbed from "../VideoEmbed";
import { Box } from "./styles";
export default function TestimonialCard({ videoId }: { videoId: string }) {
  return (
    <Box>
      <VideoEmbed id={videoId} />
    </Box>
  );
}
