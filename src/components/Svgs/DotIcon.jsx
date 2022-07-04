export function DotIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <rect width="20" height="20" fill={props.dotColor} rx="10"></rect>
    </svg>
  );
}