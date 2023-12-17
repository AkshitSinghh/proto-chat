import "../../styles/routes/home.css";

const Design = ({ children }) => {
  return (
    <div className="flex flex-grow items-center justify-center">
      <div className="md:w-[50rem] border-0 border-primary md:border-2 rounded-3xl md:p-12 h-[30rem] items-center flex flex-col justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="14"
          viewBox="0 0 448 512"
          className="login_icon"
        >
          <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z" />
        </svg>
        {children}
      </div>
    </div>
  );
};

export default Design;
