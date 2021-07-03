function IconSvg(props) {
  const icons = {
    undo: {
      d1: "M0 0h24v24H0V0z",
      d2: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15c0 .55.45 1 1 1h5.59c.89 0 1.34-1.08.71-1.71l-1.91-1.91c1.39-1.16 3.16-1.88 5.12-1.88 3.16 0 5.89 1.84 7.19 4.5.27.56.91.84 1.5.64.71-.23 1.07-1.04.75-1.72C20.23 10.42 16.65 8 12.5 8z",
    },
    check: {
      d1: "M0 0h24v24H0V0zm0 0h24v24H0V0z",
      d2: "M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    },
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      viewBox="0 0 24 24"
      width={props.width}
      fill={props.color}
    >
      <path d={icons[props.icon].d1} fill="none" />
      <path d={icons[props.icon].d2} />
    </svg>
  );
}

export default IconSvg;
