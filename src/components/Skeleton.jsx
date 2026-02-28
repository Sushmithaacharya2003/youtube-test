function Skeleton() {
  return (
    <section className="skeleton-shell" aria-label="Loading video details">
      <div className="skeleton-layout">
        <div className="skeleton-main-column">
          <div className="skeleton shimmer title-line title-line-lg" />
          <div className="skeleton shimmer title-line title-line-sm" />

          <div className="skeleton-action-row">
            <div className="skeleton shimmer pill-wide" />
            <div className="skeleton shimmer pill-md" />
            <div className="skeleton shimmer pill-md" />
            <div className="skeleton shimmer pill-sm" />
          </div>

          <div className="skeleton-channel-row">
            <div className="skeleton shimmer skeleton-circle-lg" />
            <div className="skeleton-channel-copy">
              <div className="skeleton shimmer text-md" />
              <div className="skeleton shimmer text-sm" />
            </div>
            <div className="skeleton shimmer skeleton-subscribe" />
          </div>

          <div className="skeleton-description">
            <div className="skeleton shimmer text-full" />
            <div className="skeleton shimmer text-full" />
            <div className="skeleton shimmer text-half" />
          </div>

          <div className="skeleton-comments">
            {[1, 2, 3].map((item) => (
              <div className="skeleton-comment-row" key={item}>
                <div className="skeleton shimmer skeleton-circle" />
                <div className="skeleton-comment-copy">
                  <div className="skeleton shimmer text-sm" />
                  <div className="skeleton shimmer text-full" />
                  <div className="skeleton shimmer text-half" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skeleton-sidebar">
          {[1, 2, 3, 4, 5].map((item) => (
            <div className="skeleton-suggested-row" key={item}>
              <div className="skeleton shimmer skeleton-thumbnail" />
              <div className="skeleton-suggested-copy">
                <div className="skeleton shimmer text-full" />
                <div className="skeleton shimmer text-sm" />
                <div className="skeleton shimmer text-half" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skeleton;
