export const fetchMeditations = async () => {
  const API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_API_KEY;
  const query = "guided meditation for athletes focus relaxation 10 minutes";

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${encodeURIComponent(
      query
    )}&key=${API_KEY}`
  );

  const data = await response.json();
  return data.items || [];
};
