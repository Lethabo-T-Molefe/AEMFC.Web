import './styles/App.css'
import GlitchText from './components/GlitchText'


function App() {

  return (
    <>
      <GlitchText
        speed={1}
        enableShadows={true}
        enableOnHover={true}
        className="custom-class"
      >
        AEMFC Web
      </GlitchText>
    </>
  );
}

export default App
