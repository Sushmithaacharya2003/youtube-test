import { useEffect, useRef, useState } from 'react';

function renderLinkedText(text) {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlPattern);

  return parts.map((part, index) => {
    if (urlPattern.test(part)) {
      return (
        <a
          key={`${part}-${index}`}
          href={part}
          target="_blank"
          rel="noreferrer"
          className="description-link"
        >
          {part}
        </a>
      );
    }

    return part;
  });
}

function Description({ description }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('4.5em');

  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setMaxHeight('4.5em');
      }
    }
  }, [isExpanded, description]);

  return (
    <section className="description-card">
      <div
        className={`description-body${isExpanded ? ' is-expanded' : ''}`}
        style={{ maxHeight }}
      >
        <div
          ref={contentRef}
          className={`description-text${isExpanded ? ' is-expanded' : ' is-collapsed'}`}
        >
          {isExpanded ? renderLinkedText(description) : description}
        </div>
      </div>

      {isExpanded ? (
        <button
          type="button"
          className="description-toggle"
          onClick={() => setIsExpanded(false)}
        >
          Show less
        </button>
      ) : (
        <button
          type="button"
          className="description-inline-more"
          onClick={() => setIsExpanded(true)}
        >
          ...more
        </button>
      )}
    </section>
  );
}

export default Description;
