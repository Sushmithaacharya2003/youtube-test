import { ChevronDown, ThumbsDown, ThumbsUp } from 'lucide-react';

function formatCompactNumber(value) {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1
  })
    .format(value)
    .replace('.0', '');
}

function CommentCard({ comment, likeState, onLikeToggle, channelName }) {
  return (
    <article className="comment-card">
      <img className="comment-avatar" src={comment.avatar} alt={comment.author} />

      <div className="comment-content">
        {comment.isPinned ? (
          <div className="pinned-label" aria-label={`Pinned by ${channelName}`}>
            <span aria-hidden="true">📌</span> Pinned by {channelName}
          </div>
        ) : null}

        <div className="comment-meta">
          <span className="comment-author">{comment.author}</span>
          <span className="comment-time">{comment.timeAgo}</span>
        </div>

        <p className="comment-text">{comment.text}</p>

        <div className="comment-actions">
          <button
            type="button"
            className={`comment-action-button${likeState.isLiked ? ' is-active' : ''}`}
            onClick={() => onLikeToggle(comment.id)}
            aria-pressed={likeState.isLiked}
          >
            <ThumbsUp size={16} strokeWidth={2.1} />
            {likeState.likes > 0 ? <span>{formatCompactNumber(likeState.likes)}</span> : null}
          </button>

          <button type="button" className="comment-action-button" aria-label="Dislike comment">
            <ThumbsDown size={16} strokeWidth={2.1} />
          </button>

          <button type="button" className="reply-button">
            Reply
          </button>
        </div>

        {comment.replies > 0 ? (
          <button type="button" className="replies-button">
            <ChevronDown size={16} strokeWidth={2.1} />
            <span>{comment.replies} replies</span>
          </button>
        ) : null}
      </div>
    </article>
  );
}

export default CommentCard;
