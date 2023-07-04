import Swal from "sweetalert2";

const Popup = () => {
  const openGooglePage = () => {
    const width = 600;
    const height = 400;
    const left = 0;
    const top = window.innerHeight / 2 - height / 2;
    const features = `width=${width},height=${height},left=${left},top=${top}`;

    window.open("https://www.google.com", "Google", features);
  };
  const popupTwo = () => {
    const width = 300;
    const height = 400;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const features = `width=${width},height=${height},left=${left},top=${top}`;
    window.open(
      "https://www.tutorialspoint.com/index.htm",
      "Website",
      features
    );
  };
  const popupDuplicate = () => {
    const width = 300;
    const height = 400;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const features = `width=${width},height=${height},left=${left},top=${top}`;
    window.open(
      "https://www.javatpoint.com/java-tutorial",
      "Website",
      features
    );
  };
  const popupThree = () => {
    const width = 300;
    const height = 400;
    const left = window.innerWidth - width;
    const top = window.innerHeight / 2 - height / 2;
    const features = `width=${width},height=${height},left=${left},top=${top}`;

    window.open("https://www.tutorialsteacher.com/", "Website", features);
  };
  const duplicateTab = () => {
    window.open("https://task-82976.web.app/", "_blank");
  };
  const windowPopup = () => {
    Swal.fire({
      title: "Popup one",
      text: "Popup One body.Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };
  const alertBox = () => {
    window.alert("this is an alert box");
  };
  const handleConfirm = () => {
    const result = window.confirm("Confirm message box");
    if (result) {
      console.log("User confirmed");
    } else {
      console.log("User cancelled");
    }
  };
  const handlePrompt = () => {
    const result = window.prompt(
      "JALA Academy- A Place to find your Dream Job"
    );
    if (result !== null) {
      console.log("User entered:", result);
    } else {
      console.log("User cancelled");
    }
  };
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
      <button
        onClick={openGooglePage}
        className="bg-purple-500  py-1 text-white w-full"
      >
        Popup one
      </button>
      <button
        onClick={popupTwo}
        className="bg-purple-500  py-1 text-white w-full"
      >
        Popup two
      </button>
      <button
        onClick={popupThree}
        className="bg-purple-500  py-1 text-white w-full"
      >
        Popup three
      </button>
      <button
        onClick={popupDuplicate}
        className="bg-purple-500  py-1 text-white w-full"
      >
        Popup Duplicate
      </button>
      <button
        onClick={duplicateTab}
        className="bg-purple-500  py-1 text-white w-full"
      >
        Duplicate Tab
      </button>
      <button
        onClick={windowPopup}
        className="bg-purple-500  py-1 text-white w-full"
      >
        In Window popup
      </button>
      <button
        onClick={alertBox}
        className="bg-purple-500  py-1 text-white w-full"
      >
        Alert Box
      </button>
      <button
        onClick={handleConfirm}
        className="bg-purple-500  py-1 text-white w-full"
      >
        Confirm Box
      </button>
      <button
        onClick={handlePrompt}
        className="bg-purple-500  py-1 text-white w-full"
      >
        Prompt Box
      </button>
    </div>
  );
};

export default Popup;
