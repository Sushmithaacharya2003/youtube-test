import CommentCard from './CommentCard';

function CommentSection({ comments, commentLikes, onCommentLikeToggle, channelName }) {
  return (
    <section className="comments-section">
      <div className="comments-header">
        <h2 className="comments-title">{comments.length} Comments</h2>
        <button type="button" className="sort-button">
          Top comments <span aria-hidden="true">▼</span>
        </button>
      </div>

      <div className="comment-input-row">
        <div className="comment-avatar-placeholder" aria-hidden="true" />
        <input
          className="comment-input"
          type="text"
          placeholder="Add a comment..."
          readOnly
          aria-label="Add a comment"
        />
      </div>

      {comments.length === 0 ? (
        <div className="comments-empty">No comments yet. Be the first to comment!</div>
      ) : (
        <div className="comments-list">
          {comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              likeState={commentLikes[comment.id]}
              onLikeToggle={onCommentLikeToggle}
              channelName={channelName}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default CommentSection;
