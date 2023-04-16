import './Badge.scss';

export const Badge = ({ color, onClick, className }) => (
  <i onClick={onClick} className={`badge badge--${color} ${className}`}></i>
);
