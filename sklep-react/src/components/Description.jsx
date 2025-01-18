// eslint-disable-next-line react/prop-types

const Description = ({ children, showImage }) => {
    const { text, image } = children;

    return (
        <div>
          <p>{text}</p>
          {showImage && (
            <img
              src={image}
              alt="Description visual"
              style={{ width: "300px", height: "auto", marginTop: "10px" }}
            />
          )}
        </div>
      );
    };


export default Description;