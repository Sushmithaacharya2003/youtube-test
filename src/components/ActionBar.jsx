import { Bookmark, MoreHorizontal, Share2, ThumbsDown, ThumbsUp } from 'lucide-react';

function formatCompactNumber(value) {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1
  })
    .format(value)
    .replace('.0', '');
}

function ActionBar({ likes, isLiked, isDisliked, onLikeToggle, onDislikeToggle }) {
  return (
    <section className="action-bar-scroller" aria-label="Video actions">
      <div className="action-bar">
        <div className="engagement-pill" role="group" aria-label="Like and dislike">
          <button
            type="button"
            className={`pill-button split-button split-left${isLiked ? ' is-active' : ''}`}
            onClick={onLikeToggle}
            aria-pressed={isLiked}
          >
            <ThumbsUp className="icon" size={18} strokeWidth={2.1} />
            <span>{formatCompactNumber(likes)}</span>
          </button>
          <span className="split-divider" aria-hidden="true" />
          <button
            type="button"
            className={`pill-button split-button split-right${isDisliked ? ' is-active' : ''}`}
            onClick={onDislikeToggle}
            aria-pressed={isDisliked}
          >
            <ThumbsDown className="icon" size={18} strokeWidth={2.1} />
          </button>
        </div>

        <button type="button" className="pill-button action-pill">
          <Share2 className="icon" size={18} strokeWidth={2.1} />
          <span>Share</span>
        </button>

        <button type="button" className="pill-button action-pill">
          <Bookmark className="icon" size={18} strokeWidth={2.1} />
          <span>Save</span>
        </button>

        <button type="button" className="pill-button more-pill" aria-label="More actions">
          <MoreHorizontal className="icon" size={18} strokeWidth={2.1} />
        </button>
      </div>
    </section>
  );
}

export default ActionBar;
