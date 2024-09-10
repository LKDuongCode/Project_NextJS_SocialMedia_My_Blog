export type Post = {
  id: number;
  display: boolean;
  create_at: string;
  user_id: number;
  content: {
    title: string;
    media: {
      type: "image" | "video" | "none";
      url: string;
    };
  };
  status: "public" | "private" | "friend";
  engagement: {
    shares: number[];
    reactions: {
      like: number[];
      love: number[];
      wow: number[];
      sad: number[];
      angry: number[];
    };
  };
};

// state
export type StatePostType = {
  loading: boolean;
  data: Post[];
  error: string | null;
};
