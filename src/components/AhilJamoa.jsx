const CircularText = () => {
    return (
      <div className="flex items-center justify-center  absolute -right-32   w-[300px] h-[300px]">
        <svg
          width="300"
          height="300"
          viewBox="0 0 200 200"
          className="circular-text"
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100
                 m -75, 0
                 a 75,75 0 1,1 150,0
                 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text fill="white" fontSize="14">
            <textPath href="#circlePath" startOffset="0%">
              AXIL JAMOA AXIL JAMOA AXIL JAMOA AXIL JAMOA AXIL JAMOA
            </textPath>
          </text>
        </svg>
      </div>
    );
  };
  
  export default CircularText;
  