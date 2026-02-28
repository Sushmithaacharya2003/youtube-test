function formatViews(views) {
  return new Intl.NumberFormat('en-US').format(views);
}

function formatDate(uploadedAt) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(uploadedAt));
}

function VideoInfo({ title, views, uploadedAt }) {
  return (
    <section className="video-info">
      <h1 className="video-title">{title}</h1>
      <p className="video-meta">
        {formatViews(views)} views <span aria-hidden="true">•</span> {formatDate(uploadedAt)}
      </p>
    </section>
  );
}

export default VideoInfo;
