import { useEffect, useMemo, useState } from 'react';
import ActionBar from './components/ActionBar';
import ChannelInfo from './components/ChannelInfo';
import CommentSection from './components/CommentSection';
import Description from './components/Description';
import Skeleton from './components/Skeleton';
import SuggestedVideos from './components/SuggestedVideos';
import VideoInfo from './components/VideoInfo';
import commentsData from './data/comments.json';
import suggestedVideos from './data/suggestedVideos.json';
import videoData from './data/videoData.json';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [commentLikes, setCommentLikes] = useState(() =>
    commentsData.reduce((acc, comment) => {
      acc[comment.id] = {
        isLiked: comment.isLiked,
        likes: comment.likes
      };
      return acc;
    }, {})
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
      window.requestAnimationFrame(() => {
        setIsContentVisible(true);
      });
    }, 1500);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const displayedLikes = useMemo(() => {
    if (isLiked) {
      return videoData.likes + 1;
    }

    return videoData.likes;
  }, [isLiked]);

  const handleLikeToggle = () => {
    setIsLiked((prev) => {
      const nextLiked = !prev;
      if (nextLiked && isDisliked) {
        setIsDisliked(false);
      }
      return nextLiked;
    });
  };

  const handleDislikeToggle = () => {
    setIsDisliked((prev) => {
      const nextDisliked = !prev;
      if (nextDisliked && isLiked) {
        setIsLiked(false);
      }
      return nextDisliked;
    });
  };

  const handleSubscribeToggle = () => {
    setIsSubscribed((prev) => !prev);
  };

  const handleCommentLikeToggle = (commentId) => {
    setCommentLikes((prev) => {
      const current = prev[commentId];
      const nextLiked = !current.isLiked;

      return {
        ...prev,
        [commentId]: {
          isLiked: nextLiked,
          likes: nextLiked ? current.likes + 1 : Math.max(current.likes - 1, 0)
        }
      };
    });
  };

  if (isLoading) {
    return (
      <main className="page">
        <div className="content-shell">
          <Skeleton />
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <div className={`content-shell fade-in${isContentVisible ? ' is-visible' : ''}`}>
        <div className="details-layout">
          <section className="details-main-column">
            <VideoInfo title={videoData.title} views={videoData.views} uploadedAt={videoData.uploadedAt} />
            <ActionBar
              likes={displayedLikes}
              isLiked={isLiked}
              isDisliked={isDisliked}
              onLikeToggle={handleLikeToggle}
              onDislikeToggle={handleDislikeToggle}
            />
            <ChannelInfo
              channel={videoData.channel}
              isSubscribed={isSubscribed}
              onSubscribeToggle={handleSubscribeToggle}
            />
            <Description description={videoData.description} />
            <CommentSection
              comments={commentsData}
              commentLikes={commentLikes}
              onCommentLikeToggle={handleCommentLikeToggle}
              channelName={videoData.channel.name}
            />
          </section>

          <aside className="details-sidebar">
            <SuggestedVideos videos={suggestedVideos} />
          </aside>
        </div>
      </div>
    </main>
  );
}

export default App;
