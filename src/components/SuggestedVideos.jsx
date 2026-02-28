import { CheckCircle2, MoreVertical } from 'lucide-react';

function SuggestedVideos({ videos }) {
  return (
    <section className="suggested-videos" aria-label="Suggested videos">
      {videos.map((video) => (
        <article key={video.id} className="suggested-video-card">
          <div className="suggested-thumbnail-wrap">
            <img className="suggested-thumbnail" src={video.thumbnail} alt={video.title} />
            <span className="suggested-duration">{video.duration}</span>
          </div>

          <div className="suggested-copy">
            <h3 className="suggested-title">{video.title}</h3>
            <div className="suggested-channel-row">
              <span className="suggested-channel">{video.channel}</span>
              {video.isVerified ? (
                <CheckCircle2 className="suggested-verified" size={14} strokeWidth={2.1} />
              ) : null}
            </div>
            <p className="suggested-meta">
              {video.views} views <span aria-hidden="true">•</span> {video.timeAgo}
            </p>
            {video.badge ? <span className="suggested-badge">{video.badge}</span> : null}
          </div>

          <button
            type="button"
            className="suggested-more-button"
            aria-label={`More options for ${video.title}`}
          >
            <MoreVertical size={18} strokeWidth={2.2} />
          </button>
        </article>
      ))}
    </section>
  );
}

export default SuggestedVideos;
