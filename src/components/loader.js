import { ColorRing } from 'react-loader-spinner';


const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="100"
      width="100"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: "fixed",
        left: "49%",
        bottom: "55%"
      }}
      wrapperClass="blocks-wrapper"
      colors={['#4fa1e4', '#4fa1e4', '#4fa1e4', '#4fa1e4', '#4fa1e4']}
    />)
}

export default Loader