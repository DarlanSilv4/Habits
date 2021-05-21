function IconSvg(props) {
  const icons = {
    cancel: {
      d1: "M0 0h24v24H0z",
      d2: "M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
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
      <path d={icons[props.icon].d1} fill="none" />{" "}
      <path d={icons[props.icon].d2} />
    </svg>
  );
}

export default IconSvg;
