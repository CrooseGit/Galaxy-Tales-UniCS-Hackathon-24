interface OptionButtonProps {
  reloadFunction: () => void;
  toggleOptionDropdown: (e: any) => void;
}

const AgeButton = ({
  toggleOptionDropdown,
}: OptionButtonProps) => {
  // const [optionDropdownVisible, setOptionDropdownVisible] = useState(false);

  const handleChild = () => {
    
  };

  const handleTeenager = () => {
  };

  const handleAdult = () => {

  }
  return (
    <div>
      {/* dropdown */}
      <div className='option-dropdown'>
        {/* button */}
        <button
          tabIndex={0}
          className='option-button'
          onClick={toggleOptionDropdown}
        >Age
        </button>

        {/* dropdown content */}
        {
          <div className='shown-options'>
            <button
              className='shown-option-button first-button'
              type='button'
              onClick={() => {
                // setOptionDropdownVisible(false);
                handleChild();
              }}
            >
              Child
            </button>
              <button
                className='shown-option-button'
                type='button'
                onClick={() => {
                    handleTeenager();
                }}
              >
                Teenager
              </button>

            <button
              className='shown-option-button last-button'
              type='button'
              onClick={() => {
                // setOptionDropdownVisible(false);
                handleAdult();
              }}
            >
              Adult
            </button>
          </div>
        }
      </div>
    </div>
  );
};
export default AgeButton;
