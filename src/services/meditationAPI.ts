

export const fetchMeditations = async () => {
  const API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_API_KEY;

  if (!API_KEY) {
    console.warn(" No YOUTUBE API KEY found — using fallback videos");
    return [];
  }

  const query = "guided meditation sports focus recovery 10 minutes";
  const maxResults = 5;

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoEmbeddable=true&maxResults=${maxResults}&q=${encodeURIComponent(
        query
      )}&key=${API_KEY}`
    );

    if (!response.ok) {
      console.error("YouTube API error:", response.status, response.statusText);
      return [];
    }

    const data = await response.json();

    if (!data.items || !Array.isArray(data.items) || data.items.length === 0) {
      console.warn(" No videos returned from API, using fallback.", data);
      return [];
    }

    // Map the response to your expected structure
    const videos = data.items.map((item: any) => ({
      id: { videoId: item.id.videoId },
      snippet: item.snippet,
    }));

    return videos;
  } catch (error) {
    console.error("Meditation API fetch error:", error);
    return [];
  }
};
