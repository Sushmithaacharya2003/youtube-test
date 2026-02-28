import { Bell, CheckCircle2 } from 'lucide-react';

function formatSubscribers(count) {
  return `${new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1
  })
    .format(count)
    .replace('.0', '')} subscribers`;
}

function ChannelInfo({ channel, isSubscribed, onSubscribeToggle }) {
  return (
    <section className="channel-section">
      <div className="channel-row">
        <div className="channel-main">
          <img className="channel-avatar" src={channel.avatar} alt={channel.name} />
          <div className="channel-copy">
            <div className="channel-name-row">
              <span className="channel-name">{channel.name}</span>
              {channel.isVerified ? (
                <CheckCircle2 className="verified-badge" size={16} strokeWidth={2.1} aria-label="Verified" />
              ) : null}
            </div>
            <p className="channel-subscribers">{formatSubscribers(channel.subscribers)}</p>
          </div>
        </div>

        <button
          type="button"
          className={`subscribe-button${isSubscribed ? ' is-subscribed' : ''}`}
          onClick={onSubscribeToggle}
          aria-pressed={isSubscribed}
        >
          {isSubscribed ? <Bell size={16} strokeWidth={2.1} /> : null}
          <span>{isSubscribed ? 'Subscribed' : 'Subscribe'}</span>
        </button>
      </div>
    </section>
  );
}

export default ChannelInfo;
