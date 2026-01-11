import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="29"
      viewBox="0 0 48 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          {/* P letter */}
          <path d="M0 0h11c3.9 0 7 3.1 7 7c0 3.9-3.1 7-7 7H5v15H0V0zm5 5v9h6c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H5z" />
          {/* S letter */}
          <path d="M26 0h14c2.2 0 4 1.8 4 4c0 2.2-1.8 4-4 4h-10c-1.1 0-2 .9-2 2s.9 2 2 2h10c3.9 0 7 3.1 7 7s-3.1 7-7 7H26c-2.2 0-4-1.8-4-4c0-2.2 1.8-4 4-4h10c1.1 0 2-.9 2-2s-.9-2-2-2H26c-3.9 0-7-3.1-7-7s3.1-7 7-7z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
