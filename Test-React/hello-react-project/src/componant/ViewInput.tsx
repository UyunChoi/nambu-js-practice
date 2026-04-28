interface ViewInputProps {
  viewText : string;
}

const ViewInput = ({viewText}:ViewInputProps) => {
  return(
    <p>
      현재 text : {viewText}
    </p>
  );
};

export default ViewInput;