import { ReactNode } from "react";

const agregarBoton = () => {
  return console.log("Hiciste click");
};
interface propsAlerts {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: propsAlerts) => {
  return (
    <>
      <div className="alert alert-primary alert-dismissible">
        {children}
        <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={onClose} />
      </div>
    </>
  );
};

export default Alert;
