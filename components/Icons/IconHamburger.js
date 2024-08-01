function IconHamburger({ className, toggleMenu }) {
  function handleClick() {
    toggleMenu((prev) => !prev);
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="17"
      className={className}
      onClick={handleClick}
    >
      <g fill="#FFF" fillRule="evenodd">
        <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
      </g>
    </svg>
  );
}

export default IconHamburger;
