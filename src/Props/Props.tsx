export interface PostProps {
  id?: number;
  author: {
    avatarUrl: string;
    name: string;
    profession: string;
    comment?: string;
  };
  content: [
    { type: 'salutation' | 'paragraph' | 'link'; content: string; },
    { type: 'salutation' | 'paragraph' | 'link'; content: string; },
    { type: 'salutation' | 'paragraph' | 'link'; content: string; }
  ];
  publishedAt: Date;
};

export interface CommentProps {
  author: {
    avatarUrl: string;
    name: string;
    profession: string;
    comment: string;
  };
  publishedAt: Date;
  deleteCommentProp: (comment: string) => void;
};