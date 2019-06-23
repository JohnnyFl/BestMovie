import Header from "../components/Header";
import Movies from "../components/Movies";

const Index = () => {
  return (
    <div style={{width: '100%'}}>
      <Header />
      <div className="container">
        <Movies />
      </div>

      <style jsx global>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        .container {
          margin: 0 auto;
          width: 90%;
        }
      `}</style>
    </div>
  );
};

export default Index;
